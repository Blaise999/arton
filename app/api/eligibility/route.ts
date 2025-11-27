// app/api/eligibility/route.ts
import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/libs/resend";

type EligibilityPayload = {
  name: string;
  email: string;
  country: string;
  budget: string;
  family: string;
  timeline: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<EligibilityPayload>;
    const { name, email, country, budget, family, timeline } = body;

    // Basic validation (matches what your client already enforces)
    if (!name || !email || !country || !budget || !family || !timeline) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1) Send confirmation email to the applicant
    await resend.emails.send({
      from: "Arton Capitals <no-reply@artoncapitals.com>", // use your verified domain/sender
      to: email,
      subject: "Your Citizenship by Investment Eligibility Assessment",
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6; color: #111;">
          <p>Dear ${name},</p>

          <p>Thank you for completing your initial eligibility assessment for Citizenship by Investment with Arton Capitals.</p>

          <p>Our advisory team will review your profile and revert with tailored program options, indicative costs and suggested next steps.</p>

          <p style="margin-top: 16px; font-weight: 600;">Summary of your answers:</p>
          <ul>
            <li><strong>Country of residence:</strong> ${country}</li>
            <li><strong>Investment capacity:</strong> ${budget}</li>
            <li><strong>Family profile:</strong> ${family}</li>
            <li><strong>Desired timeline:</strong> ${timeline}</li>
          </ul>

          <p>If any of the above details are inaccurate or you wish to clarify your situation, you may reply directly to this email.</p>

          <p style="margin-top: 16px;">Best regards,<br/>Arton Capitals Advisory Team</p>
        </div>
      `,
    });

    // 2) (Optional but recommended) Notify your internal inbox / CRM
    await resend.emails.send({
      from: "Arton Capitals <no-reply@artoncapitals.com>",
      to: "advisory@artoncapitals.com", // change to your internal email
      subject: "New CBI Eligibility Assessment Submitted",
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6; color: #111;">
          <p>A new Citizenship by Investment eligibility form was submitted.</p>

          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Country of residence:</strong> ${country}</li>
            <li><strong>Investment capacity:</strong> ${budget}</li>
            <li><strong>Family profile:</strong> ${family}</li>
            <li><strong>Desired timeline:</strong> ${timeline}</li>
          </ul>

          <p>Consider following up within 24–48 hours.</p>
        </div>
      `,
    });

    // If you want to store this in DB, you'd insert here before returning.

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Eligibility API error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
