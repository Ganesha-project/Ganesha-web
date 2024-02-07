import check from '../../public/IMG/IconVector/checkgreen.png'
import cross from '../../public/IMG/IconVector/crossred.png'
import Image from 'next/image'

export const metadata = {
    title: "Pendirian PT - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan layanan pendirian PT tanpa ribet. Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang!",
    keywords: "pendirian PT, pembangunan PT, Ganesha Consulting, layanan PT, konsultasi bisnis",
    image: "/BG/VectorPT.png", // Path ke gambar terkait pendirian PT
    url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/pendirian-pt", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/all-products/legalitas/pendirian-pt",
        title: "Pendirian PT - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan layanan pendirian PT tanpa ribet. Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/VectorPT.png",
            alt: "Ganesha Consulting - Pendirian PT"
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


export const CardPricePt = ({ data }) => {

    const formatToRupiah = (amount) => {
        if (typeof amount !== 'number') {
            return 'Invalid Input';
        }

        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <>
            <div id='packages' />
            <div id='legal' />
            <div className='m-10 lg:m-32 flex items-center justify-center'>
                <h1 className='font-extrabold text-3xl lg:text-5xl text-center uppercase text-white bg-cyan-500 rounded-full p-10'>Paket Pendirian PT</h1>
            </div>

            <div className="m-10 lg:m-32 flex flex-wrap justify-center gap-7">
                {data.packages.map((el) => (
                    <div key={el.type} className="max-w-sm p-6 bg-gradient-to-b from-cyan-100 to-cyan-200 rounded-[40px] hover:bg-gradient-to-t hover:from-cyan-100 hover:to-cyan-200 mb-4 md:mb-0">
                        <div href="#" className="max-w-sm">
                            <div className='flex justify-center'>
                                <h5 className="text-cyan-600 mt-2 uppercase text-center text-3xl font-bold tracking-tight">
                                    {el.type}
                                </h5>
                            </div>
                            <p className="mt-10 text-center line-through text-lg text-red-600">
                                {formatToRupiah(el.priceOriginal)}
                            </p>
                            <div className='mt-2 mb-2 flex justify-center'>
                                <p className="uppercase text-center font-bold text-red-600 text-xl outline-2 border border-red-500 w-fit px-2 rounded-full">
                                    Discount {el.discount}%
                                </p>
                            </div>
                            <p className="text-center font-bold text-cyan-800 text-3xl">
                                {formatToRupiah(el.price)}
                            </p>
                            <div className="mt-3 flex justify-center">
                                <a
                                    href={el.link}
                                    className="text-white font-extrabold w-full md:w-full bg-gradient-to-br from-cyan-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    Konsultasi Sekarang
                                </a>
                            </div>
                            <div className='mt-4'>
                                {el.features.map((feature) => (
                                    <div className='flex gap-3 align-middle items-center'>
                                        <Image className='w-5 h-5 ' src={feature.status === true ? check : cross} alt="checklist" />
                                        <p className="font-normal text-gray-900">
                                            {feature.feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}