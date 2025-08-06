"use client";

import { useState, useEffect, useRef } from "react";
import { BannerActivity } from "@/components/BannerActivity";
import { CardActivity } from "@/components/CardActivity";
import { SkeletonBannerActivity } from "@/components/Skeleton/SkeletonBannerActivity";
import { SkeletonCardActivity } from "@/components/Skeleton/SkeletonCardActivity";
import Head from "next/head";
import { FiLoader } from "react-icons/fi";

export default function Activity() {
    const [activities, setActivities] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(9);
    const [sort, setSort] = useState("DESC");
    const [loadingMore, setLoadingMore] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        async function fetchActivities() {
            try {
                setLoadingMore(true);
                let fetchUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/activities?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
                const res = await fetch(fetchUrl);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await res.json();
                const formattedActivities = data.data.map((item) => ({
                    title: item.attributes.title,
                    date: item.attributes.date,
                    location: item.attributes.location,
                    description: item.attributes.descriptions,
                    longDesc: item.attributes.longDesc,
                    ig: item.attributes.ig,
                    instagramUrl: item.attributes.instagramUrl, 
                    imageUrl: item.attributes.mediaUrl?.data?.length
                        ? item.attributes.mediaUrl.data.map(img => `https://cms-ganesha.ganeshaconsulting.co.id${img.attributes.url}`)
                        : ["https://via.placeholder.com/750"],
                }));
                setActivities(formattedActivities);
                setLoad(false);
                setLoadingMore(false);
            } catch (error) {
                setError(error.message);
                setLoad(false);
                setLoadingMore(false);
            }
        }
        fetchActivities();
    }, [itemsToShow, sort]);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setItemsToShow(prev => prev + 3);
            }
        });
        if (observerRef.current && document.getElementById("loadMoreTrigger")) {
            observerRef.current.observe(document.getElementById("loadMoreTrigger"));
        }
        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <>
            <Head>
                <title>Latest Activities | Ganesha Multi Kreatif</title>
                <meta name="description" content="Discover the latest activities and events organized by Ganesha Multi Kreatif. Stay updated with our newest events, schedules, and locations." />
                <meta name="keywords" content="activities, events, Ganesha Multi Kreatif, latest updates, workshops" />
                <meta name="author" content="Ganesha Multi Kreatif" />
                <meta property="og:title" content="Latest Activities | Ganesha Multi Kreatif" />
                <meta property="og:description" content="Discover the latest activities and events organized by Ganesha Multi Kreatif." />
                <meta property="og:image" content={activities?.[0]?.imageUrl?.[0] || "https://via.placeholder.com/750"} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yourwebsite.com/activities" />
            </Head>
            {error ? (
                <div>Error: {error}</div>
            ) : load ? (
                <SkeletonBannerActivity />
            ) : (
                <BannerActivity data={activities} />
            )}
            <section>
                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <SkeletonCardActivity />
                ) : activities.length === 0 ? (
                    <div className="h-[30lvh] flex items-center justify-center">
                        <p className="text-xl text-center">No activities found.</p>
                    </div>
                ) : (
                    <CardActivity
                        activities={activities}
                        items={itemsToShow}
                    />
                )}
                <div id="loadMoreTrigger" className="h-10" />
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
