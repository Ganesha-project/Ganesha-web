import { Banner } from "@/components/go-space/Banner"
import { AboutUs } from "@/components/go-space/AboutUs"
import { WhyUs } from "@/components/go-space/WhyUs"
import { FaQ } from "@/components/go-space/FaQ"
import { PriceCatalog } from "@/components/go-space/PriceCatalog"
import { RoomPreview } from "@/components/go-space/RoomPreview"
import { FeedbackForm } from "@/components/go-space/FeedbackForm"
import { Mona_Sans } from "next/font/google"

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

export default function GoSpacePage() {
  return (
    <div className={`${monaSans.className} bg-gray-50 min-h-screen`}>
      <Banner />
      <AboutUs />
      <WhyUs fontCustom={monaSans.className} />
      <PriceCatalog fontCustom={monaSans.className} />
      <RoomPreview fontCustom={monaSans.className} />
      <FaQ fontCustom={monaSans.className} />
      <FeedbackForm fontCustom={monaSans.className} />
    </div>
  )
}
