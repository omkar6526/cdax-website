import { useState } from "react";

export default function AskAnything() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi  Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  // Simple keyword-based responses (frontend only)
  const getBotReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! How can I help you today?";
    if (lower.includes("course")) return "We offer multiple courses in Web Dev, AI, and more!";
    if (lower.includes("price")) return "Our courses start at ₹1999/month, with flexible plans.";
    if (lower.includes("certificate")) return "Yes, you get a verified certificate on completion!";
    return "Sorry, I am just a frontend bot but I will guide you as best as I can.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botMsg = { sender: "bot", text: getBotReply(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Ask Anything</h1>

      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 h-[500px] overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
              msg.sender === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
