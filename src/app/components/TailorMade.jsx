import Image from "next/image";
import Link from "next/link";

export default function TailorMade() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative w-full h-130">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
                alt="Tailor Made Tours Sri Lanka"
                fill
                priority
                className="object-cover rounded-3xl"
              />
            </div>

            {/* OVERLAY TEXT */}
            <div className="absolute bottom-8 left-8">
              <span className="text-5xl font-extrabold text-orange-500 leading-none">
                Time to
              </span>
              <span className="block text-6xl font-extrabold text-orange-600">
                explore
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-orange-600 font-semibold text-lg">
              Tailor Made Tours
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
              We Help You Planning Your Journey
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We offer our most discerning guests the opportunity to custom
              design their experiences of this paradise island through our
              bespoke travel and tour service. Perhaps you’d like to go on a
              unique enlightening journey through the cultural triangle and
              wrap it up with beautiful beaches around the country.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Maybe you’re a thrill seeker who wants to stalk the elusive
              leopard off the beaten track through a Sri Lankan safari. No
              requirement is a challenge, as our team will be able to fulfill
              your personalized itinerary at competitive rates featuring meet
              and greet services.
            </p>

            <Link
              href="/tailor-made-tours"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition"
            >
              Tailor Made Tours →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
