"use client";

import { useState, useEffect } from "react";
import { GoFeedback } from "@/components/go-space/GoFeedback";
import { ExploreSpaces } from "@/components/go-space/ExploreSpaces";
import { PricingPlan } from "@/components/go-space/PricingPlan";
import { PageFaq } from "@/components/go-space/FAQ";
import { WhyUsDekstop, WhyUsMobile } from "@/components/go-space/WhyUs";
import { GoBanner } from "@/components/go-space/GoBanner";

export default function GoSpacePage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // breakpoint md
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for screen resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            {/* go-space page */}
            <GoBanner/>
            {isMobile ? <WhyUsMobile/> : <WhyUsDekstop/>}      
            <ExploreSpaces/>
            <PricingPlan/>
            <PageFaq/>
            <GoFeedback/>
        </>
    );
}