"use client";

import { use, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { vehicles } from "@/data/vehicles";

import { Users, Fuel, Settings } from "lucide-react";

export default function VehicleDetails({ params }) {

  /* ✅ Next 16 fix */
  const { id } = use(params);

  const vehicle = vehicles.find(v => v.id === id);

  /* Hooks always before returns */
  const [tab, setTab] = useState("overview");

  if (!vehicle) return notFound();

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-orange-50">

      {/* HERO */}
      <div className="relative h-96">
        <Image
          src={vehicle.image || "/placeholder.jpg"}
          alt={vehicle.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold">
            {vehicle.name}
          </h1>
          <p className="text-xl opacity-90">
            {vehicle.type}
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP CARD */}
        <div className="bg-white rounded-2xl shadow p-8">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>
              <h2 className="text-3xl font-bold mb-2">
                {vehicle.name}
              </h2>

              <p className="text-gray-600">
                {vehicle.type}
              </p>
            </div>

            <div className="text-3xl font-bold text-orange-600">
              {vehicle.price} / day
            </div>

          </div>

          {/* INFO */}
          <div className="flex flex-wrap gap-6 mt-6 text-gray-700">

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {vehicle.passengers} passengers
            </div>

            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              {vehicle.transmission}
            </div>

            <div className="flex items-center gap-2">
              <Fuel className="w-5 h-5" />
              {vehicle.fuel}
            </div>

          </div>

        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b mt-10">
          {["overview","features"].map(t => (
            <button
              key={t}
              onClick={()=>setTab(t)}
              className={`pb-3 capitalize ${
                tab === t
                  ? "border-b-2 border-orange-600"
                  : ""
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div className="mt-8">

            <p className="text-gray-700 leading-relaxed">
              This {vehicle.name} is perfect for Sri Lanka tours.
              Comfortable, reliable and well maintained for long journeys.
            </p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">

              <div className="bg-white p-5 rounded-xl shadow text-center">
                <h4 className="font-bold">Passengers</h4>
                <p>{vehicle.passengers}</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow text-center">
                <h4 className="font-bold">Fuel</h4>
                <p>{vehicle.fuel}</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow text-center">
                <h4 className="font-bold">Transmission</h4>
                <p>{vehicle.transmission}</p>
              </div>

            </div>

          </div>
        )}

        {/* FEATURES */}
        {tab === "features" && (
          <div className="mt-8 grid md:grid-cols-2 gap-4">

            {vehicle.features?.map((f,i)=>(
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow"
              >
                ✅ {f}
              </div>
            ))}

          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center bg-linear-to-r from-orange-600 to-amber-500 text-white p-10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Book This Vehicle
          </h3>

          <p className="mb-6">
            Contact us now to reserve your vehicle.
          </p>

          <a
            href="https://wa.me/94700000000"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold"
          >
            WhatsApp Booking
          </a>
        </div>

      </div>

    </div>
  );
}
