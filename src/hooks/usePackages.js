"use client"

import React, { useEffect, useState } from "react";

export const usePackages = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    

    fetchPackages();
  }, []);

  return {
    packages,
    loading,
    error
  };
};