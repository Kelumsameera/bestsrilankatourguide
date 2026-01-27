import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Sigiriya",
    slug: "sigiriya",
    image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=1200&q=80",
    description:
      "Sigiriya is an ancient rock fortress and UNESCO World Heritage Site located in central Sri Lanka.",
  },
  {
    name: "Kandy",
    slug: "kandy",
    image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=1200&q=80",
    description:
      "Kandy is the cultural capital of Sri Lanka, famous for the Temple of the Tooth Relic.",
  },
  {
    name: "Ella",
    slug: "ella",
    image: "https://images.unsplash.com/photo-1557129458-8e1a9c5e9d0d?w=1200&q=80",
    description:
      "Ella is a peaceful hill-country town known for scenic train rides and waterfalls.",
  },
];

export default function DestinationDetail({ params }) {
  const destination = destinations.find(
    (d) => d.slug === params.slug
  );

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-extrabold">
            {destination.name}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {destination.description}
        </p>

        <div className="flex gap-4">
          <Link
            href="/#tours"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            View Tours
          </Link>

          <Link
            href="/destinations"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
