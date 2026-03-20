"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Typed from "typed.js";
import { 
  FiArrowRight, 
  FiDownload,
  FiGithub, 
  FiLinkedin, 
  FiYoutube,
  FiMail
} from "react-icons/fi";
import { FaXTwitter, FaStackOverflow, FaDev } from "react-icons/fa6";

export default function Hero() {
  const typedRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Khalid Ahmed Khan",
        "a Full Stack Developer",
        "learning System Architecture"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      typed.destroy();
      observer.disconnect();
    };
  }, []);

  const socialIcons = [
    { icon: FiGithub, href: "https://github.com/khalidahmedkhan", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/khalidahmedkhan", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://twitter.com/khalidahmedkhan", label: "Twitter" },
    { icon: FiYoutube, href: "https://youtube.com/@khalidahmedkhan", label: "YouTube" },
    { icon: FaStackOverflow, href: "https://stackoverflow.com/users/khalidahmedkhan", label: "Stack Overflow" },
    { icon: FaDev, href: "https://dev.to/khalidahmedkhan", label: "Dev Community" },
    { icon: FiMail, href: "mailto:khalid@example.com", label: "Email" }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen bg-white flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Main content */}
          <div className={`space-y-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <p className="text-gray-400 text-sm tracking-wide">Hello, I'm</p>
            
            {/* Typed name - properly sized */}
            <div className="min-h-[5rem] md:min-h-[6rem]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800">
                <span ref={typedRef} className="font-medium" />
              </div>
            </div>
            
            <div className="h-px w-12 bg-gray-200 mx-auto my-6"></div>
            <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Building digital experiences with precision and purpose.
              Currently exploring system architecture and distributed systems.
            </p>
          </div>

          {/* Stats - minimalist text */}
          <div className={`flex items-center justify-center gap-6 md:gap-8 mt-12 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="text-center">
              <div className="text-sm font-light text-gray-600">dedicated</div>
              <div className="text-[10px] text-gray-400 mt-1">to craft</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-sm font-light text-gray-600">curious</div>
              <div className="text-[10px] text-gray-400 mt-1">by nature</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-sm font-light text-gray-600">building</div>
              <div className="text-[10px] text-gray-400 mt-1">with purpose</div>
            </div>
          </div>

          {/* Buttons */}
          <div className={`flex flex-wrap items-center justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-all rounded-full"
            >
              <FiDownload className="w-4 h-4" />
              <span>Resume</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-600 text-sm hover:border-gray-500 hover:text-gray-800 transition-all rounded-full"
            >
              <span>Connect</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Social icons */}
          <div className={`flex flex-wrap items-center justify-center gap-5 md:gap-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-700 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}