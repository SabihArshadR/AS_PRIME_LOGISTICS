import React from "react";

const features = [
  "Our attempt to fulfill all your needs, whatever they may be.",
  "Adjusted and individualized solutions whenever possible.",
  "Dedicated load specialists.",
  "Access to responsive customer support representatives.",
  "Our skilled finance department.",
  "An array of payment options.",
  "Experienced drivers.",
  "Cost-effective shipping solutions.",
];

export default function CustomerExperience() {
  return (
    <section className="relative w-full min-h-[520px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/experiencetruck.jpg')" }}
        aria-hidden="true"
      />

      {/* Content wrapper — white card floated right-center */}
      <div className="relative z-10 flex justify-center items-center min-h-[520px] py-12 px-4">
        <div
          className="bg-white w-full max-w-[1000px] px-10 py-10 shadow-2xl"
        >
          {/* ── Customer Experience ─────────────────── */}
          <h2
            className="text-[35px] font-fjalla-one font-normal text-[#27232d] mb-4"
          >
            Customer Experience
          </h2>

          <p className="text-[#27232d]/80 text-[16px] font-montserrat font-light leading-relaxed mb-4">
            AS Prime Logistics assigns a dedicated representative to
            each order. That agent takes your order,{" "}
            <a
              href="#"
              className="text-orange-500 hover:underline"
            >
              dispatches
            </a>{" "}
            the shipment, tracks the load and verifies delivery. Your
            representative also ensures that our shipment plan matches your
            preferences and solves communication problems during transportation.
            Instead of dealing with various departments of other logistics
            agencies, you'll build a relationship with an individual,
            knowledgeable agent.
          </p>

          <p className="text-[#27232d]/80 text-[16px] font-montserrat font-light leading-relaxed mb-8">
            We ask a comprehensive list of questions before arranging your
            transportation. Knowing this information ahead of time lets us
            develop a seamless delivery process. When complications occur, we
            have the details we need to help get your shipment back on track.
          </p>

          {/* ── What Sets NTS Apart ─────────────────── */}
          <h2
            className="text-[35px] font-fjalla-one font-normal text-[#27232d] mb-2"
          >
            What Sets AS Prime Logistics Apart?
          </h2>

          <p className="text-[#27232d] text-[16px] font-montserrat font-light mb-5">
            At AS Prime Logistics, our clients enjoy:
          </p>

          {/* Feature grid */}
          <div className="grid md:grid-cols-4 gap-2 bg-white border border-gray-200">
            {features.map((text, i) => (
              <div
                key={i}
                className="bg-[#F0E3D3] px-4 py-4 text-center text-xs font-bold text-[#27232d] leading-snug"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
