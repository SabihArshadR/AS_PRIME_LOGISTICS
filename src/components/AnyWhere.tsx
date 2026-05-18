import React from "react";

const buttons = [
  { label: ["IMPORT OPTION", "EXPORT OPTION"] },
  { label: ["OPPORTUNITIES", "OVERSEAS"] },
  { label: ["INTERNATIONAL", "SERVICES"] },
];

export default function AnywhereInTheWorld() {
  return (
    <section className="relative w-full min-h-[420px] overflow-hidden font-sans">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/anywheretruck.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay — heavier on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 40%, rgba(15,15,15,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end min-h-[420px]">
        <div className="w-full max-w-[820px] px-10 py-14 mr-0 lg:mr-16 xl:mr-24">
          {/* Heading */}
          <h2
            className="text-white text-[35px] font-fjalla-one sm:text-4xl font-extrabold tracking-widest uppercase mb-6 leading-tight"
          >
            Anywhere in the World
          </h2>

          {/* Body copy */}
          <p className="text-white/80 text-[16px] font-montserrat font-light leading-relaxed mb-5">
            AS Prime Logistics has developed a reputation across the
            globe for reliable transport of heavy machinery, equipment, freight,
            vehicles, and more. We work with clients in the agricultural, oil
            and natural gas, excavating, and construction industries to
            transport their entire fleet of vehicles and accompanying gear
            everywhere from North America to any country on the map including
            remote areas as well as undeveloped territory. We&apos;ve made
            expert shipment of heavy equipment our specialty, from heavy and
            oversize transport all the way to hot shot trucking and have spent
            years training our teams, researching better ways to move your
            items, and plotting the best route to ensure timely delivery, no
            matter the location.
          </p>

          <p className="text-white/80 text-[16px] font-montserrat font-light leading-relaxed mb-10">
            Whatever your transportation needs are, AS Prime Logistics can help. Contact us online or request a shipping quote
            today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className="
                  border border-white text-white
                  px-10 py-3
                  text-xs font-bold tracking-widest uppercase
                  leading-snug text-center
                  transition-all duration-200
                  hover:bg-white hover:text-black
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                  cursor-pointer
                "
              >
                {btn.label.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
