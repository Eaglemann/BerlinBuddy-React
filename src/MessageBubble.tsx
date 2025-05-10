// src/components/MessageBubble.tsx
import React from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} space-x-2`}
    >
      {!isUser && (
        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="./BerlinBuddy_Logo.svg"
            alt="Assistant"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`rounded-xl px-4 py-3 max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap ${
          isUser ? "bg-blue-600 text-white" : "bg-[#1F1F1F] text-gray-200"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default MessageBubble;
