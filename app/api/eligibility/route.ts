// app/api/eligibility/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ArtonEligibilityEmail } from "@/app/emails/ArtonEligibilityEmail";
import { ArtonAdminMessageEmail } from "@/app/emails/ArtonAdminMessageEmail";

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

    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Arton Capital <advisors@mail.artoncapitals.com>";

    /* 1) User-facing email in Arton template style */
    const {
      data: userData,
      error: userError,
    } = await resend.emails.send({
      from,
      to: [email],
      subject: "Your Citizenship by Investment Eligibility Assessment",
      react: ArtonEligibilityEmail({
        name,
        email,
        country,
        budget,
        family,
        timeline,
      }),
    });

    if (userError) {
      console.error("Resend eligibility user error:", userError);
      return NextResponse.json(
        { ok: false, error: userError },
        { status: 500 }
      );
    }

    /* 2) Optional internal notification – reuse your admin template style */
    const internalTo =
      process.env.ELIGIBILITY_INTERNAL_EMAIL || "advisors@mail.artoncapitals.com";

    if (internalTo) {
      const summaryLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Country of residence: ${country || "Not provided"}`,
        `Investment capacity: ${budget || "Not provided"}`,
        `Family profile: ${family || "Not provided"}`,
        `Desired timeline: ${timeline || "Not provided"}`,
      ].join("\n");

      const { error: internalError } = await resend.emails.send({
        from,
        to: [internalTo],
        subject: `New CBI Eligibility Assessment – ${name}`,
        react: ArtonAdminMessageEmail({
          subject: "New CBI Eligibility Assessment",
          message: summaryLines,
        }),
      });

      if (internalError) {
        console.error("Resend eligibility internal error:", internalError);
        // don't break user flow if internal mail fails
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
