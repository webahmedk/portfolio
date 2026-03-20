'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiMenu, 
  FiX,
  FiGithub,
  FiArrowUpRight
} from 'react-icons/fi';

const navigation = [
  { name: '$ whoami', href: '/', label: 'Home' },
  { name: '~/code', href: '/projects', label: 'Projects' },
  { name: '$ connect', href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-white/40 backdrop-blur-sm py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Empty Circle */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-mono transition-colors duration-200 ${
                    isActive 
                      ? 'text-gray-900' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  title={item.label}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gray-300 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right - GitHub Link */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://github.com/khalidahmedkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 group"
            >
              <FiGithub className="w-4 h-4" />
              <span className="font-mono">code</span>
              <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[73px] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 text-base font-mono rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-400">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="px-4">
                <Link
                  href="https://github.com/khalidahmedkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <FiGithub className="w-5 h-5" />
                  <span className="text-sm font-mono">code</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}