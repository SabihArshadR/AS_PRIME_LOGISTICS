// app/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[720px] pl-12 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/truck.jpg"
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
            AS PRIME LOGISTICS
            </h1>

            <p className="mt-5 font-light font-montserrat text-[18px] uppercase tracking-[0.2em] text-white md:text-[18px]">
              We&apos;ve Got You Covered
            </p>

            <p className="mt-5 max-w-[620px] text-[16px] text-white/90 md:text-[16px]">
              AS Prime Logistics is a top-rated transport company
              with over 15 years of experience. Our team of dedicated
              specialists is ready to help you safely transport any load to and
              from any state, Canada, or Mexico. Our services are available at
              competitive rates, and each shipment must be fully insured before
              it&apos;s dispatched. Get a free estimate today!
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex items-center justify-center bg-[#D3622E] px-8 py-3 text-sm font-semibold font-montserrat uppercase tracking-[0.2em] text-white transition hover:bg-[#df5c2b]"
            >
              More About NTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}