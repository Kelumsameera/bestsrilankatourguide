import Image from "next/image";
import { Calendar, Users } from "lucide-react";

export default function SeasonalTours() {
  const packages = [
    {
      name: "05 Days East Coast Tour",
      duration: "5 Days",
      pax: "1",
      price: "$340.00",
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=800&q=80",
    },
    {
      name: "08 Days East Coast Tour",
      duration: "8 Days",
      pax: "1",
      price: "$510.00",
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&q=80",
    },
    {
      name: "10 Days East Coast Tour",
      duration: "10 Days",
      pax: "1",
      price: "$640.00",
      image:
        "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold text-lg">
            Don&apos;t miss
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Seasonal Packages
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            (May to September)
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our exclusive seasonal packages designed to match the best
            times to visit Sri Lanka. From sun-kissed beaches to lush hill
            country escapes, each package is tailored to offer unforgettable
            experiences during the ideal season.
            <br /><br />
            Discover Sri Lanka’s beauty all year round with curated tours for
            every traveler!
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-orange-600 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pkg.name}
                </h3>

                <div className="space-y-2 mb-6 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span>{pkg.pax} Person(s)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-600">From USD</div>
                  <div className="text-3xl font-bold text-orange-600">
                    {pkg.price}
                  </div>
                </div>

                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="text-center mt-14 space-y-6">
          <button className="bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition">
            View All Packages
          </button>

          <p className="text-lg text-gray-700">
            Need to customize the plan for your next trip in Sri Lanka?
          </p>

          <a
            href="#contact"
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
