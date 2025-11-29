// components/HeroSection.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const HeroSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const languages = ['KANNUR', 'KERALA', 'INDIA'];
  const socialLinks = [
    { name: 'Whatsapp', href: 'https://wa.me/+919847024201?text=Hello+Sreers' },
    { name: 'Email', href: 'mailto:sreesreers@gmail.com' },
    
  ];

  const navigation = ['Home'];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        {/* Soft Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
        
        {/* Light Streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Dashed Circular Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="2,4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Left Sidebar Navigation */}
      <div className="absolute left-8 top-2 transform z-20">
        <nav className="flex flex-col space-y-6">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-mono text-gray-600 hover:text-black transition-colors duration-300 tracking-widest uppercase transform hover:translate-x-1 transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Sidebar Language Selector */}
      <div className="absolute right-8 top-2   z-20">
        <div className="flex flex-col justify-end items-end space-y-1">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setCurrentLanguage(language)}
              className={`text-xs font-mono transition-all duration-300 tracking-widest uppercase ${
                currentLanguage === language
                  ? 'text-black font-bold'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Centered Brand Name */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-8xl md:text-9xl font-serif font-light text-grey-700 tracking-tight select-none">
          sreers
        </h1>
        <p>BUILDERS</p>
      </div>

      {/* Bottom Left Social Links */}
      <div className="absolute left-8 bottom-8 z-20">
        <div className="flex flex-col space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-xs font-mono text-gray-600 hover:text-black transition-colors duration-300 tracking-widest uppercase transform hover:translate-x-1 transition-transform"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Center Contact CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
       <Link href={'https://wa.me/+919847024201'} target="_blank"> <h2 className="text-lg font-mono font-light text-black tracking-widest uppercase mb-1">
          Get in touch
        </h2></Link>
        <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
        Website Coming Soon
        </p>
      </div>

      {/* Additional Grid Overlay for Technical Feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-l border-r border-dashed border-gray-200 opacity-20"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;