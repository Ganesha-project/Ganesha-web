import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaBoltLightning } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";
import { IoLeaf } from "react-icons/io5";

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
            <div className={`bg-${color}-200 p-6 md:p-10 rounded-[40px] md:m-8 lg:m-32 m-12`}>
                <div>
                    <h1 className={`bg-${color}-500 text-transparent bg-clip-text text-4xl md:text-6xl font-black leading-relaxed tracking-tight text-center md:text-left`}>
                        Kelebihan di <span className="bg-[#772A7D] text-transparent bg-clip-text">Ganesha Consulting</span> dibanding tempat lain
                    </h1>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row mt-10 gap-4 justify-around items-center">
                    <div className={`bg-${color}-500 w-full md:w-[25vw] p-6 md:p-10 rounded-[40px] h-fit lg:h-[33vh]`}>
                        <div className="mb-4 flex justify-center">
                            <FaMoneyBill1Wave color="white" size={50} />
                        </div>
                        <p className="font-bold text-2xl md:text-3xl text-center text-white">
                            Harga Ekonomis
                        </p>
                    </div>
                    <div className={`bg-${color}-500 w-full md:w-[25vw] p-6 md:p-10 rounded-[40px] h-fit lg:h-[33vh]`}>
                        <div className="mb-4 flex justify-center">
                            <FaBoltLightning color="white" size={50} />
                        </div>
                        <p className="font-bold text-2xl md:text-3xl text-center text-white">
                            Proses Super Cepat
                        </p>
                    </div>
                    <div className={`bg-${color}-500 w-full md:w-[25vw] p-6 md:p-10 rounded-[40px] h-fit lg:h-[33vh]`}>
                        <div className="mb-4 flex justify-center">
                            <IoLeaf color="white" size={50} />
                        </div>
                        <p className="font-bold text-2xl md:text-3xl text-center text-white">
                            Anti Ribet
                        </p>
                    </div>
                    <div className={`bg-${color}-500 w-full md:w-[25vw] p-6 md:p-10 rounded-[40px] h-fit lg:h-[33vh]`}>
                        <div className="mb-4 flex justify-center">
                            <TbBulbFilled color="white" size={50} />
                        </div>
                        <p className="font-bold text-2xl md:text-3xl text-center text-white">
                            Kreatif & Inofatif
                        </p>
                    </div>
                    <div className={`bg-${color}-500 w-full md:w-[25vw] p-6 md:p-10 rounded-[40px] h-fit lg:h-[33vh]`}>
                        <div className="mb-4 flex justify-center">
                            <IoSparkles color="white" size={50} />
                        </div>
                        <p className="font-bold text-2xl md:text-3xl text-center text-white">
                            Ditangani Profesional
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}