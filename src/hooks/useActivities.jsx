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
        const url = `${process.env.NEXT_PUBLIC_APIURL}/api/activities?sort[0]=createdAt:${sort}&populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        const formatted = data.data.map((item) => ({
          title: item.attributes.title,
          date: item.attributes.date,
          location: item.attributes.location,
          description: item.attributes.descriptions,
          longDesc: item.attributes.longDesc,
          ig: item.attributes.ig,
          imageUrl: item.attributes.mediaUrl?.data?.length
            ? item.attributes.mediaUrl.data.map((img) =>
                `https://cms-ganesha.ganeshaconsulting.co.id${img.attributes.url}`
              )
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
