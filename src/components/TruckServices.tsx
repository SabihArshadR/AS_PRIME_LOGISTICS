// app/components/TruckingServices.tsx

import Image from "next/image";
import TruckImage from "@/../public/truckservice.jpg"; // replace with your image path

export default function TruckingServices() {
  return (
    <div>
      <div className="h-[100px] bg-white">

      </div>

    <section className="w-full bg-[#F7F1E9] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Image */}
          <div className="w-full">
            <Image
              src={TruckImage}
              alt="Trucking Services"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="uppercase tracking-[4px] text-[16px] font-fjalla-one font-normal text-[#27232d]">
              AS Prime Logistics
            </p>

            <h2 className="text-[35px] font-montserrat  leading-[1.1] font-bold text-[#27232d]">
              Trucking Services
            </h2>

            <p className="text-[16px] font-montserrat font-light text-[#27232d] mb-8 max-w-[460px]">
              AS Prime Logistics is proud to serve you as a
              third-party trucking broker. We specialize in{" "}
              <span className="text-[#D6582F]">
                freight shipping, heavy hauling, and auto transportation
              </span>{" "}
              solutions.
            </p>

            <p className="text-[16px] font-montserrat font-light text-[#27232d] max-w-[470px]">
              Our logistics services have been at the top of the industry for
              over a decade. We're dedicated to building our reputation as the
              standard for trucking brokers and transportation solution
              providers. We know that few orders are the same, so we look at
              every request with an eye for detail and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}