// app/admin/send-email/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/libs/supabaseClient";

type StatusState = null | { type: "success" | "error"; text: string };

type SupportConversation = {
  id: string;
  name: string | null;
  email: string | null;
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  country_code: string | null;
  last_message: string | null;
  created_at: string;
};

export default function AdminSendEmailPage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<StatusState>(null);

  const [convos, setConvos] = useState<SupportConversation[]>([]);
  const [loadingConvos, setLoadingConvos] = useState(true);
  const [selected, setSelected] = useState<SupportConversation | null>(null);

  // Load recent support conversations
  useEffect(() => {
    async function load() {
      setLoadingConvos(true);
      const { data, error } = await supabase
        .from("conversations")
        .select(
          "id, name, email, ip, city, region, country, country_code, last_message, created_at"
        )
        .order("created_at", { ascending: false })
        .limit(20);

      if (error) {
        console.error("Error loading conversations:", error);
        setConvos([]);
      } else {
        setConvos((data || []) as SupportConversation[]);
      }
      setLoadingConvos(false);
    }

    load();
  }, []);

  function handleSelectConversation(conv: SupportConversation) {
    setSelected(conv);

    // If user left email form empty, prefill from conversation
    if (conv.email) {
      setTo(conv.email);
    }

    if (!subject.trim()) {
      setSubject("Reply to your Artsoncapital enquiry");
    }

    // Only auto-fill message if it's still empty so we don't blow away your typing
    if (!message.trim()) {
      const name = conv.name || "Client";
      const question = conv.last_message || "your enquiry";

      setMessage(
        `Dear ${name},\n\nThank you for reaching out to Artsoncapital via our website.\n\nYou asked:\n“${question}”\n\nBelow is our initial guidance:\n\n[Write your detailed answer here]\n\nIf you’d like, we can also schedule a call to discuss suitable residency or citizenship options for your profile.\n\nBest regards,\nArtsoncapital Advisory Team`
      );
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!to.trim() || !subject.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(to.trim())) {
      setStatus({
        type: "error",
        text: "Please enter a valid recipient email address.",
      });
      return;
    }

    try {
      setSending(true);

      const res = await fetch("/api/admin-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: to.trim(),
          subject: subject.trim(),
          message,
        }),
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
      // keep fields so you see what you sent
    } catch (err) {
      console.error("Admin send failed:", err);
      setStatus({
        type: "error",
        text:
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setSending(false);
    }
  }

  function formatLocation(conv: SupportConversation) {
    if (conv.city || conv.country) {
      return `${conv.city ?? ""}${
        conv.city && conv.country ? ", " : ""
      }${conv.country ?? ""}`;
    }
    if (conv.country_code) return conv.country_code;
    if (conv.ip) return conv.ip;
    return "Unknown";
  }

  return (
    <main className="min-h-screen bg-black pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Admin • Reply & Send Email
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Reply to incoming support questions and send one-off emails from
            your Resend-powered address.
          </p>
          <p className="mt-1 text-xs text-white/50">
            Replies from clients will go to your configured{" "}
            <span className="font-medium">From / Reply-To</span> address in
            Resend, so you can continue the conversation directly from your
            inbox.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* EMAIL FORM */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {selected && (
                <div className="mb-2 rounded-xl border border-white/15 bg-white/5 p-3 text-xs text-white/80">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold">
                      Replying to:{" "}
                      {selected.name ||
                        selected.email ||
                        "Website visitor"}
                    </span>
                    <span className="text-[10px] text-white/50">
                      {new Date(selected.created_at).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[11px] text-white/70">
                    <span className="text-white/50">Location / IP:&nbsp;</span>
                    {formatLocation(selected)}{" "}
                    {selected.ip && (
                      <span className="text-white/45">
                        · {selected.ip}
                      </span>
                    )}
                  </div>
                  {selected.last_message && (
                    <p className="mt-2 text-[11px] text-white/75">
                      <span className="text-white/50">
                        Last question:
                      </span>{" "}
                      “{selected.last_message}”
                    </p>
                  )}
                </div>
              )}

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
                  placeholder="Reply to your residency / citizenship enquiry"
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
                  placeholder={`Dear Client,\n\nThank you for your interest in Artsoncapital...`}
                  className="mt-2 min-h-[220px] w-full rounded-xl border border-white/20 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
                />
                <p className="mt-2 text-[11px] text-white/40">
                  Plain text only. Line breaks will be preserved in the email.
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

          {/* SUPPORT QUESTIONS SIDEBAR */}
          <aside className="rounded-2xl border border-white/10 bg-black/60 p-4 md:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Support Questions
            </h2>
            <p className="mt-2 text-xs text-white/55">
              Recent chats from the on-site support widget. Select a visitor to
              see their question, approximate location and craft an email reply.
            </p>

            <div className="mt-4 h-[360px] overflow-y-auto rounded-xl border border-white/10 bg-black/40">
              {loadingConvos && (
                <div className="p-3 text-xs text-white/50">
                  Loading conversations…
                </div>
              )}

              {!loadingConvos && convos.length === 0 && (
                <div className="p-3 text-xs text-white/50">
                  No conversations yet. When visitors use the support widget,
                  they&apos;ll appear here.
                </div>
              )}

              {!loadingConvos &&
                convos.map((c) => {
                  const isActive = selected?.id === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSelectConversation(c)}
                      className={`block w-full text-left border-b border-white/5 px-3 py-2.5 text-xs last:border-b-0 hover:bg-white/5 ${
                        isActive ? "bg-white/10" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-[11px] text-white">
                          {c.name || c.email || "Visitor"}
                        </span>
                        <span className="text-[9px] text-white/45">
                          {new Date(c.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[10px] text-white/55">
                        {formatLocation(c)}
                      </div>
                      {c.last_message && (
                        <p className="mt-1 line-clamp-2 text-[11px] text-white/75">
                          “{c.last_message}”
                        </p>
                      )}
                    </button>
                  );
                })}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
