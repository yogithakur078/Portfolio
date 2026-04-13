import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1f242d] overflow-x-hidden pt-16 sm:pt-20 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-purple-400 text-sm">#</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Main */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 fade-in ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* LEFT */}
          <div className={`slide-in-left ${isVisible ? "visible" : ""}`}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Let's Connect
            </h2>

            <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
              <div className="flex items-center gap-3">
                <FiMail />
                <span className="text-white">yogithakur078@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone />
                <span className="text-white">+91 9816547549</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin />
                <span className="text-white">Chandigarh, India</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com" target="_blank">
                <FiLinkedin size={22} />
              </a>
              <a href="https://github.com" target="_blank">
                <FiGithub size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={`slide-in-right ${isVisible ? "visible" : ""}`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 bg-[#2a2f3a] border border-purple-500/30 rounded"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 bg-[#2a2f3a] border border-purple-500/30 rounded"
                />

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-3 bg-[#2a2f3a] border border-purple-500/30 rounded"
                />

                <button className="w-full bg-purple-600 py-3 rounded hover:bg-purple-700 transition">
                  Submit
                </button>

              </form>
            ) : (
              <div className="text-center text-green-400">
                ✅ Thank you! Message sent.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;