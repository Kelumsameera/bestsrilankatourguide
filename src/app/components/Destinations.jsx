import Image from "next/image";

export default function Destinations() {
  const destinations = [
    {
      name: "Sigiriya",
      image: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=800&q=80",
      desc: "Ancient Rock Fortress",
    },
    {
      name: "Kandy",
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&q=80",
      desc: "Cultural Capital",
    },
    {
      name: "Ella",
      image: "https://images.unsplash.com/photo-1557129458-8e1a9c5e9d0d?w=800&q=80",
      desc: "Hill Country Beauty",
    },
  ];

  return (
    <section id="destinations" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Destinations</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow">
              <div className="relative h-48">
                <Image src={d.image} alt={d.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
