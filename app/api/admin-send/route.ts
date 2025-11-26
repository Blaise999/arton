// app/api/admin-send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ArtonAdminMessageEmail } from "@/app/emails/ArtonAdminMessageEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { to, subject, message } = body as {
      to: string;
      subject: string;
      message: string;
    };

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Missing to / subject / message" },
        { status: 400 }
      );
    }

    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Arton Capital <advisors@mail.artoncapitals.com>";

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject,
      react: ArtonAdminMessageEmail({ subject, message }),
    });

    if (error) {
      console.error("Resend admin-send error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Admin-send API error:", err);
    return NextResponse.json(
      { error: "Unexpected error" },
      { status: 500 }
    );
  }
}
