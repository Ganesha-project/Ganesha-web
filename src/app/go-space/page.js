import { Banner } from "@/components/go-space/Banner";
import { AboutUs } from "@/components/go-space/AboutUs";
import { WhyUs } from "@/components/go-space/WhyUs";
import { FAQ } from "@/components/go-space/FaQ";
import { PriceCatalog } from "@/components/go-space/PriceCatalog";
import { RoomPreview } from "@/components/go-space/RoomPreview";
import { FeedbackForm } from "@/components/go-space/FeedbackForm";
import { Mona_Sans } from "next/font/google";
import { GoTitle } from "@/utils/ReueseClass";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function GoSpacePage() {
  return (
    <main className={`${monaSans.className} min-h-screen`}>
      <Banner titleComponent={GoTitle} />
      <section className="md:mx-15 sm:mx-10 mx-7" >
        <AboutUs />
        <WhyUs fontCustom={monaSans.className} titleComponent={GoTitle} />
        <PriceCatalog fontCustom={monaSans.className} titleComponent={GoTitle} />
        <RoomPreview fontCustom={monaSans.className} titleComponent={GoTitle} />
        <FAQ fontCustom={monaSans.className} titleComponent={GoTitle} />
        <FeedbackForm fontCustom={monaSans.className} titleComponent={GoTitle} />
      </section>
    </main>
  );
}
