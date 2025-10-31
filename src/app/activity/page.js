"use client";

import { useState, useEffect, useRef } from "react";
import { BannerActivity } from "@/components/BannerActivity";
import { CardActivity } from "@/components/CardActivity";
import { SkeletonBannerActivity } from "@/components/Skeleton/SkeletonBannerActivity";
import { SkeletonCardActivity } from "@/components/Skeleton/SkeletonCardActivity";
import Head from "next/head";
import { FiLoader } from "react-icons/fi";
import Maintenance from "@/components/Maintenance";

export default function Activity() {
    const [activities, setActivities] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(9);
    const [loadingMore, setLoadingMore] = useState(false);
    const observerRef = useRef(null);
    const loadMoreTriggerRef = useRef(null);
    const [isMaintenance] = useState(false);

    // Format activities untuk komponen
    const formattedActivities = activities.map(activity => ({
        title: activity.title,
        date: activity.date,
        location: null,
        descriptions: activity.desc,
        longDesc: activity.longDesc,
        ig: !!activity.instaUrl,
        instagramUrl: activity.instaUrl || "",
        imageUrl: activity.medias && activity.medias.length > 0 
            ? activity.medias.map(mediaItem => 
                mediaItem.media.url.startsWith('http') 
                  ? mediaItem.media.url 
                  : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${mediaItem.media.url}`
              )
            : ["https://via.placeholder.com/750"],
    }));

    // Fetch activities
    useEffect(() => {
        async function fetchActivities() {
            try {
                setLoadingMore(true);
                const res = await fetch(`https://ganesha-cms.vercel.app/api/activity?page=1&limit=${itemsToShow}`);
                
                if (!res.ok) {
                    throw new Error("Failed to fetch activities");
                }
                
                const data = await res.json();
                
                if (data.success) {
                    setActivities(data.data);
                } else {
                    throw new Error(data.message || "Failed to fetch activities");
                }
            } catch (error) {
                setError(error instanceof Error ? error.message : "An error occurred");
            } finally {
                setLoad(false);
                setLoadingMore(false);
            }
        }
        fetchActivities();
    }, [itemsToShow]);

    // Infinite scroll observer
    useEffect(() => {
        if (!loadMoreTriggerRef.current) return;

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loadingMore) {
                setItemsToShow(prev => prev + 3);
            }
        });

        observerRef.current.observe(loadMoreTriggerRef.current);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [loadingMore]);

    if (isMaintenance) {
        return <Maintenance />;
    }

    return (
        <>
            <Head>
                <title>Latest Activities | Ganesha Multi Kreatif</title>
                <meta name="description" content="Discover the latest activities and events organized by Ganesha Multi Kreatif. Stay updated with our newest events, schedules, and locations." />
                <meta name="keywords" content="activities, events, Ganesha Multi Kreatif, latest updates, workshops" />
                <meta name="author" content="Ganesha Multi Kreatif" />
                <meta property="og:title" content="Latest Activities | Ganesha Multi Kreatif" />
                <meta property="og:description" content="Discover the latest activities and events organized by Ganesha Multi Kreatif." />
                <meta property="og:image" content={formattedActivities?.[0]?.imageUrl?.[0] || "https://via.placeholder.com/750"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yourwebsite.com/activities" />
            </Head>

            {/* Banner Section */}
            {error ? (
                <div>Error: {error}</div>
            ) : load ? (
                <SkeletonBannerActivity />
            ) : (
                <BannerActivity data={formattedActivities} />
            )}

            {/* Activities Grid Section */}
            <section>
                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonCardActivity />
                ) : formattedActivities.length === 0 ? (
                    <div className="h-[30lvh] flex items-center justify-center">
                        <p className="text-xl text-center">No activities found.</p>
                    </div>
                ) : (
                    <CardActivity
                        activities={formattedActivities}
                        items={itemsToShow}
                    />
                )}
                
                {/* Load More Trigger */}
                <div ref={loadMoreTriggerRef} id="loadMoreTrigger" className="h-10" />
                
                {loadingMore && itemsToShow >= activities.length && (
                    <div className="flex justify-center py-4 w-full items-center">
                        <p className="animate-spin text-2xl">
                            <FiLoader />
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}