"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Review = {
  id: number;
  name: string;
  review: string;
  source: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Nick",
    source: "Google",
    review:
      "AS Prime Logistics exceeded expectations! Great communication and fast delivery.",
  },
  {
    id: 2,
    name: "Davidinho Gaucho",
    source: "Google",
    review:
      "Carlos was very pleasant and responded quickly and efficiently to all issues.",
  },
  {
    id: 3,
    name: "Vic Adams",
    source: "Google",
    review:
      "Needed quick delivery and AS Prime Logistics came through perfectly.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    source: "Google",
    review:
      "Amazing customer support and very professional handling throughout the process.",
  },
  {
    id: 5,
    name: "Michael Brown",
    source: "Google",
    review:
      "Smooth transportation service and everything arrived safely on time.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    source: "Google",
    review: "Excellent communication and very reliable transport company.",
  },
  {
    id: 7,
    name: "Daniel Smith",
    source: "Google",
    review: "Fast delivery and professional service from start to finish.",
  },
  {
    id: 8,
    name: "Olivia Davis",
    source: "Google",
    review: "I highly recommend this company for nationwide transportation.",
  },
  {
    id: 9,
    name: "James Taylor",
    source: "Google",
    review: "Very efficient process and great customer service.",
  },
  {
    id: 10,
    name: "Sophia White",
    source: "Google",
    review: "Everything was handled professionally and delivered on time.",
  },
  {
    id: 11,
    name: "William Harris",
    source: "Google",
    review: "The team kept me updated throughout the transportation process.",
  },
  {
    id: 12,
    name: "Ava Martin",
    source: "Google",
    review: "Very responsive and easy to work with.",
  },
  {
    id: 13,
    name: "Benjamin Lee",
    source: "Google",
    review: "Safe and reliable transportation service.",
  },
  {
    id: 14,
    name: "Charlotte Walker",
    source: "Google",
    review: "Highly professional company with excellent communication.",
  },
  {
    id: 15,
    name: "Henry Hall",
    source: "Google",
    review: "Delivery arrived faster than expected.",
  },
  {
    id: 16,
    name: "Amelia Allen",
    source: "Google",
    review: "Very organized and trustworthy service.",
  },
  {
    id: 17,
    name: "Lucas Young",
    source: "Google",
    review: "Excellent support from the beginning until delivery.",
  },
  {
    id: 18,
    name: "Mia King",
    source: "Google",
    review: "Quick response time and amazing customer care.",
  },
  {
    id: 19,
    name: "Ethan Wright",
    source: "Google",
    review: "Reliable service with great pricing.",
  },
  {
    id: 20,
    name: "Harper Scott",
    source: "Google",
    review: "Very smooth process and great experience overall.",
  },
  {
    id: 21,
    name: "Alexander Green",
    source: "Google",
    review: "Professional team and timely updates.",
  },
  {
    id: 22,
    name: "Evelyn Baker",
    source: "Google",
    review: "The entire experience was stress free.",
  },
  {
    id: 23,
    name: "Jack Nelson",
    source: "Google",
    review: "Very dependable and friendly service.",
  },
  {
    id: 24,
    name: "Abigail Carter",
    source: "Google",
    review: "Would definitely recommend them to anyone.",
  },
  {
    id: 25,
    name: "Sebastian Mitchell",
    source: "Google",
    review: "Excellent experience and fast transport.",
  },
  {
    id: 26,
    name: "Emily Perez",
    source: "Google",
    review: "Very attentive and helpful throughout the process.",
  },
  {
    id: 27,
    name: "Matthew Roberts",
    source: "Google",
    review: "The service exceeded my expectations.",
  },
  {
    id: 28,
    name: "Ella Turner",
    source: "Google",
    review: "Affordable and professional transport company.",
  },
  {
    id: 29,
    name: "Joseph Phillips",
    source: "Google",
    review: "Everything arrived securely and on time.",
  },
  {
    id: 30,
    name: "Grace Campbell",
    source: "Google",
    review: "Great communication and outstanding service.",
  },
];

export default function FeaturedReviews() {
  const [visibleReviews, setVisibleReviews] = useState<Review[]>(
    reviews.slice(0, 3),
  );

  const [nextIndex, setNextIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleReviews((prev) => {
        const updated = [
          prev[1], // 2nd becomes 1st
          prev[2], // 3rd becomes 2nd
          reviews[nextIndex], // next review becomes 3rd
        ];

        return updated;
      });

      setNextIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[35px] font-normal text-[#27232d] font-fjalla-one">
            Featured Reviews
          </h2>

          <p className="text-[#27232d] mt-3 text-[16px] font-light font-montserrat">
            What They Are Saying About Us:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 min-h-[420px] flex flex-col justify-between transition-all duration-700"
            >
              <div>
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                  <div className="text-4xl font-bold text-[#4285F4]">
                    <Image
                      src="https://cdn-ikpnonn.nitrocdn.com/waDtbKwbaGRAyvseWdfAzZVchgcglzdg/assets/images/optimized/rev-ff271cb/ntslogistics.com/wp-content/uploads/2025/08/FAVPNG_brand-logo-google-my-business-review_W71UZ5aN.png"
                      alt="Google"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-16 h-[2px] bg-[#c4cfdd] mt-4" />
                </div>

                {/* Review */}
                <p className="text-gray-500 leading-8 text-[17px]">
                  {review.review}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-10">
                <h4 className="font-bold text-xl text-black">
                  – {review.name}
                </h4>

                <button className="mt-4 text-[#ff7b54] hover:underline">
                  Read Full Review
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                visibleReviews.some((r) => r.id === index + 1)
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
