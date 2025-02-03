import Image from "next/image";

export const metadata = {
    title: "Solusi Pembuatan Website Profesional - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan solusi pembuatan website profesional untuk meningkatkan presensi digital perusahaan Anda. Dengan desain kreatif, fitur lengkap, dan kemudahan penggunaan, buat perusahaan Anda terlihat profesional dan menarik dengan website modern.",
    keywords: "pembuatan website, desain website, solusi website, Ganesha Consulting, website profesional, website modern",
    image: "/IMG/IconVector/web.png", // Path ke gambar banner
    url: "https://www.ganeshaconsulting.co.id/all-products/web", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/web",
        title: "Solusi Pembuatan Website Profesional - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan solusi pembuatan website profesional untuk meningkatkan presensi digital perusahaan Anda. Dengan desain kreatif, fitur lengkap, dan kemudahan penggunaan, buat perusahaan Anda terlihat profesional dan menarik dengan website modern.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/IMG/IconVector/web.png",
            alt: "Ganesha Consulting - Solusi Pembuatan Website Profesional"
        }
    },
    // Twitter metadata untuk berbagi di Twitter
    twitter: {
        handle: "@ganeshaconsult",
        site: "@ganeshaconsult",
        cardType: "summary_large_image",
    },
    // Structured data untuk membantu mesin pencari memahami konten halaman
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/logo.png",
        sameAs: [
            "https://www.facebook.com/ganeshaconsulting",
            "https://twitter.com/ganeshaconsult",
            "https://www.linkedin.com/company/ganeshaconsulting"
        ]
    }
};

export const Header = ({ data }) => {
    return (
        <>
            <section className="md:mx-24 2xl:mx-80 mx-5">
                <div className="flex md:flex-row flex-col gap-5 p-5 rounded-[40px] bg-gray-200 dark:bg-darkColor md:h-[80lvh] 2xl:h-[70lvh]">
                    <div className="relative flex flex-col justify-between md:w-[50%] bg-darkColor rounded-[35px] overflow-hidden duration-300 ease-in-out hover:scale-105 hover:shadow-mainShadow">
                        <Image
                            width={500}
                            height={500}
                            className="rounded-[35px] w-full h-[60lvh] md:h-full object-cover brightness-90"
                            src={data.img}
                            alt={data.heading} />
                        <div className="absolute inset-5 z-20">
                            <h1 className="text-2xl md:text-3xl font-semibold text-white">
                                {data.heading}
                            </h1>
                        </div>
                        <div className="w-full h-[50%] bg-gradient-to-b from-[#00000087] to-transparent absolute top-0"></div>

                    </div>
                    <div className="flex flex-col md:w-[50%] md:grid md:grid-cols-2 gap-5">
                        {data.features.map((el, idx) => (
                            <div key={idx} className={`rounded-[35px] p-5 flex items-center justify-center flex-col gap-10  bg-gradient-to-b dark:from-black from-gray-50 to-transparent duration-300 ease-in-out hover:scale-105 hover:shadow-mainShadow`}>
                                <div className="text-4xl md:text-6xl">
                                    {el.icon}
                                </div>
                                <h1 className="font-bold text-xl md:text-3xl bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent text-center">
                                    {el.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}