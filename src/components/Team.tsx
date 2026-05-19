import { Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Everything You Need to Know About Freight Calculator",
    description:
      "Freight costs are one of the biggest variables, whether you’re managing a tight budget, coordinating large hauls across state lines or simply trying to avoid unexpected surcharges. Determining what those costs will be isn’t always straightforward. Freight pricing depends on several moving parts, including distance, cargo type and fuel rates. Miscalculations can lead to delays, lost revenue or unhappy clients. Below, we’ll explore how freight calculators work, what influences shipping costs and how to get the most reliable estimates possible. ",
  },
  {
    title: "Understanding Accessorial Charges in Freight Shipping",
    description:
      "In shipping, a freight charge is the total cost of moving goods, which often exceeds the base rate. Accessorial charges are added for extra services beyond standard pickup and delivery. For shippers, logistics managers and procurement teams, understanding accessorial fees is critical to controlling freight spend and improving supply chain efficiency. The key to navigating accessorial charges is to plan ahead. Understand which charges may apply to your consignment and how you can prevent some of these charges and avoid surprise fees.",
  },
  {
    title:
      "Freight Shipping Insurance: Protecting Your Cargo From Loss or Damage",
    description:
      "When it comes to freight shipping, the primary focus for most businesses is to ensure their goods travel safely and arrive on time. However, sometimes the journey from point A to point B isn’t smooth. Unexpected issues like damaged equipment, lost cargo or delays can cost your business a lot of money. Below, we’ll explore freight shipping insurance and how it can protect your cargo from loss or damage, so you can keep your operations secure, your shipments protected and your mind at ease.",
  },
  {
    title: "The Best Truck Stops in America to Visit in 2025",
    description:
      "Truck drivers need adequate rest and proper nutrition while in transit to energize and continue the journey the next day for their well-being. Enough sleep is vital because it reduces fatigue, alerting truckers on the road while transporting goods. Having the right rest stops is essential as it helps drivers revitalize through proper meals and enough rest. Truckers and fleet managers should select the best stops that offer unique and fun driver experience, safety, fuel, showers, toilets, and healthy meals. Here are some unmatched truck stops in the USA that you should consider visiting in 2025..",
  },
  {
    title: "Understanding Freight Class",
    description:
      "When your business operations rely on load movement, it’s important to obtain accurate pricing information, ensure proper cargo handling and have peace of mind over movement consistency. Freight classes provide the information you need to move loads safely and efficiently with accurate price points in mind. Here, you can learn more about freight class and how to ensure proper identification of your shipments.",
  },
  {
    title: "Everything You Need To Know About RVs ",
    description:
      "Recreational vehicles, usually abbreviated as RVs, are driveable or towable vehicles intended for travel, camping, recreation, and living. They have the amenities needed for comfortable living, including bathrooms, kitchens, sleeping areas, storage spaces, and, in some cases, entertainment. RVs come in diverse sizes and shapes to accommodate different budgets and travel requirements.",
  },
  {
    title: "Everything You Need To Know About PODs",
    description:
      "PODs have revolutionized modern moving and storage by combining flexibility, convenience, and affordability into one seamless solution. Whether relocating, decluttering, or carrying out a home improvement project, PODs provide a reliable and user-friendly option for individuals, families, and businesses. While with limitations, PODs offer significant advantages that have transformed the moving and storage industry.",
  },
  {
    title: "Everything You Need To Know About Sheds",
    description:
      "A shed is a small, unsophisticated structure typically located in a backyard or garden for storage, recreation, or as a workspace. Sheds are mostly made of wood, metal, or plastic and come in various sizes and styles depending on the intended purpose. The word “shed” originates from an Anglo-Saxon term with various spellings: Shad, Shedde, or Shadde, which means division or separation.",
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <section className="relative h-[720px] pl-12 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/team.jpg"
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
                OUR TEAM
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] text-white/90 md:text-[16px]">
                Want to get to know who you’re talking to? Learn about your
                logistics specialist by choosing their profile which contains
                testimonials, a portfolio, their specialties, and the BIO of the
                coordinator you’re working with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center px-4 py-6 bg-white mt-20">
        <div className="flex w-full max-w-5xl overflow-hidden rounded-sm shadow-lg">
          {/* Left – network/globe illustration */}
          <div className="w-[350px] min-w-[160px] shrink-0">
            <img
              src="/n1.jpg"
              alt="Global network illustration"
              className="xl:h-full w-full object-cover"
            />
          </div>

          {/* Right – dark panel */}
          <div className="flex md:flex-1 md:flex-col items-center justify-center px-8 py-6 text-center hidden xl:block md:block">
            {/* Chatbot icon */}
            {/* <div className="mb-2 text-white text-xl">✦</div> */}

            <h3 className="text-black text-[32px] font-montserrat font-bold mb-2">
              MEET OUR TRANSPORTATION SPECIALISTS
            </h3>
            <p className="text-black text-sm font-montserrat font-medium mb-5">
              At AS Prime Logistics we are proud of our transport
              specialist team. Each person is dedicated to their clients, making
              sure they have the best shipping experience possible. <br></br>{" "}
              <br></br> The transport team is a group of highly trained
              logistics agents and they’re ready to find the best shipping
              solution to meet your needs. Each team member puts the client
              first. We want you to have more than just a transport.<br></br>{" "}
              <br></br> At AS Prime Logistics, our specialists are passionate about providing
              you with a quality customer service experience. Your dedicated
              transport specialist will be with you from dispatch to delivery.
              Look below to find out more about each team member!
            </p>
            {/* <button className="bg-[#E45819] hover:bg-orange-600 transition-colors text-white text-sm font-montserrat font-bold tracking-widest uppercase px-6 py-2 rounded-sm">
              Find Your Answers
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
