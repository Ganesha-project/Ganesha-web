
import { GoFeedback } from "@/components/go-space/GoFeedback";
import { ExploreSpaces } from "@/components/go-space/ExploreSpaces";
import { PricingPlan } from "@/components/go-space/PricingPlan";
import { PageFaq } from "@/components/go-space/FAQ";
import { WhyUsDekstop, WhyUsMobile } from "@/components/go-space/WhyUs";
import { GoBanner } from "@/components/go-space/GoBanner";
import { getPackagesByServiceId } from "@/lib/getPackagesByServiceId";

export default async function GoSpacePage() {

    const GoSpacePackagesAPI = await getPackagesByServiceId(11)

    return (
        <>
            {/* go-space page */}
            <GoBanner/>
            <WhyUsDekstop/>     
            <WhyUsMobile/>
            <ExploreSpaces/>
            <PricingPlan data={GoSpacePackagesAPI} />
            <PageFaq/>
            <GoFeedback/>
        </>
    );
}