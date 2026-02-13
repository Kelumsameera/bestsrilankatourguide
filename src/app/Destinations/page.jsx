"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Destinations() {
  const [selected, setSelected] = useState(null);

  const destinations = [
    {
      id: "sigiriya",
      name: "Sigiriya",
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/sigiriya.png",
      short: "Ancient Rock Fortress",
      story:
        "Sigiriya is one of Sri Lanka's most iconic landmarks. Rising dramatically from the plains, this ancient rock fortress once housed a royal palace. Visitors climb through lion-shaped gateways, fresco-lined walls, and breathtaking viewpoints. At sunrise and sunset, the golden light transforms the rock into a magical sight.",
    },
    {
      id: "kandy",
      name: "Kandy",
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/kandy.jpg",
      short: "Cultural Capital",
      story:
        "Kandy is the cultural heart of Sri Lanka. Home to the Temple of the Tooth Relic, sacred traditions, and scenic lake views, the city blends spirituality and beauty. Traditional dance shows and misty mountains make every visit memorable.",
    },
    {
      id: "ella",
      name: "Ella",
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/Ella.png",
      short: "Hill Country Beauty",
      story:
        "Ella is a paradise in the hill country. Tea plantations, waterfalls, and cool weather attract travelers worldwide. From Nine Arch Bridge to Little Adam's Peak, every corner feels like a postcard.",
    },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selected) {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selected]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  const handleModalClose = useCallback(() => {
    setSelected(null);
  }, []);

  const handleCardClick = useCallback((destination) => {
    setSelected(destination);
  }, []);

  return (
    <section className="py-24 px-6 bg-linear-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="font-accent text-5xl mb-2">Destinations</h1>
          <h2 className="text-4xl text-gray-600 font-bold">Explore Sri Lanka</h2>
          <p className="text-gray-500 mt-4 text-lg">
            Discover stories behind every destination
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(destination)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(destination);
                }
              }}
              aria-label={`Explore ${destination.name}, ${destination.short}`}
            >
              <Image
                src={destination.image}
                alt={`${destination.name} - ${destination.short}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={destination.id === "sigiriya"}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-8 text-white w-full">
                <h3 className="text-3xl font-bold mb-1">{destination.name}</h3>
                <p className="text-white/90 mb-4">{destination.short}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(destination);
                  }}
                  className="px-5 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
                  aria-label={`Explore ${destination.name}`}
                >
                  Explore →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={handleModalClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <Image
                src={selected.image}
                alt={`${selected.name} - ${selected.short}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>

            <div className="p-8">
              <h3 id="modal-title" className="text-3xl font-bold mb-2">
                {selected.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4">{selected.short}</p>

              <p className="text-gray-600 leading-relaxed text-base">
                {selected.story}
              </p>

              <button
                onClick={handleModalClose}
                className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium"
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}