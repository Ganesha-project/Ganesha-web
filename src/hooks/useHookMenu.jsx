import { useEffect, useState } from "react";

export const useHookMenu = () => {
  const [mediaUrl, setMediaUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHookMenu = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hook-menu?populate=*`);

        if (!res.ok) {
          throw new Error("Failed to fetch hook menu");
        }

        const data = await res.json();

        const url = data?.data?.attributes?.content?.data?.attributes?.url;

        if (url) {
          setMediaUrl(`https://cms-ganesha.ganeshaconsulting.co.id${url}`);
        } else {
          setMediaUrl(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHookMenu();
  }, []);

  return {
    mediaUrl,
    loadingHookMenu: loading,
    errorHookMenu: error,
  };
};
