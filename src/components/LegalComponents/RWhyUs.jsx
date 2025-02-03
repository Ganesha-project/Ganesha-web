import { DataPageLegal } from "../../../public/Data/LegalitasData";


export const metadata = {
    title: "Kelebihan Ganesha Consulting - Solusi Terbaik untuk Bisnis Anda",
    description: "Temukan kelebihan Ganesha Consulting dibandingkan tempat lain. Kami menawarkan harga ekonomis, proses super cepat, layanan anti ribet, kreatif & inovatif, serta ditangani oleh profesional.",
    keywords: "kelebihan Ganesha Consulting, harga ekonomis, proses super cepat, layanan anti ribet, kreatif & inovatif, ditangani oleh profesional",
    image: "/IMG/IconVector/checkgreen.png", // Path ke gambar terkait kelebihan Ganesha Consulting
    url: "https://www.ganeshaconsulting.co.id/kelebihan-ganesha-consulting", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/kelebihan-ganesha-consulting",
        title: "Kelebihan Ganesha Consulting - Solusi Terbaik untuk Bisnis Anda",
        description: "Temukan kelebihan Ganesha Consulting dibandingkan tempat lain. Kami menawarkan harga ekonomis, proses super cepat, layanan anti ribet, kreatif & inovatif, serta ditangani oleh profesional.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/IMG/IconVector/checkgreen.png",
            alt: "Ganesha Consulting - Kelebihan Ganesha Consulting"
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


export const RWhyUs = ({ color }) => {
    return (
        <>
            <section className="md:px-24 2xl:px-80 px-5 my-20">
                <div className={`bg-gradient-to-b dark:from-darkColor dark:to-black from-gray-200 to-white space-y-10 dark:bg-opacity-25 p-6 md:p-10 rounded-[40px] `}>
                    <h1 className={`text-2xl md:text-4xl font-black leading-relaxed tracking-tight text-center md:text-left`}>
                        Kelebihan di <span className="bg-gradient-to-br dark:from-white dark:via-baseColor dark:to-mainColor from-gray-800 via-mainColor to-baseColor bg-clip-text text-transparent">Ganesha Consulting</span> dibanding tempat lain
                    </h1>
                    <div className="flex md:flex-row flex-col gap-5">
                        {DataPageLegal.whyUsData.map((el, idx) => (
                            <div key={idx} className={`bg-gradient-to-bl h-[30lvh] dark:from-darkColor dark:to-transparent from-gray-200 to-transparent flex flex-col gap-3 items-center pt-10 px-5 rounded-3xl md:w-[20%]`}>
                                <span className={`dark:text-white text-5xl h-[10lvh]`}>
                                    {el.icon}
                                </span>
                                <h1 className="text-xl bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent text-center font-bold">
                                    {el.text}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}