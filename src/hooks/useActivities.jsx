import { useEffect, useRef, useState } from "react";

export function useActivities({initialShow = 9, sortOrder = "DESC"}) {
  const [activities, setActivities] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(initialShow);
  const [sort, setSort] = useState(sortOrder);
  const [loadingMore, setLoadingMore] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    async function fetchActivities() {
      try {
        setLoadingMore(true);
        const params = new URLSearchParams({
          limit: itemsToShow.toString(),
        });
        const url = `${process.env.NEXT_PUBLIC_APIURL}/content/activity?${params}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const formatted = (Array.isArray(data?.data) ? data.data : [])
          .filter((item) => item.isPromo === false)
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sort === "ASC" ? dateA - dateB : dateB - dateA;
          })
          .map((item) => ({
            id: item.id,
            title: item.title,
            date: item.date,
            location: null,
            description: item.desc,
            longDesc: item.longDesc,
            ig: !!item.instaUrl,
            instagramUrl: item.instaUrl || "",
            imageUrl: item.medias?.length
              ? item.medias.map((mediaItem) => mediaItem.media.url)
            : ["https://via.placeholder.com/750"],
          }));

        setActivities(formatted);
        setLoad(false);
        setLoadingMore(false);
      } catch (err) {
        setError(err.message);
        setLoad(false);
        setLoadingMore(false);
      }
    }

    fetchActivities();
  }, [itemsToShow, sort]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setItemsToShow((prev) => prev + 3);
      }
    });

    const trigger = document.getElementById("loadMoreTrigger");
    if (observerRef.current && trigger) {
      observerRef.current.observe(trigger);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return {
    activities,
    loadActivity: load,
    errorActivity: error,
    loadingMore,
    setSort,
    setItemsToShow,
  };
}
