import React, { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 I am your AI assistant.\n\nYou can ask me about:\n• My skills\n• My projects\n• Resume\n• LinkedIn / GitHub\n• Hiring or contact\n\nJust type your question below 👇",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);
  const bottomRef = useRef(null);

  // ✅ Outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // ✅ Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // ✅ Convert links to clickable
  const renderMessageText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline break-all hover:text-blue-200 transition"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const sendToBackend = async (messageText) => {
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { text: data.reply, sender: "bot" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "Server error! Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentInput = input.trim();

    setMessages((prev) => [
      ...prev,
      { text: currentInput, sender: "user" },
    ]);

    setInput("");
    setLoading(true);

    await sendToBackend(currentInput);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[9999] group">
        <button
          onClick={() => setOpen(!open)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#C778DD] to-purple-500 text-black shadow-[0_10px_30px_rgba(199,120,221,0.35)] hover:shadow-[0_14px_40px_rgba(199,120,221,0.55)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full bg-[#C778DD] opacity-20 blur-lg group-hover:opacity-40 transition"></span>

          <span className="relative z-10">
            {open ? <IoClose size={22} /> : <FaRobot size={22} />}
          </span>
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-24px)] bg-[#2b2f38] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[9999] border border-white/10"
        >
          {/* Header */}
          <div className="bg-[#C778DD] text-black px-4 py-3 font-semibold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot />
              <span>AI Assistant</span>
            </div>
            <IoClose
              className="cursor-pointer text-[20px]"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-3 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-3 text-sm rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line break-all ${
                  msg.sender === "user"
                    ? "self-end bg-[#C778DD] text-black rounded-br-md"
                    : "self-start bg-gray-700 text-white rounded-bl-md"
                }`}
              >
                {renderMessageText(msg.text)}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-gray-700 text-gray-300 px-4 py-3 text-sm rounded-2xl">
                Typing...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-gray-700 bg-[#232730] px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about skills, projects, resume..."
              className="flex-1 px-4 py-3 outline-none text-sm bg-transparent text-white placeholder-gray-400"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 rounded-xl bg-[#C778DD] text-black text-sm font-medium hover:bg-purple-500 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;