type Message = {
  role: "user" | "assistant";
  content: string;
};

const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
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
