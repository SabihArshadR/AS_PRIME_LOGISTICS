import React from "react";

// ─── Skip the Guesswork Banner ───────────────────────────────────────────────

export function SkipTheGuessworkBanner() {
  return (
    <div className="flex justify-center px-4 py-6 bg-white">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-sm shadow-lg">
        {/* Left – network/globe illustration */}
        <div className="w-[350px] min-w-[160px] flex-shrink-0">
          <img
            src="/global.jpg"
            alt="Global network illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right – dark panel */}
        <div className="flex md:flex-1 md:flex-col items-center justify-center bg-[#27232D] px-8 py-6 text-center">
          {/* Chatbot icon */}
          <div className="mb-2 text-white text-xl">✦</div>

          <h3
            className="text-white text-[32px] font-montserrat font-bold tracking-wide mb-2"
          >
            Skip the Guesswork
          </h3>
          <p className="text-white text-sm font-montserrat font-medium italic mb-5 leading-snug">
            Let our virtual assistant deliver the exact information you need in
            seconds.
          </p>
          <button className="bg-[#E45819] hover:bg-orange-600 transition-colors text-white text-sm font-montserrat font-bold tracking-widest uppercase px-6 py-2 rounded-sm">
            Find Your Answers
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── NTS Events Section ───────────────────────────────────────────────────────

export function NTSEventsSection() {
  return (
    <section className="bg-[#F7F1E9] w-full py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left – text */}
        <div className="flex-1 pt-4">
          <h2
            className="text-[35px] font-normal font-fjalla-one tracking-wider uppercase text-[#27232d] mb-2"
          >
            NTS Events
          </h2>
          <p className="text-[18px] font-montserrat font-normal tracking-widest uppercase text-[#27232d] mb-6">
            Past, Present, and Future
          </p>

          <p className="text-[#27232d]/80 text-[16px] font-light leading-relaxed mb-4">
            As a family-owned company, we care about giving back to the
            community, promoting team building, and reaching out to our clients
            in person.
          </p>
          <p className="text-[#27232d]/80 text-[16px] font-light leading-relaxed mb-4">
            You can find NTS at promotional speaking events, equipment
            auctions, and more.
          </p>
          <p className="text-[#27232d]/80 text-[16px] font-light leading-relaxed mb-8">
            Check out our full list of events here!
          </p>

          <button className="bg-[#EC6334] hover:bg-orange-600 transition-colors text-white text-sm font-semibold font-montserrat tracking-widest uppercase px-8 py-3">
            NTS Events
          </button>
        </div>

        {/* Right – featured event card */}
        <div className="w-full lg:w-[380px] bg-[#1e2130] rounded-sm overflow-hidden shadow-xl flex-shrink-0">
          {/* Video thumbnail */}
          <div className="relative">
            <img
              src="/0.jpg"
              alt="NTS 15-Year Anniversary Event"
              className="w-full h-48 object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play video"
                className="w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card body */}
          <div className="p-6">
            <h3
              className="text-white text-sm font-extrabold tracking-widest uppercase leading-snug mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Featured Event: AS Prime Logistics 15-Year Anniversary
              Event in Orlando, FL
            </h3>
            <p className="text-gray-300 text-sm italic leading-relaxed mb-6">
              AS Prime Logistics brought in everyone from all offices
              to celebrate the 15-year milestone at Sapphire Falls, Orlando, and
              a fully catered-for day at Universal Studios.
            </p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white text-xs font-bold tracking-widest uppercase py-3 rounded-sm">
              Read More About Our 15 Year Celebration!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Combined page export ─────────────────────────────────────────────────────

export default function NTSEventsPage() {
  return (
    <>
      <SkipTheGuessworkBanner />
      <NTSEventsSection />
    </>
  );
}
