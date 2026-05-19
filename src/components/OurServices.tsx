// app/components/OurServices.tsx

import { Check } from "lucide-react";

const services = [
  {
    title: "Freight Shipping",
    description:
      "We provide freight shipping for loads of various sizes. Solutions such as trailer shipping, drive-away services and hotshot trucking are available for domestic and international transport.",
  },
  {
    title: "Heavy Hauling",
    description:
      "Our heavy equipment hauling services include transporting oversize shipments. We map out the details of these shipment plans and obtain pilot cars when necessary for improved safety. Receive your heaviest shipments on time with our heavy hauling services.",
  },
  {
    title: "Auto Transportation",
    description:
      "We offer auto transport solutions for cars of any size. You can choose between drive-away and trailer shipping services. Wherever you need your cars to go, we can get them there. Our auto transportation service areas include Alaska and Hawaii.",
  },
  {
    title: "Container Shipping",
    description:
      "Container shipping is essential to the economy, but it's also essential to your business. AS Prime Logistics offers custom and quality container moving services. We're here to provide the best container transport in the industry.",
  },
  {
    title: "Flatbed Trucking",
    description:
      "Flatbed trucking is perfect for transporting heavy machinery such as construction equipment, mining equipment, and more. Haul oversized equipment with Lowboy Trailers. AS Prime Logistics provides flatbed trucking across the United States, including Alaska and Hawaii.",
  },
  {
    title: "International Export",
    description:
      "Our port-to-port transportation options are available for any vehicle or piece of equipment. AS Prime Logistics can also assist you in filling out customs paperwork. Our dedicated team of export professions makes the process easy.",
  },
  {
    title: "Agriculture Equipment and Commodity Transport",
    description:
      "Industrial agriculture companies and farmers use our agriculture equipment and commodity transportation solutions to bring equipment to their farm and export commodities.",
  },
  {
    title: "Power-Only Transportation",
    description:
      "If you supply the trailer, we can haul it. AS Prime Logistics will find the best driver for your route. Plus, a transport specialist will take care of the paperwork you need to haul your trailer.",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[35px] font-normal font-fjalla-one text-[#27232d] mb-5">
            Our Services
          </h2>

          <p className="max-w-3xl mx-auto text-[16px] leading-[1.7] text-[#5B5B5B] font-montserrat font-light">
            At AS Prime Logistics,{" "}
            <span className="text-[#d6582f]">
              we offer several transportation solutions
            </span>{" "}
            to meet your shipping and hauling needs. Choose the option that best
            fits your applications:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
          {services.map((service, index) => (
            <div key={index}>
              
              {/* Icon */}
              <div className="w-5 h-5 rounded-sm bg-[#EB6A37] flex items-center justify-center mb-7">
                <Check className="text-white w-4 h-4 stroke-[3]" />
              </div>

              {/* Title */}
              <h3 className="text-[16px] leading-[1.3] font-extrabold uppercase text-[#1A1A2E] mb-5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] font-montserrat font-light leading-[1.8] text-[#666666]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}