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
          "https://ganesha-cms.vercel.app/api/business/promos?limit=100"
        );
        const data = await res.json();

        if (data) {
          setPromos(data.data);
        }
      } catch (err) {
        console.error("error");
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
