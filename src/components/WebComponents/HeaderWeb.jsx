import { dataPageWeb } from "@/app/Database";
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

export const HeaderWeb = () => {
    return (
        <>
            <section className="md:mx-24 mx-5">
                <div className="flex md:flex-row flex-col gap-5 p-5 rounded-[40px] bg-gradient-to-b dark:from-[#212121] from-gray-200 to-transparent">
                    <div className="relative flex flex-col justify-between md:w-[50%] bg-darkColor rounded-[35px] overflow-hidden duration-300 ease-in-out hover:scale-105 hover:shadow-mainShadow">
                        <img
                            className="rounded-[35px] w-full h-[60lvh] md:h-full object-cover brightness-90"
                            src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="computer coding" />
                        <div className="absolute inset-5 z-20">
                            <h1 className="text-2xl md:text-3xl font-semibold ">
                                {dataPageWeb.contentData.heading}
                            </h1>
                        </div>
                        <div className="w-full h-[50%] bg-gradient-to-b from-white dark:from-darkColor to-transparent absolute top-0"></div>

                    </div>
                    <div className="flex flex-col md:w-[50%] md:grid md:grid-cols-2 gap-5">
                        {dataPageWeb.contentData.features.map((el, idx) => (
                            <div key={idx} className="md:h-[20lvw] md:w-[20lvw] p-5 flex items-center justify-center flex-col gap-10 rounded-[35px] bg-gray-50 dark:bg-darkColor duration-300 ease-in-out hover:scale-105 hover:shadow-mainShadow">
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