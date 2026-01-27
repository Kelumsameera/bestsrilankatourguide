import Image from "next/image";
import { Users } from "lucide-react";

export default function Drivers() {
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

  return (
    <section id="drivers" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-lg">
            What&apos;s new
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recommended Drivers & Guides
          </h2>

          <p className="text-gray-700 font-medium mb-4">
            We have{" "}
            <span className="font-semibold">
              English Speaking · French Speaking · German Speaking · Hindi
              Speaking · Spanish Speaking · Italian Speaking
            </span>{" "}
            Drivers
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Travel with comfort and confidence with our recommended drivers and
            guides. Choose from a range of vehicle types to suit your journey,
            and enjoy the company of expert guides fluent in multiple languages,
            ensuring a seamless and enriching experience across Sri Lanka.
          </p>
        </div>

        {/* DRIVER CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {drivers.map((driver, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-600 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={driver.image}
                  alt={`${driver.name} ${driver.vehicle}`}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {driver.name} – {driver.vehicle}
                </h3>

                <div className="flex items-center gap-3 text-gray-700 mb-5">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span>{driver.capacity} Passengers</span>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-600">From USD</div>
                  <div className="text-2xl font-bold text-orange-600">
                    {driver.price}
                  </div>
                </div>

                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOT ACTION */}
        <div className="text-center mt-14">
          <button className="bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
