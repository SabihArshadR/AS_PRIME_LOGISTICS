"use client";

import Image from "next/image";
import { useState } from "react";

const locations = [
  {
    city: "Fort Lauderdale, FL",
    address: "2765 W Cypress Creek Dr. Fort Lauderdale, FL 33309",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    map: "https://maps.google.com/maps?q=fort%20lauderdale&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Florence, KY",
    address: "Florence Office, Kentucky",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
    map: "https://maps.google.com/maps?q=florence%20kentucky&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Doral, FL",
    address: "Doral Operations Center",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
    map: "https://maps.google.com/maps?q=doral%20florida&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Fort Myers, FL",
    address: "Fort Myers Branch Office",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    map: "https://maps.google.com/maps?q=fort%20myers%20florida&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Fort Pierce, FL",
    address: "Fort Pierce Logistics Center",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    map: "https://maps.google.com/maps?q=fort%20pierce%20florida&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Orlando, FL",
    address: "Orlando Service Location",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
    map: "https://maps.google.com/maps?q=orlando%20florida&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Tampa, FL",
    address: "Tampa Headquarters",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
    map: "https://maps.google.com/maps?q=tampa%20florida&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "West Palm Beach, FL",
    address: "West Palm Beach Office",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200",
    map: "https://maps.google.com/maps?q=west%20palm%20beach&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Jacksonville, FL",
    address: "Jacksonville Operations Center",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",
    map: "https://maps.google.com/maps?q=jacksonville%20florida&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    city: "Cleveland, Ohio",
    address: "Cleveland Regional Office",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200",
    map: "https://maps.google.com/maps?q=cleveland%20ohio&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
];

export default function CompanyLocations() {
  const [selected, setSelected] = useState(locations[0]);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Top Banner */}
        <div className="border border-gray-300 bg-white p-8 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Logo */}
          <div className="flex items-center gap-5">
            <Image src="/inclogo.png" alt="Logo" width={420} height={175} />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="uppercase text-[25px] font-normal tracking-[2px] text-[#27232d] font-fjalla-one leading-snug">
              Proud To Be Included In This Years INC. 5000 Fastest Growing
              Private Companies 8th Year In A Row!
            </h2>

            <p className="mt-5 text-[#27232d] font-normal font-montserrat  leading-6 text-[16px]">
              As of 2024, AS Prime Logistics is once again proud to
              be included in this year’s Inc. 5,000 list of fastest-growing
              private companies in America. A concentration on customer service
              accounts for nearly all of our success. We thrive on your
              returning business.
            </p>

            <button className="mt-6 bg-[#ef6b36] text-white px-8 py-3 uppercase tracking-[1px] font-semibold font-montserrat text-sm hover:bg-[#d95c2d] transition"
            onClick={() => window.open("https://www.inc.com/profile/nationwide-transport-services/", "_blank")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">
          {/* Left Image */}
          <div className="relative w-full h-[520px]">
            <Image
              src={selected.image || ""}    
              alt={selected.city}
              fill
              className="object-cover"
            />
          </div>

          {/* Right */}
          <div>
            <h2 className="text-[35px] font-fjalla-one  uppercase font-bold tracking-[3px] text-[#17223b]">
              Our Locations
            </h2>

            {/* Tabs */}
            <div className="mt-8 grid grid-cols-5 border border-gray-300">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(location)}
                  className={`border-r border-b border-gray-300 px-4 py-5 text-[6px] xl:text-[12px] font-semibold uppercase tracking-[1px] transition
                    ${
                      selected.city === location.city
                        ? "bg-[#ef6b36] text-white"
                        : "bg-white text-[#17223b] hover:bg-gray-100"
                    }
                  `}
                >
                  {location.city}
                </button>
              ))}
            </div>

            {/* Content Box */}
            <div className="border border-gray-400 mt-0 bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Address */}
                <div className="bg-[#ede9e2] p-10 flex flex-col justify-center min-h-[280px]">
                  <h3 className="uppercase text-[#17223b] tracking-[2px] text-[20px] font-semibold">
                    Operations and Headquarters
                  </h3>

                  <p className="mt-6 text-gray-500 leading-8 text-[15px]">
                    {selected.address}
                  </p>
                </div>

                {/* Map */}
                <div className="min-h-[280px]">
                  <iframe
                    src={selected.map}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0 w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
