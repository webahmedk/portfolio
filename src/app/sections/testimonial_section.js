'use client';

import { FiAward } from 'react-icons/fi';

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Checkbox background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d4d4d4 1px, transparent 1px),
            linear-gradient(to bottom, #d4d4d4 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          opacity: 0.3,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Minimal header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <FiAward className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-400 tracking-wide uppercase">Testimonials</span>
            </div>
            <h3 className="text-2xl font-light text-gray-800">
              What people say
            </h3>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="border-l-2 border-gray-200 pl-6">
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                "Khalid has a strong grasp of MERN stack concepts and a genuine passion for system architecture. 
                His approach to problem-solving is methodical and thorough."
              </p>
              <p className="text-sm text-gray-400">
                — Mentor, The Hacking School
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="border-l-2 border-gray-200 pl-6">
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                "Working with Khalid on DevOps workflows was impressive. He quickly understands complex systems 
                and suggests practical improvements."
              </p>
              <p className="text-sm text-gray-400">
                — Peer Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}