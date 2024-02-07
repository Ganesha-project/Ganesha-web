import { TbCategoryFilled } from "react-icons/tb";
import { GiSparkles } from "react-icons/gi";
import { SiSimplenote } from "react-icons/si";
import { TbListCheck } from "react-icons/tb";

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
            <div className='lg:m-32 m-10 flex flex-col md:flex-row py-20 px-6 md:px-20 gap-6'>
                <div className='flex flex-col gap-6'>
                    <div
                        className=" lg: flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-400 rounded-full hover:bg-sky-500"
                    >
                        <TbCategoryFilled
                            color='white'
                            size={50}
                        />
                        <h5 className="text-2xl font-bold text-center tracking-tight text-white">

                            Kreatif dan Efektif
                        </h5>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-500 rounded-[40px] hover:bg-sky-500"
                    >
                        <GiSparkles
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Desain Professional
                        </h5>
                    </div>
                </div>
                <div className='order-first lg:order-none p-5 flex bg-sky-400 rounded-[40px] justify-center items-center w-full md:w-auto'>
                    <h1 className="text-white text-3xl lg:text-6xl font-extrabold capitalize font-poppins text-center md:text-left">

                        Buat Perusahaan Anda Terlihat
                        <span className='bg-[#8bfffb] text-transparent bg-clip-text rounded-2xl'> Proffesional</span> dan
                        <span className='bg-yellow-300 text-transparent bg-clip-text rounded-2xl'> Menarik</span> dengan website yang
                        <span className='bg-red-300 text-transparent bg-clip-text rounded-2xl'> Modern</span>
                    </h1>
                </div>
                <div className='flex flex-col gap-6'>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-500 rounded-[40px] hover:bg-sky-500"
                    >
                        <TbListCheck
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Fitur Lengkap
                        </h5>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-500 rounded-full hover:bg-sky-500"
                    >
                        <SiSimplenote
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Efisien dan Mudah
                        </h5>
                    </div>
                </div>

            </div>
        </>
    )
}