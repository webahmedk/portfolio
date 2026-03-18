'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiYoutube, 
  FiArrowRight,
  FiCpu,
  FiCloud,
  FiShield,
  FiZap,
  FiGitBranch,
  FiLayers,
  FiGrid,
  FiActivity
} from 'react-icons/fi';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Khalid Ahmed Khan',
        'a Full Stack Developer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      contentType: 'html'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm">Based in Hyderabad, India</span>
            </div>

            {/* Dynamic Typed Content */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span 
                  ref={typedRef}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                ></span>
              </h1>
              
              {/* Brief intro - minimal, as about section is separate */}
              <p className="text-lg text-gray-600 max-w-xl">
                Crafting scalable solutions with 8+ years of experience in building enterprise-grade applications.
              </p>
            </div>

            {/* System Design & Architecture Card */}
            <div className="relative group">
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              
              <div className="relative bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  {/* Architecture Icon Matrix */}
                  <div className="flex-shrink-0 grid grid-cols-3 gap-1.5 w-24 h-24">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1.5 flex items-center justify-center border border-blue-100">
                      <FiCpu className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-1.5 flex items-center justify-center border border-purple-100">
                      <FiCloud className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-1.5 flex items-center justify-center border border-amber-100">
                      <FiShield className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-1.5 flex items-center justify-center border border-green-100">
                      <FiZap className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-1.5 flex items-center justify-center border border-red-100">
                      <FiGitBranch className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-1.5 flex items-center justify-center border border-indigo-100">
                      <FiLayers className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-1.5 flex items-center justify-center border border-purple-100">
                      <FiGrid className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-1.5 flex items-center justify-center border border-pink-100">
                      <FiActivity className="w-4 h-4 text-pink-600" />
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-1.5 flex items-center justify-center border border-gray-200">
                      <span className="text-[10px] font-mono font-bold text-gray-500">3+</span>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>

            {/* Let's Talk Button */}
            <div>
              <Link
                href="#contact"
                className="group inline-flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Let's discuss your project</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                Connect with me
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://linkedin.com/in/khalidahmedkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </Link>
                <Link
                  href="https://twitter.com/khalidahmedkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5 text-gray-600 group-hover:text-blue-400" />
                </Link>
                <Link
                  href="https://youtube.com/@khalidahmedkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-gray-200 hover:border-red-400 hover:shadow-md transition-all duration-300"
                  aria-label="YouTube"
                >
                  <FiYoutube className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                </Link>
              </div>
            </div>
          </div>

       
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-5 h-9 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}