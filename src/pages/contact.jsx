import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "yogithakur078@gmail.com",
      link: "mailto:yogithakur078@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 9816547549",
      link: "tel:+919816547549",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Chandigarh, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yogeshthakur078",
      color: "hover:text-blue-500",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      link: "https://github.com/yogithakur078",
      color: "hover:text-gray-300",
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#1f242d] min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-purple-400 text-sm">#</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Let's Connect</h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300 shrink-0">
                      <Icon
                        size={20}
                        className="text-purple-400 group-hover:text-purple-300"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-[#2a2f3a] border border-purple-500/30 flex items-center justify-center text-gray-400 hover:border-purple-500 ${social.color} transition-all duration-300`}
                      title={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#2a2f3a] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-red-500"
                        : "border-purple-500/30 focus:border-purple-500/60"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#2a2f3a] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-500"
                        : "border-purple-500/30 focus:border-purple-500/60"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#2a2f3a] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-purple-500/30 focus:border-purple-500/60"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-[#2a2f3a] border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-purple-500/30 focus:border-purple-500/60"
                    }`}
                    placeholder="Tell me more about your project or inquiry..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="rounded-lg border border-green-500/40 bg-green-500/10 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-green-400 text-base">
                  Your message has been submitted successfully.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Prefer another way of contacting?
          </h3>
          <p className="text-gray-400 mb-4">
            You can also reach out directly by email.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:yogithakur078@gmail.com"
              className="px-6 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;