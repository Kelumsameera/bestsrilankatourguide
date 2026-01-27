import { Check, Star } from "lucide-react";

export default function SpecialOffer() {
  const included = [
    "Private A/C Vehicle",
    "English Speaking Driver",
    "Accommodation with Breakfast",
    "Fuel & Parking",
  ];

  const bonuses = [
    "Free Local SIM",
    "Free Water Bottles",
    "Scenic Train Tickets",
  ];

  return (
    <section className="py-20 px-6 bg-orange-600 text-white">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 rounded-3xl p-10 shadow-2xl">
        <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
          🚨 30% OFF
        </span>

        <h2 className="text-4xl font-bold mt-6 mb-6">
          10 Days Tour in Sri Lanka
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {included.map((i, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <Check className="text-green-600" /> {i}
              </div>
            ))}
          </div>

          <div>
            {bonuses.map((b, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <Star className="text-orange-500" /> {b}
              </div>
            ))}

            <div className="mt-6">
              <p className="text-sm">Total Price</p>
              <p className="text-4xl font-bold text-orange-600">$700</p>
              <p className="text-sm">for 2 persons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
