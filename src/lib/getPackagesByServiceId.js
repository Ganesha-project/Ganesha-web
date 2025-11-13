import { formattedPackages } from "@/helper/formattedPackages";

export async function getPackagesByServiceId(serviceId) {
  try {
    const res = await fetch(
      `https://ganesha-cms.vercel.app/api/packages?serviceId=${serviceId}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (data?.data && Array.isArray(data.data)) {
      // Sort: highlight true first, then by price ascending (0 last)
        const result  = await formattedPackages(data.data)
        return result
    }
    return [];
  } catch (err) {
    console.error("Error fetching website packages:", err.message);
    return [];
  }
}
