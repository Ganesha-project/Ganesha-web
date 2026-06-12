const WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting";

export function createConsultationPackages(groups) {
  if (!Array.isArray(groups)) return [];

  return groups.flatMap((group) =>
    (group.products || []).map((product, index) => ({
      type: product.name,
      highlight: index === 0,
      price: 0,
      priceOriginal: 0,
      discount: 0,
      link: WHATSAPP_LINK,
      features: [
        {
          feature:
            product.description ||
            product.descriptions ||
            product.Descriptions ||
            "Konsultasikan kebutuhan layanan Anda bersama tim kami.",
          status: true,
        },
      ],
      requirements: [],
    }))
  );
}
