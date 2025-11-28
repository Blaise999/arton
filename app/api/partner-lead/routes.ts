import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import CertifiedPartnerLeadOwnerEmail from "@/app/emails/CertifiedPartnerLeadOwnerEmail";
import CertifiedPartnerLeadAutoReply from "@/app/emails/CertifiedPartnerLeadAutoReply";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where you receive new partner leads
const OWNER_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL || "Danielhenry697@gmail.com";

// From address configured in Resend (domain must be verified)
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Arton Capital <no-reply@artoncapitals.com>";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const get = (key: string) =>
      (formData.get(key)?.toString().trim() as string | undefined) || "";
    const getAll = (key: string) =>
      formData
        .getAll(key)
        .map((v) => v.toString().trim())
        .filter(Boolean);

    const fname = get("fname");
    const lastname = get("lastname");
    const email = get("email");

    if (!fname || !email) {
      // Shouldn't really happen because of HTML required=, but just in case
      return NextResponse.json(
        { ok: false, error: "Missing first name or email." },
        { status: 400 }
      );
    }

    const fullName = [fname, lastname].filter(Boolean).join(" ");

    // Collect all fields nicely for the admin email
    const fields = [
      { label: "First name", value: fname },
      { label: "Last name", value: lastname },
      { label: "Email", value: email },
      { label: "Phone", value: get("phone") },
      { label: "Country of activity", value: get("country_activity") },
      {
        label: "Target market(s)",
        value: getAll("target_markets").join(", "),
      },
      { label: "Preferred contact method", value: get("contact") },
      { label: "Are you", value: get("are_you") },
      { label: "Company", value: get("company") },
      { label: "Program of interest", value: get("program_of_interest") },
      {
        label: "Existing clients in other programs",
        value: get("existing_clients"),
      },
      { label: "Questions / comments", value: get("questions") },
    ];

    // 1) Email to YOU (admin / internal)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `New Certified Partner lead from ${fullName}`,
      react: CertifiedPartnerLeadOwnerEmail({
        fullName,
        email,
        fields,
      }),
    });

    // 2) Auto-reply to the partner
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your Certified Partner inquiry – Arton Capital",
      react: CertifiedPartnerLeadAutoReply({
        fname,
      }),
    });

    // JSON success response for the client-side form
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in /api/partner-lead:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
