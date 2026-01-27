import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80",
      link: "https://www.instagram.com/p/Cm16mGjNdkE/",
      alt: "Happy New Year 2023 Sri Lanka Tours Driver",
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      link: "https://www.instagram.com/p/CjNAGSwqCii/",
      alt: "10 Days Tour Offer Sri Lanka",
    },
    {
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80",
      link: "https://www.instagram.com/p/CjKKUr6qjN6/",
      alt: "Family Tour Sri Lanka",
    },
    {
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&q=80",
      link: "https://www.instagram.com/p/CjKKS4wqsz6/",
      alt: "Sri Lanka Family Tour",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="block text-orange-500 font-script text-lg mb-2">
            Just Watch
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Gallery
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  View on Instagram
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-14">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Load More
          </button>

          <Link
            href="https://www.instagram.com/srilankatoursdriver/"
            target="_blank"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
