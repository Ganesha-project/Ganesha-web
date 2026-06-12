import { formattedPackages } from "@/helper/formattedPackages";

function formatFallbackPackages(packages) {
  return formattedPackages(Array.isArray(packages) ? packages : []);
}

export async function getPackagesByServiceId(serviceId, fallbackPackages = []) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/business/packages?serviceId=${serviceId}&limit=100`,
      {
        next: {
          revalidate: 3600,
          tags: ["packages", `packages:${serviceId}`],
        },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
      // Sort: highlight true first, then by price ascending (0 last)
      const result = formattedPackages(data.data);
      return result;
    }
    return formatFallbackPackages(fallbackPackages);
  } catch (err) {
    console.error("Error fetching website packages:", err.message);
    return formatFallbackPackages(fallbackPackages);
  }
}
