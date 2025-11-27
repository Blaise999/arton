// app/api/eligibility/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EligibilityPayload = {
  name: string;
  email: string;
  country: string;
  budget: string;
  family: string;
  timeline: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<EligibilityPayload>;
    const { name, email, country, budget, family, timeline } = body;

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    // use the SAME from as admin-send so you know it’s verified
    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Arton Capital <advisors@mail.artoncapitals.com>";

    // 1) send personalized email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from,
      to: [email], // same style as admin route
      subject: "Your Citizenship by Investment Eligibility Assessment",
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; line-height: 1.6;">
          <p>Dear ${name},</p>

          <p>Thank you for completing your initial eligibility assessment for Citizenship by Investment with Arton Capital.</p>

          <p>Our advisory team will review your profile and share tailored program options, indicative costs and suggested next steps.</p>

          <p style="margin-top: 16px; font-weight: 600;">Summary of your answers:</p>
          <ul>
            <li><strong>Country of residence:</strong> ${country || "Not provided"}</li>
            <li><strong>Investment capacity:</strong> ${budget || "Not provided"}</li>
            <li><strong>Family profile:</strong> ${family || "Not provided"}</li>
            <li><strong>Desired timeline:</strong> ${timeline || "Not provided"}</li>
          </ul>

          <p style="margin-top: 16px;">Best regards,<br/>Arton Capital Advisory Team</p>
        </div>
      `,
    });

    if (userError) {
      console.error("Resend eligibility user error:", userError);
      return NextResponse.json({ ok: false, error: userError }, { status: 500 });
    }

    // 2) optional internal notification (won't block user email)
    const internalTo =
      process.env.ELIGIBILITY_INTERNAL_EMAIL || "advisors@mail.artoncapitals.com";

    if (internalTo) {
      const { error: internalError } = await resend.emails.send({
        from,
        to: [internalTo],
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

      if (internalError) {
        console.error("Resend eligibility internal error:", internalError);
        // don’t fail the whole request just because the internal mail failed
      }
    }

    return NextResponse.json({ ok: true, id: userData?.id });
  } catch (err) {
    console.error("Eligibility API error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
