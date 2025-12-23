import { useState, useRef, useEffect } from "react";

export default function AskAnything() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  // Auto scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotReply = (text) => {
  const lower = text.toLowerCase();

   if (
    lower.includes("name") ||
    lower.includes("nam") ||
    lower.includes("naam") ||
    lower.includes("what is your name")
  )
    return " I am CDaX ! What Can I Help You?";

  // Greetings
  if (
    lower.includes("hi") ||
    lower.includes("hello") ||
    lower.includes("hey")
  )
    return "Hello 👋 Welcome to our online learning platform. How can I help you?";

  // Platform trust
  if (
    lower.includes("trusted") ||
    lower.includes("genuine") ||
    lower.includes("real")
  )
    return "Yes ✅ our platform is 100% genuine and trusted by thousands of learners.";

  // Courses
  if (
    lower.includes("what courses") ||
    lower.includes("which courses") ||
    lower.includes("courses do you provide") ||
    lower.includes("available courses")
  )
    return "We offer Web Development, Full Stack, React, Java, Python, AI, and Data Science courses.";

  // Beginner friendly
  if (
    lower.includes("beginner") ||
    lower.includes("no experience") ||
    lower.includes("no knowledge")
  )
    return "Yes 😊 Our courses are beginner-friendly and start from basic level.";

  // Fees / Pricing
  if (
    lower.includes("fees") ||
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("how much")
  )
    return "Our course fees start from ₹1999/month with flexible payment options.";

  // EMI
  if (
    lower.includes("emi") ||
    lower.includes("installment") ||
    lower.includes("monthly payment")
  )
    return "Yes 👍 EMI and monthly payment options are available.";

  // Certificate
  if (
    lower.includes("certificate") ||
    lower.includes("certification")
  )
    return "Yes 🎓 You will receive a verified certificate after completing the course.";

  // Course duration
  if (
    lower.includes("duration") ||
    lower.includes("how long") ||
    lower.includes("time period")
  )
    return "Course duration varies from 1 to 6 months depending on the course.";

  // Live or recorded
  if (
    lower.includes("live") ||
    lower.includes("recorded")
  )
    return "Courses include recorded videos along with live doubt-solving sessions.";

  // Placement / Job
  if (
    lower.includes("placement") ||
    lower.includes("job") ||
    lower.includes("career")
  )
    return "We provide placement assistance including resume building and interview guidance.";

  // Internship
  if (lower.includes("internship"))
    return "Yes 💼 internship opportunities are available for selected courses.";

  // Demo / Trial
  if (
    lower.includes("demo") ||
    lower.includes("trial") ||
    lower.includes("free class")
  )
    return "Yes 😊 free demo classes are available for selected courses.";

  // Mode
  if (
    lower.includes("online") ||
    lower.includes("offline")
  )
    return "All courses are 100% online so you can learn from anywhere.";

  // Language
  if (
    lower.includes("language") ||
    lower.includes("hindi") ||
    lower.includes("english")
  )
    return "Courses are available in English, Hindi, and Hinglish.";

  // Payment methods
  if (
    lower.includes("payment") ||
    lower.includes("pay")
  )
    return "We accept UPI, Credit/Debit Cards, Net Banking and Wallets.";

  // Refund
  if (lower.includes("refund"))
    return "Yes, we have a refund policy. Please check refund terms on our website.";

  // Login issues
  if (
    lower.includes("login") ||
    lower.includes("unable to login")
  )
    return "Please ensure your email and password are correct or use the Forgot Password option.";

  // Register
  if (
    lower.includes("register") ||
    lower.includes("signup")
  )
    return "Click on the Register button and create your account in under a minute.";

  // App
  if (
    lower.includes("app") ||
    lower.includes("mobile")
  )
    return "Our platform is mobile-friendly and works smoothly on all devices.";

  // Support
  if (
    lower.includes("support") ||
    lower.includes("help") ||
    lower.includes("contact")
  )
   if (["trusted", "genuine", "real"].some(w => lower.includes(w)))
    return "Yes ✅ our platform is 100% genuine and trusted by thousands of students.";

  
  if (["courses", "course", "available courses", "what do you teach"].some(w => lower.includes(w)))
    return "We offer Web Development, Full Stack, React, Java, Python, AI, Data Science, Cloud, and DevOps courses.";

  
  if (["beginner", "no experience", "no knowledge", "fresher"].some(w => lower.includes(w)))
    return "Yes 😊 our IT courses are beginner-friendly and start from basics.";

  
  if (["web development", "website development"].some(w => lower.includes(w)))
    return "Web development teaches HTML, CSS, JavaScript, React, backend, and databases.";

 
  if (["full stack", "mern"].some(w => lower.includes(w)))
    return "Full stack covers frontend, backend, database, APIs, and deployment (MERN stack).";

 
  if (["react"].some(w => lower.includes(w)))
    return "React is used to build fast, modern, and interactive user interfaces.";

 
  if (["java"].some(w => lower.includes(w)))
    return "Java is widely used for backend, enterprise applications, and Spring Boot.";

 
  if (["python"].some(w => lower.includes(w)))
    return "Python is used in web development, AI, data science, and automation.";

 
  if (["ai", "artificial intelligence", "data science"].some(w => lower.includes(w)))
    return "AI and Data Science courses cover Python, ML, data analysis, and real-world projects.";

  
  if (["database", "sql", "mongodb", "postgresql"].some(w => lower.includes(w)))
    return "We teach MySQL, PostgreSQL, MongoDB, and database design concepts.";

  
  if (["backend", "api", "rest"].some(w => lower.includes(w)))
    return "Backend includes Node.js, Express, Spring Boot, and REST API development.";

 
  if (["cloud", "aws", "devops"].some(w => lower.includes(w)))
    return "Cloud and DevOps include AWS basics, deployment, Docker, and CI/CD.";


  if (["project", "real world"].some(w => lower.includes(w)))
    return "Yes 💼 you will build real-world projects that can be added to your resume.";


  if (["certificate", "certification"].some(w => lower.includes(w)))
    return "Yes 🎓 verified certificate is provided after course completion.";

  if (["duration", "how long", "time period"].some(w => lower.includes(w)))
    return "Course duration ranges from 1 to 6 months depending on the course.";


  if (["fees", "price", "cost", "how much"].some(w => lower.includes(w)))
    return "Course fees start from ₹1999/month with EMI options available.";


  if (["payment", "pay", "emi"].some(w => lower.includes(w)))
    return "We accept UPI, Credit/Debit Cards, Net Banking, and EMI options.";


  if (["live", "recorded"].some(w => lower.includes(w)))
    return "Courses include recorded videos with live doubt-clearing sessions.";

 
  if (["placement", "job", "career"].some(w => lower.includes(w)))
    return "We provide placement assistance, resume help, and interview preparation.";


  if (["demo", "trial", "free class"].some(w => lower.includes(w)))
    return "Yes 😊 free demo classes are available for selected IT courses.";

  // 🌍 Online
  if (["online", "remote"].some(w => lower.includes(w)))
    return "All courses are 100% online and accessible from anywhere.";

  // 📱 App
  if (["app", "mobile"].some(w => lower.includes(w)))
    return "Our platform is fully mobile-friendly and works on all devices.";

  // 📞 Support
  if (["support", "help", "contact"].some(w => lower.includes(w)))
    return "Our support team is available via live chat and email support.";

    return "Our support team is available via live chat and email support.";
  // Default fallback
  return "Thanks for your question 😊 Please ask about courses, fees, certificate, demo, or placement.";
};



  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Ask Anything</h1>

      {/* Chat container */}
      <div
        ref={chatContainerRef}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 h-[400px] overflow-y-auto"
      >
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

      {/* Input */}
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
