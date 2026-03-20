"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Khalid Ahmed Khan",
        "a Full Stack Developer",
        "Learning System Architecture"

      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Grey checkboxes only on some parts */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #e5e5e5 0px, #e5e5e5 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(135deg, #e5e5e5 0px, #e5e5e5 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Based in line */}
          <div className="mb-12">
            <p className="text-gray-500 text-sm">based in Hyderabad, India</p>
          </div>

          {/* Hi, I'm */}
          <div className="mb-2">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900">
              Hi, I'm
            </h1>
          </div>

          {/* Typed name - fixed container */}
          <div className="mb-4 min-h-[4rem]">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900">
              <span ref={typedRef} />
            </h2>
          </div>
          {/* Lorem lines */}
          <div className="mb-10 max-w-xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              Building scalable web applications with modern technologies.
              Passionate about clean code and great user experiences.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-all duration-300 rounded-md"
            >
              <FiDownload className="w-4 h-4" />
              <span>Resume</span>
            </Link>
            
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 text-sm hover:border-gray-500 hover:text-gray-900 transition-all duration-300 rounded-md"
            >
              <span>Let's Talk</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}