import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TruckServices from "@/components/TruckServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import AnyWhere from "@/components/AnyWhere";
import NTSEventsPage from "@/components/NtsEvent";
import CustomerExperience from "@/components/CustomerExperience";
import QuoteBannerWithLogos from "@/components/Banner";
import Reviews from "@/components/Reviews";
import CompanyGrowthTimeline from "@/components/Growth";
import CompanyLocations from "@/components/Location";

export default function Home() {
  return (
   <>
   <Header />
   <Hero/>
   <TruckServices/>
   <WhyChooseUs/>
   <OurServices/>
   <NTSEventsPage/>
   <CustomerExperience/>
    <CompanyLocations/>
   <CompanyGrowthTimeline/>
   <Reviews/>
   <AnyWhere/>
   <QuoteBannerWithLogos/>
   <Footer/>
   </>
  );
}
