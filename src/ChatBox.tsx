import React, { useState } from "react";
import Flag from "react-world-flags";
import MessageBubble from "./MessageBubble";
import Modal from "./Modal";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Willkommen bei BerlinBuddy! Wie kann ich dir helfen?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState<"de" | "en">("de");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            language === "de"
              ? "Das ist eine Beispielantwort. Bald kommt deine echte Antwort von BerlinBuddy!"
              : "This is a sample answer. Soon you'll get your real response from BerlinBuddy!",
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

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F0F0F] text-white overflow-hidden">
      {/* Header */}
      <header className="text-center py-4 border-b border-gray-800 px-2">
        <h1 className="text-2xl font-mono font-bold text-[#C8102E]">
          BerlinBuddy
        </h1>
        <p className="text-sm text-gray-400">
          {language === "de"
            ? "Dein Begleiter für ein einfaches Leben in Berlin!"
            : "Your companion for a simple life in Berlin!"}
        </p>
      </header>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 bg-transparent border-2 border-[#C8102E] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#C8102E] hover:text-white transition z-10"
      >
        <Flag code={language === "de" ? "GB" : "DE"} className="w-6 h-6" />
      </button>

      {/* Messages */}
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
      </main>

      {/* Footer / Input */}
      <footer className="border-t border-gray-800 px-4 py-3 bg-[#0F0F0F]">
        <div className="flex items-center gap-2 bg-[#1F1F1F] border border-gray-700 rounded-md px-4 w-full md:w-1/2 mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              language === "de"
                ? "Schreib eine Nachricht..."
                : "Write a message..."
            }
            className="flex-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            className="text-[#C8102E] font-medium hover:underline transition"
          >
            {language === "de" ? "Senden" : "Send"}
          </button>
        </div>
      </footer>

      {/* Floating Button for Modal */}
      <button
        onClick={toggleModal}
        className="fixed bottom-4 left-4 bg-[#C8102E] text-white rounded-full p-3 shadow-lg hover:bg-[#a60e1c] transition text-xl"
      >
        💬
      </button>

      {isModalOpen && <Modal toggleModal={toggleModal} language={language} />}
    </div>
  );
};

export default ChatBox;
