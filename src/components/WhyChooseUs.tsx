// app/components/WhyChooseUs.tsx

import {
  Truck,
  MapPin,
  UserRound,
  FileText,
  Users,
  CreditCard,
  Star,
  ScrollText,
  Newspaper,
  Network,
  HandCoins,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "OVER 150,000 TRUCKS\nNATIONWIDE",
  },
  {
    icon: MapPin,
    title: "MULTIPLE LOCATIONS\nNATIONWIDE",
  },
  {
    icon: UserRound,
    title: "7-DAY CUSTOMER SERVICE\nEXTENDED HOURS",
  },
  {
    icon: FileText,
    title: "30,000 CONTRACTED\nCARRIERS",
  },
  {
    icon: Users,
    title: "ONE-ON-ONE LOGISTICS\nSPECIALISTS",
  },
  {
    icon: CreditCard,
    title: "FLEXIBLE PAYMENT OPTIONS",
  },
  {
    icon: Star,
    title: "5/5 STAR RATES BUSINESS",
  },
  {
    icon: ScrollText,
    title: "CONTINGENT CARGO\nINSURANCE",
  },
  {
    icon: Newspaper,
    title: "TRANSPORT TOPICS TOP 100\nFREIGHT BROKERAGE",
  },
  {
    icon: Network,
    title: "A+ RATED – BBB ACCREDITED",
  },
  {
    icon: HandCoins,
    title: "DIVERSIFIED TRUCKING\nOPTIONS",
  },
  {
    icon: BarChart3,
    title: "INC. 5000 FASTEST GROWING\nCOMPANY 3-YEARS IN A ROW",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  size={44}
                  className="text-[#EB6A37] mb-5 stroke-[2.2]"
                />

                <h3 className="whitespace-pre-line text-[#27232d] text-[16px] leading-[1.5] font-normal font-fjalla-one uppercase">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}