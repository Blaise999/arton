// app/admin/send-email/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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

type Visit = {
  id: string;
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  country_code: string | null;
  path: string | null;
  user_agent: string | null;
  created_at: string;
};

export default function AdminSendEmailPage() {
  // personal email composer state
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<StatusState>(null);

  // support conversations (for navigation)
  const [convos, setConvos] = useState<SupportConversation[]>([]);
  const [loadingConvos, setLoadingConvos] = useState(true);

  // all visitors (all page hits)
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loadingVisits, setLoadingVisits] = useState(true);

  // Load recent support conversations
  useEffect(() => {
    async function loadConvos() {
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

    loadConvos();
  }, []);

  // Load recent visitors
  useEffect(() => {
    async function loadVisits() {
      setLoadingVisits(true);
      const { data, error } = await supabase
        .from("visits")
        .select(
          "id, ip, city, region, country, country_code, path, user_agent, created_at"
        )
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) {
        console.error("Error loading visits:", error);
        setVisits([]);
      } else {
        setVisits((data || []) as Visit[]);
      }
      setLoadingVisits(false);
    }

    loadVisits();
  }, []);

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

  function formatLocation(
    data:
      | Pick<SupportConversation, "city" | "region" | "country" | "country_code" | "ip">
      | Pick<Visit, "city" | "region" | "country" | "country_code" | "ip">
  ) {
    const parts = [data.city, data.region, data.country].filter(Boolean);
    if (parts.length) return parts.join(", ");
    if (data.country_code) return data.country_code;
    if (data.ip) return data.ip;
    return "Unknown";
  }

  function formatDateTime(created_at: string) {
    const dt = new Date(created_at);
    const date = dt.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const time = dt.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return { date, time };
  }

  return (
    <main className="min-h-screen bg-black pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Admin • Send Email
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Send one-off, manual emails from your Resend-powered address. Use
            this for personalised follow-ups, proposals, or onboarding flows.
          </p>
          <p className="mt-1 text-xs text-white/50">
            Replies from clients will go to your configured{" "}
            <span className="font-medium">From / Reply-To</span> address in
            Resend, so you can continue the conversation in your inbox.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)]">
          {/* PERSONAL EMAIL FORM */}
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
                  placeholder="Your residency / citizenship options"
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
                  placeholder={`Dear Client,\n\nThank you for your interest in artoncapital...`}
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

          {/* RIGHT SIDEBAR: ALL VISITORS + SUPPORT CONVOS */}
          <aside className="rounded-2xl border border-white/10 bg-black/60 p-4 md:p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Site Visitors & Support
            </h2>
            <p className="mt-2 text-xs text-white/55">
              See all recent visitors to your site (IP, location, time, path),
              plus live chat conversations for follow-up.
            </p>

            {/* ALL VISITORS */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Recent Visitors (All Pages)
                </span>
                <span className="text-[10px] text-white/40">
                  Last {visits.length} hits
                </span>
              </div>

              <div className="max-h-48 overflow-y-auto">
                {loadingVisits && (
                  <div className="px-3 py-2 text-xs text-white/50">
                    Loading visitors…
                  </div>
                )}

                {!loadingVisits && visits.length === 0 && (
                  <div className="px-3 py-2 text-xs text-white/50">
                    No visits logged yet.
                  </div>
                )}

                {!loadingVisits &&
                  visits.map((v) => {
                    const { date, time } = formatDateTime(v.created_at);
                    const loc = formatLocation(v);

                    return (
                      <div
                        key={v.id}
                        className="border-b border-white/5 px-3 py-2 text-[10px] last:border-b-0"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/70">{loc}</span>
                          <span className="text-white/40">
                            {date} · {time}
                          </span>
                        </div>
                        <div className="mt-0.5 flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] text-white/55">
                            {v.ip || "Unknown IP"}
                          </span>
                          <span className="text-[10px] text-[#cc9966]">
                            {v.path || "/"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* SUPPORT CONVERSATIONS */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Support Questions (Live Chat)
                </span>
                <span className="text-[10px] text-white/40">
                  Last {convos.length} threads
                </span>
              </div>

              <div className="max-h-52 overflow-y-auto">
                {loadingConvos && (
                  <div className="px-3 py-2 text-xs text-white/50">
                    Loading conversations…
                  </div>
                )}

                {!loadingConvos && convos.length === 0 && (
                  <div className="px-3 py-2 text-xs text-white/50">
                    No conversations yet. When visitors use the support widget,
                    they&apos;ll appear here.
                  </div>
                )}

                {!loadingConvos &&
                  convos.map((c) => {
                    const { date, time } = formatDateTime(c.created_at);
                    const loc = formatLocation(c);

                    return (
                      <Link
                        key={c.id}
                        href={`/admin/support/${c.id}`}
                        className="block w-full border-b border-white/5 px-3 py-2.5 text-left text-xs last:border-b-0 hover:bg-white/5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-[11px] text-white">
                            {c.name || c.email || "Visitor"}
                          </span>
                          <span className="text-[9px] text-white/45">
                            {date}
                          </span>
                        </div>

                        <div className="mt-0.5 text-[10px] text-white/60">
                          {loc !== "Unknown" ? loc : "Unknown location"}{" "}
                          <span className="text-white/40">·</span> {time}
                          {c.ip && (
                            <>
                              <span className="text-white/40"> · </span>
                              <span className="font-mono text-[10px]">
                                {c.ip}
                              </span>
                            </>
                          )}
                        </div>

                        {c.last_message && (
                          <p className="mt-1 line-clamp-2 text-[11px] text-white/75">
                            “{c.last_message}”
                          </p>
                        )}

                        <p className="mt-1 text-[10px] text-[#cc9966]">
                          Open live thread →
                        </p>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
