// app/components/Header.tsx
import Link from "next/link";
import { Phone } from "lucide-react";

const navItems = [
  "SERVICES",
  "ABOUT",
  "NEWS",
  "KNOWLEDGE BASE",
  "EVENTS",
  "BRANDS",
  "TEAM",
  "GALLERY",
  "CONTACT"
];

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#16131C] text-white">
        <div className="mx-auto flex xl:h-11 h-20 max-w-[1500px] items-center justify-between px-6">
          <div className="flex items-center gap-5 text-base  font-normal font-montserrat">
            <Phone className="h-4 w-4 text-[#ff7a2f]" />
            <span>(412) 228 0174 </span>
            {" , "}
            <span>(412) 414 2473</span>
          </div>

          <div>
            <h1>Ceo/President : Arham Abdullah</h1>
          </div>

          <div className="hidden items-center gap-5 text-[12px] text-white/80 font-light  md:flex">
            <Link href="#" className="transition hover:text-[#ff7a2f]">
              Carriers
            </Link>
            <Link href="#" className="transition hover:text-[#ff7a2f]">
              Shippers
            </Link>
            <Link href="#" className="transition hover:text-[#ff7a2f]">
              Become a Customer
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1400px] flex h-20 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/headerlogo.png"
              alt="Logo"
              className="h-[68px] w-[85px]"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 lg:flex ml-[100px]">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[14px] font-lato font-bold tracking-wide text-[#111] transition hover:text-[#ff7a2f]"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 xl:flex">
  <Link
    href="#"
    className="rounded bg-[#EC6334] px-3 py-2 text-sm font-lato font-bold text-white transition hover:bg-[#ea6223]"
  >
    SHIPPING QUOTE
  </Link>

  <Link
    href="#"
    className="rounded bg-[#007A5A] px-3 py-2 text-sm font-lato font-bold text-white transition hover:bg-[#0b8777]"
  >
    (412) 228-0174
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
