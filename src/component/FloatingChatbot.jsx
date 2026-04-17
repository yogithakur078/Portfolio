import React, { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const FloatingChatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I am your AI bot 🤖", sender: "bot" },
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

    // ✅ Auto scroll to bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMsg]);

        const currentInput = input;
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: currentInput }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                { text: data.reply, sender: "bot" },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { text: "Server error!", sender: "bot" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* 🔘 Floating Button */}
            <div className="fixed bottom-6 right-6 z-[9999] group">
                <button
                    onClick={() => setOpen(!open)}
                    className="relative flex items-center justify-center w-14 h-14 
    rounded-full bg-gradient-to-r from-[#C778DD] to-purple-500 
    text-black shadow-[0_8px_25px_rgba(199,120,221,0.4)] 
    hover:shadow-[0_12px_35px_rgba(199,120,221,0.6)]
    hover:scale-110 active:scale-95 
    transition-all duration-300"
                >
                    {/* Glow ring */}
                    <span className="absolute inset-0 rounded-full bg-[#C778DD] opacity-20 blur-lg group-hover:opacity-40 transition"></span>

                    {/* Icon */}
                    <span className="relative z-10">
                        {open ? <IoClose size={22} /> : <FaRobot size={22} />}
                    </span>
                </button>
            </div>

            {/* 💬 Chat Window */}
            {open && (
                <div
                    ref={chatRef}
                    className="fixed bottom-20 right-6 w-[320px] bg-[#2b2f38] rounded-xl shadow-2xl flex flex-col overflow-hidden z-[9999] animate-fadeIn"
                >
                    {/* Header */}
                    <div className="bg-[#C778DD] text-black px-4 py-2 font-semibold flex justify-between items-center">
                        AI Assistant
                        <IoClose
                            className="cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    </div>

                    {/* Messages */}
                    <div className="h-[260px] overflow-y-auto p-3 flex flex-col gap-2">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`px-3 py-2 text-sm rounded-lg max-w-[80%] ${msg.sender === "user"
                                    ? "self-end bg-[#C778DD] text-black"
                                    : "self-start bg-gray-700 text-white"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {/* Typing loader */}
                        {loading && (
                            <div className="self-start text-gray-400 text-sm">
                                typing...
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>

                    {/* Input */}
                    <div className="flex border-t border-gray-700">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-2 outline-none text-sm bg-transparent text-white placeholder-gray-400"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-[#C778DD] text-black px-4 text-sm hover:bg-purple-500"
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