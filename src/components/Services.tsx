import { Check } from "lucide-react";
import Link from "next/link";

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
      "Flatbed trucking is perfect for transporting heavy machinery such as construction equipment, mining equipment, and more. Haul oversized equipment with Lowboy Trailers. NTS Logistics provides flatbed trucking across the United States, including Alaska and Hawaii.",
  },
  {
    title: "International Export",
    description:
      "Our port-to-port transportation options are available for any vehicle or piece of equipment. AS Prime Logistics can also assist you in filling out customs paperwork. Our dedicated team of export professions makes the process easy.",
  },
];

export default function Services() {
  return (
    <div className="bg-white">

    <section className="relative h-[720px] pl-12 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/service.jpg"
          alt="Truck"
          className="h-full w-full object-cover object-[50%_80%]"
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
              Services
            </h1>

            <p className="mt-5 font-light font-montserrat text-[18px] uppercase tracking-[0.2em] text-white md:text-[18px]">
              We&apos;ve Got You Covered
            </p>

            <p className="mt-5 max-w-[620px] text-[16px] text-white/90 md:text-[16px]">
              AS Prime Logistics is a full service third-party
              logistics broker. We provide national and international
              transportation for any load, we specialize in heavy hauling,
              freight shipping, and auto transport.
            </p>

            {/* <Link
              href="#"
              className="mt-10 inline-flex items-center justify-center bg-[#D3622E] px-8 py-3 text-sm font-semibold font-montserrat uppercase tracking-[0.2em] text-white transition hover:bg-[#df5c2b]"
            >
              More About NTS
            </Link> */}
          </div>
        </div>
      </div>
    </section>
    <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[35px] font-normal font-fjalla-one text-[#27232d] mb-5 mt-20">
            Popular Services
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {services.map((service, index) => (
            <div key={index}>
              
              {/* Icon */}
              
              {/* <div className="w-5 h-5 rounded-sm bg-[#EB6A37] flex items-center justify-center mb-7">
                <Check className="text-white w-4 h-4 stroke-[3]" />
              </div> */}

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
    </div>
  );
}
