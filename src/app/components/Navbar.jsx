'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🇱🇰</div>
          <div>
            <div
              className={`text-xl font-bold transition ${
                scrolled ? 'text-orange-600' : 'text-white'
              }`}
            >
              Sri Lanka Tours Driver
            </div>
            <div
              className={`text-xs transition ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Discover Amazing Places
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {['tours', 'destinations', 'drivers', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`font-medium transition ${
                scrolled
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-white hover:text-orange-300'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="tel:+94769300334"
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-semibold"
          >
            (+94) 769 300 334
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden transition ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {['tours', 'destinations', 'drivers', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 font-medium hover:text-orange-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a
              href="tel:+94769300334"
              className="block bg-orange-600 text-white px-6 py-3 rounded-lg text-center font-semibold"
            >
              (+94) 769 300 334
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
