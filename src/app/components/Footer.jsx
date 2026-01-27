"use client";

import { MapPin, ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-4 mb-14">

          {/* BRAND + CONTACT */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">🇱🇰</span>
              <span className="text-2xl font-extrabold text-orange-500">
                Sri Lanka Tours Driver
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-5 max-w-xl">
              A smiling sun all year round, golden beaches, ancient cities,
              safaris, and lovely people in a tropical paradise. We are a
              licensed tour guide team based in Colombo, Sri Lanka.
            </p>

            <div className="flex items-start gap-3 text-gray-400 mb-6">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-orange-500" />
              <span>
                No:96, Maddawaththa, Halthota,
                <br />
                Bandaragama, Sri Lanka
              </span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-orange-500 transition">🌐</a>
              <a href="#" className="hover:text-orange-500 transition">📘</a>
              <a href="#" className="hover:text-orange-500 transition">📸</a>
              <a href="#" className="hover:text-orange-500 transition">▶️</a>
            </div>
          </div>

          {/* QUICK MENU */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500 text-lg">
              Quick Menu
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "Gallery",
                "About Us",
                "Contact Us",
                "Airport Transfers",
                "Tailor Made Tours",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* TRUST + NEWSLETTER */}
          <div>
            <h4 className="font-bold mb-4 text-orange-500 text-lg">
              Trusted & Verified
            </h4>

            {/* TRUST BADGES */}
            <div className="space-y-3 mb-6">
              <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                ⭐⭐⭐⭐⭐ <span className="text-sm">Google Reviews</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex items-center gap-3">
                🏆 TripAdvisor Trusted
              </div>
            </div>

            {/* NEWSLETTER */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed successfully!");
              }}
              className="space-y-3"
            >
              <div className="flex items-center bg-white rounded-lg overflow-hidden">
                <Mail className="w-5 h-5 ml-3 text-gray-500" />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-gray-900 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 transition py-2 rounded-lg font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Sri Lanka Tours Driver Location"
            src="https://www.google.com/maps?q=Bandaragama%20Sri%20Lanka&output=embed"
            className="w-full h-72 border-0"
            loading="lazy"
          />
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sri Lanka Tours Driver. All Rights Reserved.
          </p>

          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              FAQ
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
