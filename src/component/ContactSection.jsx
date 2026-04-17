import React from "react";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import DotPattern from "./DotPattern";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`relative mt-20 md:mt-28 px-4 sm:px-6 lg:px-12 overflow-x-hidden fade-in ${isVisible ? "visible" : ""
        }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-white shrink-0">
          <span className="text-[#C778DD]">#</span>contacts
        </h2>
        <div className="hidden sm:block h-px flex-1 max-w-[160px] bg-[#C778DD]" />
      </div>

      <div className="mt-8 md:mt-[45px] flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-10 min-w-0">
        {/* Left Text */}
        <div
          className={`relative w-full max-w-[505px] min-w-0 overflow-hidden slide-in-left ${isVisible ? "visible" : ""
            }`}
        >
          <div className="absolute left-0 top-[26px] hidden lg:block">
            <DotPattern count={12} className="grid-cols-3" />
          </div>

          <p
            className={`text-sm sm:text-base leading-[26px] text-[#ABB2BF] lg:pl-16 break-words stagger-item ${isVisible ? "visible" : ""
              }`}
          >
            I’m interested in freelance opportunities. However, if you have
            any other request or question, don’t hesitate to contact me.
          </p>
        </div>

        {/* Message Box */}
        <div
          className={`w-full max-w-[300px] min-w-0 border border-[#ABB2BF] p-3 sm:p-4 hover:border-[#C778DD] transition-colors overflow-hidden slide-in-right ${isVisible ? "visible" : ""
            }`}
        >
          <p
            className={`text-sm sm:text-base font-semibold text-white stagger-item ${isVisible ? "visible" : ""
              }`}
          >
            Message me here
          </p>

          <div className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-[#ABB2BF] min-w-0">
            <div
              className={`flex items-center gap-2 min-w-0 stagger-item ${isVisible ? "visible" : ""
                }`}
            >
              <FaDiscord className="text-xs sm:text-sm shrink-0" />
              <span className="truncate">Yogithakur078</span>
            </div>

            <div
              className={`flex items-center gap-2 min-w-0 stagger-item ${isVisible ? "visible" : ""
                }`}
            >
              <FaEnvelope className="text-xs sm:text-sm shrink-0" />
              <span className="truncate">yogithakur078@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;