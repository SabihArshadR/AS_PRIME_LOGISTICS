import { Check } from "lucide-react";
import Link from "next/link";

export default function News() {
  return (
    <div className="bg-white">
      <section className="relative h-[720px] pl-12 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/news.jpg"
            alt="Truck"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6">
          <div className="flex max-w-[620px] gap-8">
            {/* Vertical Line */}
            <div className="hidden w-[10px] bg-[#1d1a29] md:block" />

            {/* Text */}
            <div className="">
              <h1 className="text-[40px] md:text-[60px] font-normal font-fjalla-one uppercase tracking-[0.12em] text-white md:text-7xl">
                OUR LATEST
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] text-white/90 md:text-[16px]">
                Find out all the latest and greatest news for NTS. Here you’ll
                find any interviews, guest articles, and press releases. We’ll
                also be sharing some fun stuff like birthday wishes, anything
                notable for our transport specialists, and promotions. So make
                sure to check back often!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center px-4 py-6 bg-white">
        <div className="flex w-full max-w-5xl overflow-hidden rounded-sm shadow-lg">
          {/* Left – network/globe illustration */}
          <div className="w-[350px] min-w-[160px] flex-shrink-0">
            <img
              src="/n1.jpg"
              alt="Global network illustration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right – dark panel */}
          <div className="flex md:flex-1 md:flex-col items-center justify-center bg-[#27232D] px-8 py-6 text-center hidden xl:block md:block">
            {/* Chatbot icon */}
            {/* <div className="mb-2 text-white text-xl">✦</div> */}

            <h3 className="text-white text-[32px] font-montserrat font-bold mb-2">
              Our Fort Lauderdale Office Moves To a New Location
            </h3>
            <p className="text-white text-sm font-montserrat font-medium italic mb-5">
              It’s with great pride that we’re announcing the relocation of the
              Fort Lauderdale office to 2765 W. Cypress Creek Rd, Fort
              Lauderdale, FL 33309. The office is 7,500 square feet and has over
              40 employees. Reflecting on the fact that our company was started
              at home over a decade ago and now has multiple locations…
            </p>
            {/* <button className="bg-[#E45819] hover:bg-orange-600 transition-colors text-white text-sm font-montserrat font-bold tracking-widest uppercase px-6 py-2 rounded-sm">
              Find Your Answers
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 py-6 bg-white">
        <div className="flex w-full max-w-5xl overflow-hidden rounded-sm shadow-lg">
          {/* Left – network/globe illustration */}
          <div className="w-[350px] min-w-[160px] flex-shrink-0">
            <img
              src="/n2.jpg"
              alt="Global network illustration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right – dark panel */}
          <div className="flex md:flex-1 md:flex-col items-center justify-center bg-[#27232D] px-8 py-6 text-center hidden xl:block md:block">
            {/* Chatbot icon */}
            {/* <div className="mb-2 text-white text-xl">✦</div> */}

            <h3 className="text-white text-[32px] font-montserrat font-bold mb-2">
              Kentucky Accounting Office Moves To a New Address
            </h3>
            <p className="text-white text-sm font-montserrat font-medium italic mb-5">
              Formerly at 2252 Burlington Pike Ste, 200 Burlington, KY 41005,
              our Kentucky accounting office is now located at 7920 Dream St,
              Florence, KY 41042. After being at the old address for a few
              years, we moved into a more spacious, conducive, and easily
              accessible location to help us efficiently serve our customers and
              carriers. This…
            </p>
            {/* <button className="bg-[#E45819] hover:bg-orange-600 transition-colors text-white text-sm font-montserrat font-bold tracking-widest uppercase px-6 py-2 rounded-sm">
              Find Your Answers
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 py-6 bg-white">
        <div className="flex w-full max-w-5xl overflow-hidden rounded-sm shadow-lg">
          {/* Left – network/globe illustration */}
          <div className="w-[350px] min-w-[160px] flex-shrink-0">
            <img
              src="/n3.jpg"
              alt="Global network illustration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right – dark panel */}
          <div className="flex md:flex-1 md:flex-col items-center justify-center bg-[#27232D] px-8 py-6 text-center hidden xl:block md:block">
            {/* Chatbot icon */}
            {/* <div className="mb-2 text-white text-xl">✦</div> */}

            <h3 className="text-white text-[32px] font-montserrat font-bold mb-2">
              BUSINESS INSIDER: How One Auto Transport Company is Changing the
              Way We Look at Moving
            </h3>
            <p className="text-white text-sm font-montserrat font-medium italic mb-5">
              FT. LAUDERDALE, Fla., July 15, 2019 — Nationwide Transport
              Services (“NTS”), a full-service auto transport carrier announces
              the launch of AutoTransport.com to meet the demands for personal
              vehicle transport nationwide. “Moving can be stressful and we want
              to make it as easy as possible,” said Jason Foltz, CEO of
              Nationwide Transport Services. “We can ship…
            </p>
            {/* <button className="bg-[#E45819] hover:bg-orange-600 transition-colors text-white text-sm font-montserrat font-bold tracking-widest uppercase px-6 py-2 rounded-sm">
              Find Your Answers
            </button> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}
