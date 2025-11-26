// app/api/eligibility/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ArtonEligibilityEmail } from "@/app/emails/ArtonEligibilityEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      country,
      budget,
      family,
      timeline,
    } = body as {
      name: string;
      email: string;
      country: string;
      budget: string;
      family: string;
      timeline: string;
    };

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Arton Capital <no-reply@mail.artoncapitals.com>";

    const replyTo =
      process.env.RESEND_REPLY_TO || "mail@artoncapitals.com";

    const toInternal =
      process.env.ARTRON_LEADS_TO || "mail@artoncapitals.com";

    // Send to your internal inbox
    const { data, error } = await resend.emails.send({
      from,
      to: [toInternal],
      subject: "New Citizenship Eligibility Assessment",
      react: ArtonEligibilityEmail({
        name,
        email,
        country,
        budget,
        family,
        timeline,
      }),
      replyTo,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // Optional: also send a confirmation email to the user here.

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Eligibility API error:", err);
    return NextResponse.json(
      { error: "Unexpected error." },
      { status: 500 }
    );
  }
}
