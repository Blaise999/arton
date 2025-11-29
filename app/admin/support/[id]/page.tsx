// app/admin/support/[id]/page.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/libs/supabaseClient";

type ChatMessage = {
  id: string;
  sender: "visitor" | "admin";
  text: string;
  created_at: string;
};

type Conversation = {
  id: string;
  name: string | null;
  email: string | null;
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  country_code: string | null;
  first_page: string | null;
  created_at: string;
};

export default function ConversationPage() {
  const params = useParams();
  const conversationId = params?.id as string;

  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  useEffect(() => {
    if (!conversationId) return;

    async function load() {
      setLoading(true);

      const [{ data: conv, error: convErr }, { data: msgs, error: msgErr }] =
        await Promise.all([
          supabase
            .from("conversations")
            .select(
              "id, name, email, ip, city, region, country, country_code, first_page, created_at"
            )
            .eq("id", conversationId)
            .single(),
          supabase
            .from("messages")
            .select("*")
            .eq("conversation_id", conversationId)
            .order("created_at", { ascending: true }),
        ]);

      if (convErr) console.error("Load conversation error:", convErr);
      if (msgErr) console.error("Load messages error:", msgErr);

      if (conv) setConversation(conv as Conversation);
      if (msgs) setMessages(msgs as ChatMessage[]);

      setLoading(false);
    }

    load();

    // realtime subscription for new messages in this conversation
    const channel = supabase
      .channel(`admin-conversation-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const msg = payload.new as ChatMessage;
          setMessages((prev) => [...prev, msg]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  function formatLocation(c: Conversation | null) {
    if (!c) return "Unknown";
    if (c.city || c.country) {
      return `${c.city ?? ""}${c.city && c.country ? ", " : ""}${
        c.country ?? ""
      }`;
    }
    if (c.country_code) return c.country_code;
    if (c.ip) return c.ip;
    return "Unknown";
  }

  async function sendReply() {
    if (!reply.trim() || !conversationId) return;
    const text = reply.trim();
    setReply("");
    setSending(true);

    // optimistic add
    const temp: ChatMessage = {
      id: `temp-${Date.now()}`,
      sender: "admin",
      text,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, temp]);

    const { error } = await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender: "admin",
      text,
    });

    if (error) {
      console.error("Send reply error:", error);
      // optional: show toast or revert
    }

    await supabase
      .from("conversations")
      .update({ last_message: text, status: "open" })
      .eq("id", conversationId);

    setSending(false);
  }

  if (!conversationId) return null;

  return (
    <main className="min-h-screen bg-black pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-4xl px-4 pb-16 flex flex-col h-[80vh]">
        <header className="mb-4">
          <h1 className="text-xl font-semibold">
            Chat with {conversation?.name || conversation?.email || "Visitor"}
          </h1>
          <p className="mt-1 text-xs text-white/60">
            Location / IP:{" "}
            <span className="font-medium">{formatLocation(conversation)}</span>
            {conversation?.ip && (
              <span className="text-white/40"> · {conversation.ip}</span>
            )}
          </p>
          {conversation?.first_page && (
            <p className="mt-1 text-[11px] text-white/55">
              First page:{" "}
              <a
                href={conversation.first_page}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {conversation.first_page}
              </a>
            </p>
          )}
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto rounded-2xl border border-white/10 bg-black/50 p-3 space-y-2">
          {loading && (
            <div className="text-sm text-white/60">
              Loading conversation…
            </div>
          )}

          {!loading && messages.length === 0 && (
            <div className="text-sm text-white/60">
              No messages yet in this conversation.
            </div>
          )}

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.sender === "admin" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                  m.sender === "admin"
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 text-white"
                }`}
              >
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  {m.sender === "admin" ? "You" : "Visitor"}
                </div>
                <div className="whitespace-pre-wrap text-[13px]">
                  {m.text}
                </div>
                <div className="mt-1 text-[10px] text-white/35">
                  {new Date(m.created_at).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Reply input */}
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            sendReply();
          }}
        >
          <input
            className="flex-1 rounded-xl border border-white/25 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-[#cc9966]"
            placeholder="Type your reply…"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            type="submit"
            disabled={sending}
            className="rounded-xl bg-[#cc9966] px-4 py-2 text-sm font-semibold text-black hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
