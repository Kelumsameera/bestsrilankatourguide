"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_DURATION_MS = 8000;
const FADE_DURATION_MS = 600;
const NOISE_SVG =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'%3E%3Cfilter id=\'n\' x=\'0%25\' y=\'0%25\' width=\'100%25\' height=\'100%25\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'120\' height=\'120\' filter=\'url(%23n)\' opacity=\'0.7\'/%3E%3C/svg%3E")';

const SLIDES = [
  {
    src: "https://pixabay.com/videos/download/video-286459_tiny.mp4",
    title: "Mirissa Beach",
    subtitle: "Golden sunsets & whale watching paradise",
    location: "South Coast, Sri Lanka",
  },
  {
    src: "https://pixabay.com/videos/download/video-191283_tiny.mp4",
    title: "Sigiriya Rock Fortress",
    subtitle: "Ancient wonder & UNESCO World Heritage Site",
    location: "Central Province, Sri Lanka",
  },
  {
    src: "https://pixabay.com/videos/download/video-191284_tiny.mp4",
    title: "Ella Scenic Train Ride",
    subtitle: "One of the most beautiful train journeys in the world",
    location: "Uva Province, Sri Lanka",
  },
  {
    src: "https://pixabay.com/videos/download/video-242272_tiny.mp4",
    title: "Yala National Park",
    subtitle: "Wildlife safaris & majestic elephants",
    location: "Monaragala District, Sri Lanka",
  },
  {
    src: "https://pixabay.com/videos/download/video-132140_tiny.mp4",
    title: "Hill Country",
    subtitle: "Tea plantations & misty mountain views",
    location: "Nuwara Eliya, Sri Lanka",
  },
];

export default function HeroVideo() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  const fadeTimeoutRef = useRef(null);
  const autoTimeoutRef = useRef(null);
  const progressRafRef = useRef(null);
  const progressStartRef = useRef(0);

  const slide = SLIDES[current];

  const clearFadeTimeout = useCallback(() => {
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }
  }, []);

  const clearAutoTimeout = useCallback(() => {
    if (autoTimeoutRef.current) {
      clearTimeout(autoTimeoutRef.current);
      autoTimeoutRef.current = null;
    }
  }, []);

  const stopProgress = useCallback(() => {
    if (progressRafRef.current) {
      cancelAnimationFrame(progressRafRef.current);
      progressRafRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setVisible(false);
    clearFadeTimeout();
    fadeTimeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
      setVisible(true);
      setProgress(0);
    }, FADE_DURATION_MS);
  }, [clearFadeTimeout]);

  const goTo = useCallback(
    (index) => {
      if (index === current) return;
      setVisible(false);
      clearFadeTimeout();
      fadeTimeoutRef.current = setTimeout(() => {
        const total = SLIDES.length;
        const normalizedIndex = ((index % total) + total) % total;
        setCurrent(normalizedIndex);
        setVisible(true);
        setProgress(0);
      }, FADE_DURATION_MS);
    },
    [clearFadeTimeout, current]
  );

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    clearAutoTimeout();
    stopProgress();

    autoTimeoutRef.current = setTimeout(() => {
      next();
    }, SLIDE_DURATION_MS);

    progressStartRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - progressStartRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION_MS, 1);
      setProgress(pct);
      if (elapsed < SLIDE_DURATION_MS) {
        progressRafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(1);
      }
    };
    progressRafRef.current = requestAnimationFrame(tick);

    return () => {
      clearAutoTimeout();
      stopProgress();
    };
  }, [clearAutoTimeout, current, mounted, next, stopProgress]);

  useEffect(() => {
    return () => {
      clearFadeTimeout();
      clearAutoTimeout();
      stopProgress();
    };
  }, [clearAutoTimeout, clearFadeTimeout, stopProgress]);

  const indicators = SLIDES.map((_, i) => {
    const isActive = i === current;
    return (
      <button
        key={i}
        className={`hero-indicator${isActive ? " hero-indicator--active" : ""}`}
        aria-label={`Go to slide ${i + 1}`}
        onClick={() => goTo(i)}
        style={{
          width: isActive ? "44px" : "22px",
        }}
      >
        {isActive && (
          <div
            className="hero-indicator__fill"
            style={{ width: `${progress * 100}%` }}
          />
        )}
      </button>
    );
  });

  return (
    <section
      className="hero-root"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "420px",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(145deg, #0a1a12 0%, #14532d 40%, #0a0e0b 100%)",
        }}
      />

      <video
        key={current}
        autoPlay
        muted
        playsInline
        onEnded={next}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <source src={slide.src} type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.78) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(10,14,11,0.55) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 120px 40px rgba(10,14,11,0.45)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "-50%",
          backgroundImage: NOISE_SVG,
          backgroundSize: "256px 256px",
          opacity: 0.035,
          pointerEvents: "none",
          mixBlendMode: "overlay",
          animation: "grain-scroll 0.8s steps(2) infinite",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(40px, 8vh, 80px) clamp(24px, 6vw, 96px)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            marginBottom: "18px",
          }}
        >
          <div className="hero-badge">
            <span role="img" aria-label="Sri Lanka flag">
              🇱🇰
            </span>{" "}
            Explore Sri Lanka
          </div>
        </div>

        <h1
          key={`t-${current}`}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textShadow: "0 2px 30px rgba(0,0,0,0.45)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition:
              "opacity 0.55s cubic-bezier(.4,0,.2,1) 0.05s, transform 0.55s cubic-bezier(.4,0,.2,1) 0.05s",
            marginBottom: "10px",
          }}
        >
          {slide.title}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.82)",
            maxWidth: "480px",
            lineHeight: 1.5,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition:
              "opacity 0.55s cubic-bezier(.4,0,.2,1) 0.15s, transform 0.55s cubic-bezier(.4,0,.2,1) 0.15s",
            marginBottom: "4px",
          }}
        >
          {slide.subtitle}
        </p>

        <div
          className="hero-location"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.25s",
            marginBottom: "28px",
          }}
        >
          <span aria-hidden="true">◆</span>
          {slide.location}
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
            marginBottom: "36px",
          }}
        >
          <button className="hero-btn hero-btn--primary">Book Now</button>
          <button className="hero-btn hero-btn--ghost">Tailor Made Tours</button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {indicators}
          </div>

          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.06em",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {[
        { dir: -1, label: "Previous", left: true },
        { dir: 1, label: "Next", left: false },
      ].map(({ dir, label, left }) => (
        <button
          key={label}
          aria-label={label}
          onClick={() => goTo((current + dir + SLIDES.length) % SLIDES.length)}
          style={{
            position: "absolute",
            top: "50%",
            [left ? "left" : "right"]: "clamp(12px, 2.5vw, 32px)",
            transform: "translateY(-50%)",
            zIndex: 20,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.22)",
            background: "rgba(10,14,11,0.35)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.25s, border-color 0.25s, transform 0.2s",
            opacity: mounted ? 1 : 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(234,88,12,0.55)";
            e.currentTarget.style.borderColor = "rgba(245,158,11,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(10,14,11,0.35)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
          }}
        >
          {left ? "←" : "→"}
        </button>
      ))}
    </section>
  );
}
