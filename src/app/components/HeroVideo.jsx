"use client";
import { useState } from "react";

export default function HeroVideo() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "https://pixabay.com/videos/download/video-286459_tiny.mp4",
    "https://pixabay.com/videos/download/video-191283_tiny.mp4",
    "https://pixabay.com/videos/download/video-191284_tiny.mp4",
    "https://pixabay.com/videos/download/video-242272_tiny.mp4",
    "https://pixabay.com/videos/download/video-132140_tiny.mp4",
  ];

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <video
        key={currentVideo}
        autoPlay
        muted
        playsInline
        onEnded={() =>
          setCurrentVideo((prev) => (prev + 1) % videos.length)
        }
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Discover Sri Lanka
          <span className="block text-orange-400">Exclusive Deals</span>
        </h1>

        <p className="text-xl text-white/80 max-w-xl mb-8">
          Golden beaches, ancient cities, wildlife safaris & private tours.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-600 px-8 py-4 rounded-xl font-semibold">
            Book Now
          </button>
          <button className="border-2 border-orange-400 px-8 py-4 rounded-xl">
            Tailor Made Tours
          </button>
        </div>
      </div>
    </section>
  );
}
