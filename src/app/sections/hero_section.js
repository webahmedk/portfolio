"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
import {
  FiMapPin,
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { FaXTwitter, FaStackOverflow, FaDev } from "react-icons/fa6";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Khalid Ahmed Khan.",
        "a Full Stack Developer.",
        "Learning System Architecture.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* 1. I'm + Typed Name - First */}
          <div className="mb-6 h-24 flex items-center justify-center">
            <h1 className="text-4xl md:text-4xl lg:text-4xl text-gray-800">
              <span className="font-light text-gray-600">I'm</span>{" "}
              <span ref={typedRef} className="font-normal text-gray-800"></span>
            </h1>
          </div>

          {/* 2. Based in - Not all caps */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 shadow-sm">
              <FiMapPin className="w-3.5 h-3.5 text-gray-400 mr-2" />
              <span className="text-xs text-gray-500">
                based in Hyderabad, India
              </span>
            </div>
          </div>

          {/* 3. Button Group - Resume + Let's Talk */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Resume Button */}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 text-sm rounded-lg border border-gray-400 hover:border-gray-600 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <FiDownload className="w-4 h-4 animate-bounce-subtle group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </Link>

            {/* Let's Talk Button */}
            <Link
              href="#contact"
              className="inline-flex items-center space-x-3 text-gray-600 border-b border-gray-300 pb-1 hover:border-gray-600 hover:text-gray-800 transition-all group"
            >
              <span className="text-base">Let's Talk</span>
              <FiArrowRight className="w-4 h-4 animate-move-arrow group-hover:translate-x-1 transition-transform text-gray-500" />
            </Link>
          </div>

          {/* 4. Connect / Follow Me Here */}
          <div>
            <p className="text-gray-400 text-xs tracking-wider mb-4">
              FOLLOW ME HERE
            </p>
            <div className="flex justify-center items-center space-x-6">
              {/* GitHub */}
              <Link
                href="https://github.com/khalidahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/khalidahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </Link>

              {/* Twitter/X */}
              <Link
                href="https://twitter.com/khalidahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com/@khalidahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <FiYoutube className="w-5 h-5" />
              </Link>

              {/* Stack Overflow */}
              <Link
                href="https://stackoverflow.com/users/khalidahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors duration-300"
                aria-label="Stack Overflow"
              >
                <FaStackOverflow className="w-5 h-5" />
              </Link>

              {/* Dev Community */}
              <Link
                href="https://dev.to/khalidahmedkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                aria-label="Dev Community"
              >
                <FaDev className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
