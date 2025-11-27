// app/api/eligibility/route.ts
import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/libs/resend"; // make sure this exists (shown below)

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

    // Validate (same things you ask in the form)
    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 1) Customized email *to the user* using their name & email
    await resend.emails.send({
      from: "Arton Capitals <no-reply@artoncapitals.com>", // your verified sender
      to: email, // <= exactly what they typed in the form
      subject: "Your Citizenship by Investment Eligibility Assessment",
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6;">
          <p>Dear ${name},</p>

          <p>Thank you for completing your initial eligibility assessment for Citizenship by Investment with Arton Capitals.</p>

          <p>Our advisory team will review your profile and share tailored program options, indicative costs and suggested next steps.</p>

          <p style="margin-top: 16px; font-weight: 600;">Summary of your answers:</p>
          <ul>
            <li><strong>Country of residence:</strong> ${country || "Not provided"}</li>
            <li><strong>Investment capacity:</strong> ${budget || "Not provided"}</li>
            <li><strong>Family profile:</strong> ${family || "Not provided"}</li>
            <li><strong>Desired timeline:</strong> ${timeline || "Not provided"}</li>
          </ul>

          <p style="margin-top: 16px;">
            If any of the above details need correction, you may reply to this email with the updated information.
          </p>

          <p style="margin-top: 16px;">Best regards,<br/>Arton Capitals Advisory Team</p>
        </div>
      `,
    });

    // 2) (Optional) Internal notification to you
    await resend.emails.send({
      from: "Arton Capitals <no-reply@artoncapitals.com>",
      to: "advisory@artoncapitals.com", // change to your internal email
      subject: "New CBI Eligibility Assessment",
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6;">
          <p>A new eligibility assessment has been submitted:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li><strong>Budget:</strong> ${budget}</li>
            <li><strong>Family:</strong> ${family}</li>
            <li><strong>Timeline:</strong> ${timeline}</li>
          </ul>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Eligibility API error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
