import chatbot from "../assets/chatbot/chat.gif";
import { useNavigate } from "react-router-dom";

export default function ChatBot() {
     const navigate = useNavigate();
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      
      {/* Tooltip */}
      <div className="absolute right-24 bottom-1/2 translate-y-1/2
                      bg-blue-300 text-black text-xs px-3 py-1 rounded-lg
                      opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </div>

      {/* Chatbot */}
        <div
      onClick={() => navigate("/ask-anything")}
      className="fixed bottom-6 right-6 z-50 cursor-pointer
                 hover:scale-110 transition-transform"
    >
      <img
        src={chatbot}
        alt="Chatbot"
        className="h-20 w-20 md:h-24 md:w-24 rounded-full "
      />
    </div>
    </div>
  );
}
