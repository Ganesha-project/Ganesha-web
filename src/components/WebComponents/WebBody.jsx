import Image from "next/image"

export const metadata = {
    title: "Pentingnya Sebuah Website Untuk Perusahaan - Ganesha Consulting",
    description: "Pentingnya sebuah website untuk perusahaan tidak dapat diabaikan dalam era digital saat ini. Dengan website, perusahaan dapat meningkatkan eksposur global, aksesibilitas sepanjang waktu, dan kredibilitas. Temukan solusi pembuatan website profesional dengan Ganesha Consulting.",
    keywords: "website perusahaan, pentingnya website, keberhasilan perusahaan, eksposur global, Ganesha Consulting, solusi website",
    image: "/BG/webitem.jpg", // Path ke gambar konten
    url: "https://www.ganeshaconsulting.co.id/webpage", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/webpage",
        title: "Pentingnya Sebuah Website Untuk Perusahaan - Ganesha Consulting",
        description: "Pentingnya sebuah website untuk perusahaan tidak dapat diabaikan dalam era digital saat ini. Dengan website, perusahaan dapat meningkatkan eksposur global, aksesibilitas sepanjang waktu, dan kredibilitas. Temukan solusi pembuatan website profesional dengan Ganesha Consulting.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/webitem.jpg",
            alt: "Ganesha Consulting - Pentingnya Sebuah Website Untuk Perusahaan"
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


export const WebBody = () => {
    return (
        <>
            <section className="md:mx-24 2xl:mx-80 mx-5 md:py-20 py-10">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="p-5 rounded-[35px] md:w-[30lvw] md:h-[30lvw] 2xl:h-[25lvw] bg-[#EAF3FA] transition-transform duration-500 hover:rotate-y-180 hover:scale-95 hover:shadow-mainShadow">
                        <Image
                            width={100}
                            height={100}
                            className="w-full h-auto object-cover"
                            src={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236555/GaneshaAssets/b3heoxyhmsk4uaersp4j.svg'}
                            alt="image web"
                        />
                    </div>
                    <div className="p-5 rounded-[35px] md:w-[30lvw] md:h-[30lvw] 2xl:h-[25lvw] bg-radial from-sky-200 to-white dark:from-sky-950 dark:to-darkColor flex items-center justify-center transition-transform duration-500 hover:scale-95 hover:shadow-mainShadow">
                        <div className="flex flex-col justify-evenly text-2xl md:text-5xl font-bold w-full md:w-fit h-full rounded-md lg:text-left md:text-right tracking-wider">
                            <p>
                                Pentingnya
                            </p>
                            <p className="bg-gradient-to-tr dark:from-neutral-100 from-neutral-800 dark:via-neutral-300 via-neutral-600 to-sky-500 dark:to-sky-300 bg-clip-text text-transparent">
                                Website
                            </p>
                            <p>
                                Untuk
                            </p>
                            <p>
                                Perusahaan!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-5 rounded-[35px] md:w-[30lvw] 2xl:h-[25lvw] md:h-[30lvw] bg-radial from-white to-neutral-50 dark:from-black dark:to-darkColor transition-transform duration-500 hover:scale-95 hover:shadow-mainShadow">
                        <p className="flex items-center justify-center text-justify text-xl leading-relaxed tracking-wide md:text-justify h-full bg-gradient-to-tr dark:from-neutral-100 from-neutral-800 dark:via-neutral-300 via-neutral-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent">
                            Website adalah kunci keberhasilan perusahaan dalam era digital, memberikan eksposur global, aksesibilitas sepanjang waktu, dan meningkatkan kredibilitas. Sebagai platform informasi dan interaksi, website mendukung pertumbuhan bisnis, memperluas pasar, dan membangun brand awareness secara efektif.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}