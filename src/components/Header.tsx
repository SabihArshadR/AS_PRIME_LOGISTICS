// app/components/Header.tsx
"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    name: "SERVICES",
    path: "/services",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "NEWS",
    path: "/news",
  },
  {
    name: "K-BASE",
    path: "/knowledge",
  },
  {
    name: "TEAM",
    path: "/team",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#16131C] text-white">
        <div className="mx-auto flex xl:h-11 h-20 max-w-[1500px] items-center justify-between px-6">
          <div className="flex items-center gap-5 text-base font-normal font-montserrat">
            <Phone className="h-4 w-4 text-[#ff7a2f] xl:ml-0" />
            <div className="">
              <span className="text-[10px] xl:text-base ">(412) 228 0174</span>{" "}
              <span className="hidden">{" , "}</span>
              <br className="xl:hidden block" />
              <span className="text-[10px] xl:text-base md:block xl:block hidden">(412) 414 2473</span>
            </div>
          </div>

          <div className="hidde xl:flex">
            <h1>Ceo/President : Arham Abdullah</h1>
          </div>

          <div className="hidden items-center gap-5 text-[12px] text-white/80 font-light md:flex">
            <Link href="#" className="transition ">
              Carriers
            </Link>

            <Link href="#" className="transition">
              Shippers
            </Link>

            <Link href="#" className="transition">
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
          <nav className="hidde items-center xl:gap-7 gap-2 lg:flex xl:ml-[100px] ml-5 flex">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`xl:text-[14px] text-[8px] font-lato font-bold tracking-wide transition ${
                    isActive
                      ? "text-[#ff7a2f]"
                      : "text-[#111] hover:text-[#ff7a2f]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href="/services"
              className="rounded bg-[#EC6334] px-3 py-2 text-sm font-lato font-bold text-white transition hover:bg-[#ea6223]"
            >
              SHIPPING QUOTE
            </Link>

            <Link
              href="/contact"
              className="rounded bg-[#007A5A] px-3 py-2 text-sm font-lato font-bold text-white transition hover:bg-[#0b8777]"
            >
              (412) 228-0174
            </Link>
          </div>

          <div>
            {/* <h1 className="text-[14px] text-black xl:hidden flex">
              Ceo/President : Arham Abdullah
            </h1> */}
          </div>
        </div>
      </div>
    </header>
  );
}
