"use client";

import { useState, useEffect } from "react";
import { BannerActivity } from "@/components/BannerActivity";
import { CardActivity } from "@/components/CardActivity";
import { SkeletonBannerActivity } from "@/components/Skeleton/SkeletonBannerActivity";
import { SkeletonCardActivity } from "@/components/Skeleton/SkeletonCardActivity";

export default function Activity() {
    const [activities, setActivities] = useState(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(9);
    const [sort, setSort] = useState("DESC");

    useEffect(() => {
        async function fetchActivities() {
            try {
                let fetchUrl = `${process.env.NEXT_PUBLIC_APIURL}/api/activities?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;

                const res = await fetch(fetchUrl);

                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await res.json();

                // Format data
                const formattedActivities = data.data.map((item) => ({
                    title: item.attributes.title,
                    date: item.attributes.date,
                    location: item.attributes.location,
                    description: item.attributes.descriptions,
                    ig: item.attributes.ig,
                    imageUrl: item.attributes.mediaUrl?.data?.attributes?.formats?.medium?.url
                        ? `https://cms-ganesha.ganeshaconsulting.co.id${item.attributes.mediaUrl.data.attributes.formats.medium.url}`
                        : "https://via.placeholder.com/750", // Placeholder jika tidak ada gambar
                }));

                setActivities(formattedActivities);
                setLoad(false);
            } catch (error) {
                setError(error.message);
                setLoad(false);
            }
        }
        fetchActivities();
    }, [itemsToShow, sort]);

    const loadMore = () => {
        setItemsToShow(prevItems => prevItems + 3);
    };

    const setSortOrder = (order) => {
        setSort(order);
    };

    return (
        <>
            {error ? (
                <div>Error: {error}</div>
            ) : load ? (
                <>
                    <SkeletonBannerActivity />
                </>
            ) : (
                <BannerActivity data={activities} />
            )}
            <section>
                {error ? (
                    <div>Error: {error}</div>
                ) : load ? (
                    <>
                        <SkeletonCardActivity/>
          </>
                ) : activities.length === 0 ? (
                    <div className="h-[30lvh] flex items-center justify-center">
                        <p className="text-xl text-center">No activities found.</p>
                    </div>
                ) : (
                    <CardActivity
                        activities={activities} // Kirim data yang sudah diformat ke CardActivity
                        items={itemsToShow}
                        loadMore={loadMore}
                    />
                )}
            </section>
        </>
    );
}
