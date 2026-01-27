import {
  Star,
  MapPin,
  Sliders,
  Car,
  BadgeCheck,
  Zap,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "Best Travel Agent",
      description:
        "One of the best leading tour operator in Sri Lanka tourism industry",
      icon: Star,
    },
    {
      title: "Beautiful Places",
      description:
        "A smiling sun all year round, golden beaches, ancient exciting cities, safaris, lovely people in a tropical paradise.",
      icon: MapPin,
    },
    {
      title: "Tailor Made Tours",
      description:
        "We provide the best custom-made & specialized Sri Lanka tours to our clients.",
      icon: Sliders,
    },
    {
      title: "Transportation",
      description:
        "We arrange reliable transportation and airport transfers for single/couple travelers, families or groups.",
      icon: Car,
    },
    {
      title: "Best Price Guarantee",
      description:
        "Customers will get a service proportionate to the price they have paid.",
      icon: BadgeCheck,
    },
    {
      title: "Fast Booking",
      description:
        "You can reach us via Email or WhatsApp 24/7.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-lg">
            Why Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            We Make All The Process Easy
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

