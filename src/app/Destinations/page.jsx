import Image from "next/image";
import Link from "next/link";

export default function DestinationsPage() {
  const destinations = [
    {
      name: "Sigiriya",
      slug: "sigiriya",
      image:
        "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
      desc: "Ancient Rock Fortress",
      details:
        "Sigiriya is an ancient rock fortress and UNESCO World Heritage Site, famous for its frescoes and breathtaking views.",
    },
    {
      name: "Kandy",
      slug: "kandy",
      image:
        "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&q=80",
      desc: "Cultural Capital",
      details:
        "Kandy is home to the Temple of the Tooth Relic and surrounded by lush hills and tea plantations.",
    },
    {
      name: "Ella",
      slug: "ella",
      image:
        "https://images.unsplash.com/photo-1557129458-8e1a9c5e9d0d?w=800&q=80",
      desc: "Hill Country Beauty",
      details:
        "Ella offers scenic views, waterfalls, hiking trails, and the famous Nine Arches Bridge.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section id="destinations" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-lg">
              Choose Your
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Destinations</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group cursor-pointer"
              >
                <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 text-center hover:shadow-xl transition transform hover:-translate-y-2">
                  {/* IMAGE */}
                  <div className="w-full h-32 mb-4 overflow-hidden rounded-xl relative">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* TEXT */}
                  <h3 className="font-bold text-gray-900 mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-sm text-gray-600">{dest.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
