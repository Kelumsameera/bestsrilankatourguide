'use client';

import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      title: "Colombo Trip",
      text:
        "Trip was great, will highly recommend others to go. Planning and execution was smooth, thanks to the team. Best wishes.",
      name: "Vairavelu R",
      date: "April 8, 2025",
    },
    {
      title: "Highly recommended!!",
      text:
        "Had an amazing trip with my dad to Colombo & Kandy. Our driver Sisira was very helpful. The team behind the scenes reached out via WhatsApp and handled everything smoothly.",
      name: "Bhairavi V",
      date: "April 2, 2025",
    },
    {
      title: "Sri Lanka tour",
      text:
        "Fantastic experience! Great driver and tour organized in every detail. I recommend both the driver and the agency. Very kind and attentive to our every need.",
      name: "Melania M",
      date: "December 27, 2024",
    },
    {
      title: "Highly Recommend!",
      text:
        "I booked prior to arriving in Sri Lanka. They communicated well and helped me achieve an adventurous trip in a short time. My driver Sisira was amazing!",
      name: "Paradise568523",
      date: "December 15, 2024",
    },
    {
      title: "Amazing Family Tour",
      text:
        "We had an amazing family tour in October. Nice itinerary with a variety of activities. The guide/driver Mahesh was excellent and very friendly.",
      name: "Manel C",
      date: "November 20, 2024",
    },
    {
      title: "Excellent tour driver in Sri Lanka",
      text:
        "I had an excellent experience with Sri Lanka Tours Driver. I can highly recommend the people and the company. Very professional and caring service.",
      name: "83nisam",
      date: "November 10, 2024",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-lg">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Customer Reviews
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* STAR RATING */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-gray-900 mb-2">
                {review.title}
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-semibold text-gray-700">
                  {review.name}
                </span>
                <span>{review.date}</span>
              </div>

              {/* SOURCE */}
              <div className="mt-3 text-xs text-green-600 font-semibold">
                ★ TripAdvisor Verified Review
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION MOCK */}
        <div className="flex justify-center items-center gap-4 mt-12 text-sm text-gray-600">
          <button className="hover:text-orange-600 transition">Prev</button>
          <span className="font-semibold">1 / 2</span>
          <button className="hover:text-orange-600 transition">Next</button>
        </div>
      </div>
    </section>
  );
}
