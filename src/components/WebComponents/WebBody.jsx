import Image from "next/image"
import webitem from "../../public/BG/webitem.jpg"

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
            <div className="m-10">
                <div className="w-full min-h-fit bg-white p-5 md:p-10 lg:p-32 flex flex-col md:flex-row items-center">
                    <Image
                        width={600}
                        height={50}
                        className="self-end object-cover w-full lg:w-fit md:w-[70%] rounded-md"
                        src={webitem}
                        alt="image web"
                    />
                    <div className="bg-sky-100 p-5 rounded-[40px] md:ml-10 flex-grow">
                        <h1 className="text-2xl md:text-5xl font-bold w-full md:w-fit h-fit rounded-md lg:text-left md:text-right">
                            Pentingnya Sebuah Website Untuk Perusahaan!
                        </h1>
                        <p className="mt-5 text-justify text-xl leading-relaxed tracking-wide md:text-justify">
                            Website adalah kunci keberhasilan perusahaan dalam era digital, memberikan eksposur global, aksesibilitas sepanjang waktu, dan meningkatkan kredibilitas. Sebagai platform informasi dan interaksi, website mendukung pertumbuhan bisnis, memperluas pasar, dan membangun brand awareness secara efektif.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}