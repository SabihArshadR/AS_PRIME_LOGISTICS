// app/components/Footer.tsx
import Link from "next/link";
import {
  Phone
} from "lucide-react";

const services = [
  "Agricultural Equipment Transport",
  "Container Moving",
  "Drayage",
  "Freight Shipping",
  "Heavy Haul",
  "Hot Shot Trucking",
  "International Import/Export",
  "Permit Acquiring",
  "Pilot car and Escort Vehicle Services",
  "Power Only",
  "Hablamos Español",
];

const about = [
  "What We Do",
  "Meet the Team",
  "Brands",
  "Awards",
  "Events",
  "In the Community",
  "Careers",
  "Drive for NTS",
];

const brands = [
  "Auto Transport",
  "Container Transport",
  "Heavy Equipment Transport",
  "Heavy Haulers",
  "Total Car Shipping",
  "Tractor Transport",
  "Wide Load Shipping",
];

const locations = [
  "Cleveland, Ohio",
  "Doral, FL",
  "Florence, KY",
  "Fort Lauderdale, FL",
  "Fort Myers, FL",
  "Fort Pierce, FL",
  "Jacksonville, FL",
  "Orlando, FL",
  "Tampa, FL",
  "West Palm Beach, FL",
];

const resources = [
  "Equipment Financing",
  "Knowledge Base",
  "Glossary",
  "Guides",
];

const news = ["Press", "Events", "Upcoming Expositions", "Media Coverage", "Awards"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#27232D] text-[#b8b6c6]">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-end opacity-[0.06]">
        <img
          src="/headerlogo.png"
          alt="Watermark"
          className="w-[800px] max-w-none h-[600px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 py-5">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-1">
          {/* Company Info */}
          <div className="max-w-[290px] font-montserrat text-[12px]">
            <img
              src="/headerlogo.png"
              alt="Logo"
              className="mb-8 w-[200px] h-[147px]"
            />

            <div className="">
              <p>AS Prime Logistics, LLC</p>
              <p>(877) 278-3135</p>
              <p>Fax: (954) 495-8199</p>
              <p>Info@asprimelogistics.com</p>
            </div>

            <div className="mt-8">
              <p>Headquarters: 2765 W. Cypress Creek Rd.,</p>
              <p>Fort Lauderdale, FL 33309</p>
            </div>

            <button className="mt-8 rounded bg-[#f36b35] px-7 py-3 tracking-[0.18em] text-white transition hover:bg-[#e45d28] mb-5">
              CONTACT US
            </button>
          </div>

          {/* Services */}
          {/* <FooterColumn title="SERVICES" items={services} /> */}

          {/* About + Brands */}
          {/* <div className="space-y-12">
            <FooterColumn title="ABOUT AS PRIME LOGISTICS" items={about} />
            <FooterColumn title="OUR BRANDS" items={brands} />
          </div> */}

          {/* Locations + News */}
          {/* <div className="space-y-12">
            <FooterColumn title="OFFICE LOCATIONS" items={locations} />
            <FooterColumn title="NEWS" items={news} />
          </div> */}

          {/* Social + Resources */}
          {/* <div className="space-y-12">
            <div>
              <div className="mb-5 text-[14px] font-bold tracking-[0.18em] text-white">
                SOCIAL
              </div>

              <div className="space-y-4">
                <SocialLink
                  icon={<Phone size={15} />}
                  label="FACEBOOK"
                />
                <SocialLink
                  icon={<Phone size={15} />}
                  label="TWITTER"
                />
                <SocialLink
                  icon={<Phone size={15} />}
                  label="YOUTUBE"
                />
                <SocialLink
                  icon={<Phone size={15} />}
                  label="INSTAGRAM"
                />
                <SocialLink
                  icon={<Phone size={15} />}
                  label="LINKEDIN"
                />
              </div>
            </div>

            <FooterColumn title="RESOURCES" items={resources} />
          </div> */}
        </div>

        {/* Bottom */}
        <div className=" border-t border-white/10 pt-6 text-sm text-[#b8b6c6]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="font-montserrat text-[12px] font-light text-[#cecece]">
              © 2026 AS Prime Logistics, LLC | Terms and
              Conditions | Privacy Policy | Sitemap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-5 text-[14px] font-normal tracking-[0.18em] text-white font-fjalla-one">
        {title}
      </h3>

      <ul className="">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-[12px] transition hover:text-[#f36b35] text-[#cecece]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type SocialLinkProps = {
  icon: React.ReactNode;
  label: string;
};

function SocialLink({ icon, label }: SocialLinkProps) {
  return (
    <Link
      href="#"
      className="flex items-center gap-4 text-[14px] font-semibold tracking-[0.08em] text-[#f36b35] transition hover:text-white"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
}