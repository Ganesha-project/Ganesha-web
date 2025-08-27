import { Banner } from "@/components/go-space/Banner";
import { GoFeedback } from "@/components/go-space/GoFeedback";
import { ExploreSpaces } from "@/components/go-space/ExploreSpaces";
import { PricingPlan } from "@/components/go-space/PricingPlan";
import { WhyUs } from "@/components/go-space/WhyUs"; 
import { PageFaq } from "@/components/go-space/FAQ";
// import { TextGradientYellowPurple, TextMainGradient } from "@/utils/ReueseClass";

export default function GoSpacePage() {
    return (
        <>
        <Banner/>
        <WhyUs/>
        <ExploreSpaces/>
        <PricingPlan/>
        <PageFaq/>
        <GoFeedback/>
        </>
    )
}