// app/api/global-citizen-lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where you receive new leads
const OWNER_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL || "Danielhenry697@gmail.com";

// From address configured in Resend (domain must be verified)
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Arton Capital <no-reply@artoncapitals.com>";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let body: Record<string, any> = {};

    if (contentType.includes("application/json")) {
      body = (await req.json()) ?? {};
    } else {
      // handles x-www-form-urlencoded & multipart/form-data
      const formData = await req.formData();
      formData.forEach((value, key) => {
        body[key] = value.toString();
      });
    }

    const fname = (body.fname as string | undefined)?.trim();
    const lastname = (body.lastname as string | undefined)?.trim();
    const email = (body.email as string | undefined)?.trim();

    if (!fname || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing first name or email." },
        { status: 400 }
      );
    }

    const fullName = [fname, lastname].filter(Boolean).join(" ");

    // 1) Email to YOU (all form data)
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `New Global Citizen lead from ${fullName}`,
      text:
        `New lead from Become a Global Citizen form:\n\n` +
        Object.entries(body)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"),
    });

    // 2) Auto-reply to the user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your inquiry – Arton Capital",
      html: `
        <p>Dear ${fname},</p>
        <p>
          Thank you for reaching out to Arton Capital and starting your journey
          to becoming a Global Citizen.
        </p>
        <p>
          One of our team members will carefully review your information and
          contact you within 24 hours to discuss the most suitable programs for
          your goals.
        </p>
        <p>
          In the meantime, if you have any urgent questions, you can reply
          directly to this email.
        </p>
        <p>Warm regards,<br/>Arton Capital Team</p>
      `,
      text: `
Dear ${fname},

Thank you for reaching out to Arton Capital and starting your journey to
becoming a Global Citizen.

One of our team members will carefully review your information and contact you
within 24 hours to discuss the most suitable programs for your goals.

In the meantime, if you have any urgent questions, you can reply directly to
this email.

Warm regards,
Arton Capital Team
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in /api/global-citizen-lead:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
