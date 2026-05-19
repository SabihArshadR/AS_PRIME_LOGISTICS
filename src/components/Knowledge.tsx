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

export default function Knowledge() {
  return (
    <div className="bg-white">
      <section className="relative h-[720px] pl-12 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn-ikpnonn.nitrocdn.com/waDtbKwbaGRAyvseWdfAzZVchgcglzdg/assets/images/optimized/rev-ff271cb/ntslogistics.com/wp-content/uploads/2026/04/knowledge-base-hero-2-scaled.jpg"
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
                KNOWLEDGE BASE
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] text-white/90 md:text-[16px]">
                Guidance, When You Need It.Your one stop for all the logistics
                industry knowledge you need, from our experts team to you
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[35px] font-normal font-fjalla-one text-[#27232d] mb-5 mt-20">
            All Articles
          </h2>

          {/* <p className="max-w-3xl mx-auto text-[16px] leading-[1.7] text-[#5B5B5B] font-montserrat font-light">
                  At AS Prime Logistics,{" "}
                  <span className="text-[#d6582f]">
                    we offer several transportation solutions
                  </span>{" "}
                  to meet your shipping and hauling needs. Choose the option that best
                  fits your applications:
                </p> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20 pb-10">
          {services.map((service, index) => (
            <div key={index}>

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
