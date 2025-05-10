// src/components/ChatBox.tsx
import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Das ist eine Beispielantwort. Bald kommt die echte von BerlinBuddy!",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-[#0F0F0F] text-white">
      <header className="text-center py-4 border-b border-gray-800">
        <h1 className="text-2xl font-mono font-bold text-[#C8102E]">
          BerlinBuddy
        </h1>
        <p className="text-sm text-gray-400">
          👋 Willkommen bei BerlinBuddy! Was brauchst du heute?
        </p>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#1F1F1F] text-white px-4 py-3 rounded-xl max-w-[80%]">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </main>

      <footer className="border-t border-gray-800 px-4 py-3 bg-[#0F0F0F]">
        <div className="flex items-center gap-2 bg-[#1F1F1F] border border-gray-700 rounded-md px-4 w-1/2 mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Schreib eine Nachricht..."
            className="flex-1 bg-transparent text-sm text-white py-2 focus:outline-none placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            className="text-[#C8102E] font-medium hover:underline transition"
          >
            Senden
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatBox;
