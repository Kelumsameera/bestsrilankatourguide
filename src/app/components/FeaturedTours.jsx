import Image from "next/image";
import { Calendar, Users } from "lucide-react";

export default function FeaturedTours() {
  const packages = [
    {
      name: "05 Days Down South Tour",
      duration: "5 Days",
      pax: "2",
      price: "$283.50",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    },
    {
      name: "08 Days Down South Tour",
      duration: "8 Days",
      pax: "1",
      price: "$335.00",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    },
    {
      name: "10 Days Down South Tour",
      duration: "10 Days",
      pax: "1",
      price: "$400.00",
      image:
        "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
    },
  ];

  return (
    <section id="tours" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold text-lg">
            Recommended
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            (November to April)
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The best time to visit Sri Lanka’s South Coast is between November
            and mid-May, offering perfect weather and calm seas for swimmable
            beaches. These months provide ideal conditions for relaxation and
            exploration.
            <br /><br />
            However, Sri Lanka is a year-round destination, with its diverse
            climate ensuring amazing experiences no matter when you visit!
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

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-lg text-gray-700 mb-6">
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
