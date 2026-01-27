'use client';
import Image from "next/image";
import { Users } from "lucide-react";

export default function OneDayTours() {
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

  return (
    <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold text-lg">
            Day Trips
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            One Day Tour Packages
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {oneDayTours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-600 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
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

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}
