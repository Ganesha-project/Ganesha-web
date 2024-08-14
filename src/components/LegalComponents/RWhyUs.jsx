
import { DataPageLegal } from "@/app/Database";

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
            <section className="md:px-24 px-5 my-20">
                <div className={`bg-${color}-200 space-y-5 dark:bg-opacity-25 p-6 md:p-10 rounded-[40px] `}>
                    <h1 className={`bg-${color}-500 text-transparent bg-clip-text text-2xl md:text-4xl font-black leading-relaxed tracking-tight text-center md:text-left`}>
                        Kelebihan di <span className="text-mainColor dark:text-secondaryColor">Ganesha Consulting</span> dibanding tempat lain
                    </h1>
                    <div className="flex md:flex-row flex-col gap-5">
                        {DataPageLegal.whyUsData.map((el, idx) => (
                            <div key={idx} className={`bg-${color}-500 flex flex-col gap-3 items-center p-5 dark:bg-opacity-50 rounded-3xl md:w-[20%]`}>
                                <span className={`text-white text-5xl h-12`}>
                                    {el.icon}
                                </span>
                                <h1 className="text-xl text-white text-center font-bold">
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