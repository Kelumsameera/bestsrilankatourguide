"use client";
import { useState } from "react";

export default function BookingBox({ vehicle }) {

  const [days,setDays] = useState(1);

  const priceNumber =
    Number(vehicle.price.replace("$",""));

  const total = priceNumber * days;

  const whatsappMsg = `
Hello, I want to book:

Vehicle: ${vehicle.name}
Days: ${days}
Total: $${total}
`;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6">

      <h3 className="text-2xl font-bold mb-4">
        Booking Calculator
      </h3>

      <label className="text-sm text-gray-600">
        Number of days
      </label>

      <input
        type="number"
        min="1"
        value={days}
        onChange={(e)=>setDays(e.target.value)}
        className="w-full border p-3 rounded-lg mt-2"
      />

      <div className="text-2xl font-bold mt-4">
        Total: ${total}
      </div>

      <a
        href={`https://wa.me/94769300334?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank"
        className="block text-center bg-green-600 text-white py-3 rounded-xl mt-6 font-semibold"
      >
        Book via WhatsApp
      </a>
    </div>
  );
}
