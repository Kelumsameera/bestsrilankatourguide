"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Car,
  Users,
  Calendar,
  Star,
  Check,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function SriLankaToursDriver() {
  const [email, setEmail] = useState("");
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

 const videos = [
  // 1️⃣ Sri Lanka Beach Evening
  "https://pixabay.com/videos/download/video-286459_tiny.mp4",

  // 2️⃣ Sigiriya Rock Fortress
  "https://pixabay.com/videos/download/video-191283_tiny.mp4",

  // 3️⃣ Sri Lanka Scenic Train Journey
  "https://pixabay.com/videos/download/video-191284_tiny.mp4",

  // 4️⃣ Elephants Wildlife Safari
  "https://pixabay.com/videos/download/video-242272_tiny.mp4",

  // 5️⃣ Beach Sunset (repeat / loop feel)
  "https://pixabay.com/videos/download/video-286459_tiny.mp4",

  // 6️⃣ Mountain Train Ride
  "https://pixabay.com/videos/download/video-132140_tiny.mp4",
];


  const southCoastPackages = [
    {
      name: "05 Days Down South Tour",
      duration: "5 Days",
      pax: "2",
      price: "$283.50",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      season: "Nov - Apr",
    },
    {
      name: "08 Days Down South Tour",
      duration: "8 Days",
      pax: "1",
      price: "$335.00",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      season: "Nov - Apr",
    },
    {
      name: "10 Days Down South Tour",
      duration: "10 Days",
      pax: "1",
      price: "$400.00",
      image:
        "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
      season: "Nov - Apr",
    },
  ];

  const eastCoastPackages = [
    {
      name: "05 Days East Coast Tour",
      duration: "5 Days",
      pax: "1",
      price: "$340.00",
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=800&q=80",
      season: "May - Sep",
    },
    {
      name: "08 Days East Coast Tour",
      duration: "8 Days",
      pax: "1",
      price: "$510.00",
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80",
      season: "May - Sep",
    },
    {
      name: "10 Days East Coast Tour",
      duration: "10 Days",
      pax: "1",
      price: "$640.00",
      image:
        "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80",
      season: "May - Sep",
    },
  ];

  const drivers = [
    {
      name: "Mahesh",
      vehicle: "Car",
      capacity: "5",
      price: "$80.00",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
      name: "Saman",
      vehicle: "KDH Highroof Van",
      capacity: "6",
      price: "$80.00",
      image:
        "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80",
    },
    {
      name: "Udesh",
      vehicle: "Bus",
      capacity: "5",
      price: "$105.00",
      image:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&q=80",
    },
  ];

  const oneDayTours = [
    {
      name: "Galle One Day Tour",
      capacity: "6",
      price: "$80.00",
      image:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
    },
    {
      name: "Kandy One Day Tour",
      capacity: "6",
      price: "$130.00",
      image:
        "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&q=80",
    },
    {
      name: "Sigiriya One Day Tour",
      capacity: "6",
      price: "$150.00",
      image:
        "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
    },
  ];

  
  const touristLocations = [
    {
      name: "Mirissa Beach",
      type: "Coastal",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      description: "Whale watching paradise",
    },
    {
      name: "Unawatuna",
      type: "Coastal",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      description: "Perfect surfing & diving",
    },
    {
      name: "Trincomalee",
      type: "Coastal",
      image:
        "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80",
      description: "Pristine beaches",
    },
    {
      name: "Arugam Bay",
      type: "Coastal",
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80",
      description: "World-class surf spot",
    },
    {
      name: "Hikkaduwa",
      type: "Coastal",
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=800&q=80",
      description: "Coral reefs & snorkeling",
    },
    {
      name: "Bentota",
      type: "Coastal",
      image:
        "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=800&q=80",
      description: "Water sports hub",
    },
  ];

  const included = [
    "Air-Conditioned Private Car",
    "English Speaking Professional Driver",
    "Accommodation with Breakfast",
    "Driver's Accommodation & Meals",
    "Fuel & Parking Fees",
    "24 Hours Service",
  ];

  const bonuses = [
    "One Local Sim Card with Free Data",
    "Two Water Bottles per Day",
    "Two Train Tickets for Nanu Oya to Ella (Blue Train Journey)",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* Video Background */}
        <video
          key={currentVideo} // IMPORTANT: forces reload
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="text-white">
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-600/20 text-orange-300 font-semibold text-sm">
                🇱🇰 Explore Sri Lanka
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Discover Amazing Places
                <span className="block text-orange-400">Exclusive Deals</span>
                <span className="block text-white/90">Across Sri Lanka</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
                Golden beaches, ancient cities, wildlife safaris and warm
                hospitality. Travel with licensed guides & private vehicles.
              </p>

              <div className="flex gap-4">
                <button className="bg-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition">
                  Book Now
                </button>
                <button className="border-2 border-orange-400 px-8 py-4 rounded-xl hover:bg-orange-600 transition">
                  Tailor Made Tours
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden md:block">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-sm ml-auto">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-700">
                  Airport pickup • Private drivers • Custom itineraries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="destinations"
        className="py-20 px-6 bg-linear-to-br from-gray-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-lg">
              Choose Your
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Destinations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((dest, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-gray-600">{dest.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages - South Coast */}
      <section id="tours" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-orange-600 font-semibold text-lg">
              Recommended
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-lg text-gray-600 mb-2">(November to April)</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The best time to visit Sri Lanka&apos;s South Coast is between
              November and mid-May, offering perfect weather and calm seas for
              swimmable beaches. However, Sri Lanka is a year-round destination!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {southCoastPackages.map((pkg, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-600 hover:shadow-xl transition"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {pkg.season}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-orange-600 mr-3" />
                      <span>{pkg.pax} Person(s)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600">From USD</div>
                      <div className="text-3xl font-bold text-orange-600">
                        {pkg.price}
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Packages - East Coast */}
      <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-orange-600 font-semibold text-lg">
              Don&apos;t Miss
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seasonal Packages
            </h2>
            <p className="text-lg text-gray-600 mb-2">(May to September)</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our exclusive seasonal packages designed to match the best
              times to visit Sri Lanka. Discover Sri Lanka&apos;s beauty all
              year round with curated tours for every traveler!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {eastCoastPackages.map((pkg, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-600 hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />

                  {/* SEASON BADGE */}
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.season}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                      <span>{pkg.duration}</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-orange-600 mr-3" />
                      <span>{pkg.pax} Person(s)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600">From USD</div>
                      <div className="text-3xl font-bold text-orange-600">
                        {pkg.price}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition">
              View All Packages
            </button>
          </div>
        </div>
      </section>

      {/* Recommended Drivers & Guides */}
      <section id="drivers" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-orange-600 font-semibold text-lg">
              What&apos;s New
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recommended Drivers & Guides
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Travel with comfort and confidence with our recommended drivers
              and guides. Choose from a range of vehicle types to suit your
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {drivers.map((driver, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-600 hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="w-full h-56 overflow-hidden relative">
                  <Image
                    src={driver.image}
                    alt={`${driver.name} ${driver.vehicle}`}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {driver.name} – {driver.vehicle}
                  </h3>

                  <div className="flex items-center text-gray-700 mb-4">
                    <Users className="w-5 h-5 text-orange-600 mr-2" />
                    <span>Capacity: {driver.capacity} Passengers</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-600">From USD</div>
                      <div className="text-2xl font-bold text-orange-600">
                        {driver.price}
                      </div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Day Tours */}
      <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-orange-600 font-semibold text-lg">
              Day Trips
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One Day Tour Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {oneDayTours.map((tour, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-600 hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="w-full h-56 overflow-hidden relative">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tour.name}
                  </h3>

                  <div className="flex items-center text-gray-700 mb-4">
                    <Users className="w-5 h-5 text-orange-600 mr-2" />
                    <span>Capacity: {tour.capacity}</span>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-600">From USD</div>
                    <div className="text-2xl font-bold text-orange-600">
                      {tour.price}
                    </div>
                  </div>

                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      
      {/* 10 Days Special Package */}
      <section className="py-20 px-6 bg-linear-to-r from-orange-600 to-yellow-600">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="bg-red-600 text-white inline-block px-4 py-2 rounded-lg font-bold text-lg mb-6">
                🚨 30% OFF
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                10 Days Tour in Sri Lanka
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                <strong>Tour Route:</strong> Airport (BIA) ▶️ Sigiriya ▶️ Kandy
                ▶️ Nuwara Eliya ▶️ Ella ▶️ Yala ▶️ Mirissa ▶️ Galle ▶️ Colombo
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Package Includes:
                  </h3>
                  <div className="space-y-3">
                    {included.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Free Bonuses:
                  </h3>
                  <div className="space-y-3">
                    {bonuses.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <Star className="w-5 h-5 text-orange-600 mr-3 shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">
                      Total Package Price
                    </div>
                    <div className="text-4xl font-bold text-orange-600">
                      USD $700
                    </div>
                    <div className="text-gray-600">for 2 persons</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                  Book This Package
                </button>
                <button className="flex-1 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition">
                  Customize Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailor Made Tours */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Help You Planning Your Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We offer our most discerning guests the opportunity to custom design
            their experiences of this paradise island through our bespoke travel
            and tour service. Perhaps you&apos;d like to go on a unique
            enlightening journey through the cultural triangle and wrap it up
            with beautiful beaches around the country.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            No requirement is a challenge, as our team will be able to fulfill
            your personalized itinerary at competitive rates featuring meet and
            greet services.
          </p>
          <button className="bg-orange-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition shadow-lg">
            Create Your Custom Tour
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-linear-to-br from-orange-600 to-yellow-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don&apos;t Wait Any Longer
          </h2>
          <p className="text-xl text-orange-100 mb-8">Contact us anytime!</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="tel:+94769300334"
              className="bg-white p-6 rounded-xl hover:shadow-xl transition flex items-center justify-center space-x-3"
            >
              <Phone className="w-6 h-6 text-orange-600" />
              <span className="text-xl font-semibold text-gray-900">
                (+94) 769 300 334
              </span>
            </a>
            <a
              href="mailto:info@srilankatoursdriver.com"
              className="bg-white p-6 rounded-xl hover:shadow-xl transition flex items-center justify-center space-x-3"
            >
              <Mail className="w-6 h-6 text-orange-600" />
              <span className="text-lg font-semibold text-gray-900">
                info@srilankatoursdriver.com
              </span>
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Updates & More
            </h3>
            <p className="text-orange-100 mb-6">
              Subscribe to the free newsletter and stay up to date
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      

      <Footer />
    </div>
  );
}
