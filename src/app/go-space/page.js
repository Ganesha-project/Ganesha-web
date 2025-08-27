import { Banner } from "@/components/go-space/Banner";
import { GoFeedback } from "@/components/go-space/GoFeedback";
import { ExploreSpaces } from "@/components/go-space/ExploreSpaces";
import { PricingPlan } from "@/components/go-space/PricingPlan";
import { WhyUs } from "@/components/go-space/WhyUs"; 
// import { TextGradientYellowPurple, TextMainGradient } from "@/utils/ReueseClass";

export default function GoSpacePage() {
    return (
        <>
        <Banner/>
        <WhyUs/>
        <ExploreSpaces/>
        <PricingPlan/>
        <GoFeedback/>
        </>
    )
}