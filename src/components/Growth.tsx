"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type TimelineItem = {
  year: number;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    year: 2009,
    title: "Company Founded",
    description:
      "AS Prime Logistics officially started operations.",
  },
  {
    year: 2010,
    title: "First Expansion",
    description:
      "Expanded services into multiple transportation categories.",
  },
  {
    year: 2011,
    title: "New Partnerships",
    description:
      "Partnered with nationwide logistics companies.",
  },
  {
    year: 2012,
    title: "Team Growth",
    description:
      "Added new staff and opened additional offices.",
  },
  {
    year: 2013,
    title: "Technology Upgrade",
    description:
      "Implemented advanced tracking and management systems.",
  },
  {
    year: 2014,
    title: "National Reach",
    description:
      "Expanded transportation coverage across the United States.",
  },
  {
    year: 2015,
    title: "Customer Milestone",
    description:
      "Reached thousands of satisfied customers nationwide.",
  },
  {
    year: 2016,
    title: "Award Recognition",
    description:
      "Recognized as one of the fastest-growing transport companies.",
  },
  {
    year: 2017,
    title: "INC 5000",
    description:
      "Featured in INC 5000 for company growth and performance.",
  },
  {
    year: 2018,
    title: "Property Expansion",
    description:
      "Opened new operational facilities and expanded office space.",
  },
  {
    year: 2019,
    title: "Operational Scaling",
    description:
      "Scaled operations to manage larger transport volumes.",
  },
  {
    year: 2020,
    title: "Remote Operations",
    description:
      "Successfully adapted to remote logistics coordination.",
  },
  {
    year: 2021,
    title: "Service Optimization",
    description:
      "Improved customer support and delivery systems.",
  },
  {
    year: 2022,
    title: "Fleet Expansion",
    description:
      "Added more transport vehicles and nationwide routes.",
  },
  {
    year: 2023,
    title: "Company Growth",
    description:
      "Property updates include West Palm Beach and Jacksonville locations.",
  },
  {
    year: 2024,
    title: "Future Expansion",
    description:
      "Planning further nationwide expansion and operational growth.",
  },
];

export default function CompanyGrowthTimeline() {
  const [activeIndex, setActiveIndex] = useState(
    timelineData.findIndex((item) => item.year === 2023)
  );

  const activeItem = timelineData[activeIndex];

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < timelineData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[35px] font-normal uppercase tracking-[4px] text-[#27232d] font-fjalla-one">
            Company Growth
          </h2>

          <p className="mt-4 text-[18px] font-montserrat font-normal tracking-[5px] uppercase text-[#27232d] ">
            Learn About AS Prime Logistics
          </p>
        </div>

        {/* Content */}
        <div className="mt-24 flex items-center justify-between gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-gray-500 hover:text-black transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Center Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 flex-1 justify-center">
            {/* Big Circle */}
            <div className="w-[180px] h-[180px] rounded-full bg-[#ef6b36] flex items-center justify-center shrink-0">
              <span className="text-white text-5xl font-light">
                {activeItem.year}
              </span>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold text-[#17223b] mb-5">
                {activeItem.title}
              </h3>

              <p className="text-gray-500 leading-9 text-lg">
                {activeItem.description}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-gray-500 hover:text-black transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Timeline Years */}
        <div className="mt-20 flex items-center justify-center flex-wrap gap-5">
          {timelineData.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setActiveIndex(index)}
              className={`w-10 h-10 rounded-full text-sm transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-[#ef6b36] text-white scale-110"
                    : "bg-[#5c556f] text-white hover:scale-105"
                }
              `}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}