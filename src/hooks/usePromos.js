import { useEffect, useState } from "react";

export const usePromos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [promos, setPromos] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APIURL}/business/promos?limit=100`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch promos");
        }
        const data = await res.json();

        if (data?.success && Array.isArray(data.data)) {
          setPromos(data.data);
        } else {
          setPromos([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch promos");
        setPromos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    promos,
    setPromos,
    loading,
    setLoading,
    error,
    setError
  }
};
