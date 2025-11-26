// app/admin/send-email/page.tsx
"use client";

import React, { useState } from "react";

export default function AdminSendEmailPage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; text: string }>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!to.trim() || !subject.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    // Simple email check
    if (!/^\S+@\S+\.\S+$/.test(to.trim())) {
      setStatus({ type: "error", text: "Please enter a valid recipient email address." });
      return;
    }

    try {
      setSending(true);

      const res = await fetch("/api/admin-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to: to.trim(), subject: subject.trim(), message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("Admin send error:", data);
        setStatus({
          type: "error",
          text:
            (data as any)?.error?.message ||
            (data as any)?.error ||
            "Could not send email. Please try again.",
        });
        return;
      }

      setStatus({ type: "success", text: "Email sent successfully." });
      // Optionally clear fields
      // setTo("");
      // setSubject("");
      // setMessage("");
    } catch (err) {
      console.error("Admin send failed:", err);
      setStatus({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-black pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Admin • Send Email
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Compose and send a one-off email from your Resend-powered address.
            Use only for legitimate, permission-based communication.
          </p>
        </header>

        <div className="rounded-2xl border border-white/10 bg-black/60 p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                To
              </label>
              <input
                type="email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="client@example.com"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Your Citizenship by Investment options"
                className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Dear Client,\n\nThank you for your interest in Arton Capital...`}
                className="mt-2 min-h-[200px] w-full rounded-xl border border-white/20 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
              />
              <p className="mt-2 text-[11px] text-white/40">
                Basic text only. Line breaks will be preserved in the email.
              </p>
            </div>

            {status && (
              <div
                className={`rounded-xl border px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-100"
                    : "border-amber-300/60 bg-amber-300/10 text-amber-100"
                }`}
              >
                {status.text}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-lg bg-[#cc9966] px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Email"}
              </button>
            </div>

           
            
          </form>
        </div>
      </div>
    </main>
  );
}
