import { Check } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="relative h-[720px] pl-12 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact.jpg"
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
                Contact us
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] text-white/90 md:text-[16px]">
                To get the best care and prices for your transport call us now.
                Your dedicated logistics specialist provides you with the best
                shipping prices. We also take the time to find the best driver
                and truck to meet your needs. Call now and we'll be there from
                dispatch to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-20">
        <h2 className="text-[35px] font-normal uppercase tracking-[4px] text-[#27232d] font-fjalla-one">
          Phone
        </h2>

        <p className="mt-4 text-[18px] font-montserrat font-normal tracking-[5px] uppercase text-[#27232d] ">
          (412) 228 0174 , (412) 414 2473
        </p>
      </div>

      <div className="text-center mt-20 pb-20">
        <h2 className="text-[35px] font-normal uppercase tracking-[4px] text-[#27232d] font-fjalla-one">
          Email
        </h2>

        <p className="mt-4 text-[18px] font-montserrat font-normal tracking-[5px] uppercase text-[#27232d] ">
          info@asprimelogistics.com
        </p>
      </div>
    </div>
  );
}
