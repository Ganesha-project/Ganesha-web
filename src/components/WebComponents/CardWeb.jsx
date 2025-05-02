import check from '../../public/IMG/IconVector/checkgreen.png'
import cross from '../../public/IMG/IconVector/crossred.png'
import Image from 'next/image'

export const metadata = {
    title: "Paket Pembuatan Website - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan berbagai paket pembuatan website dengan beragam fitur dan harga terjangkau. Dapatkan website dengan desain premium, SEO friendly, dan dukungan teknis seumur hidup.",
    keywords: "paket website, pembuatan website, jasa pembuatan website, Ganesha Consulting, desain website, SEO friendly",
    image: "/IMG/IconVector/web.png", // Path ke gambar banner
    url: "https://www.ganeshaconsulting.com/webpage", // URL halaman Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.com/webpage",
        title: "Paket Pembuatan Website - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan berbagai paket pembuatan website dengan beragam fitur dan harga terjangkau. Dapatkan website dengan desain premium, SEO friendly, dan dukungan teknis seumur hidup.",
        image: {
            url: "https://www.ganeshaconsulting.com/IMG/IconVector/web.png",
            alt: "Ganesha Consulting - Paket Pembuatan Website"
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
        url: "https://www.ganeshaconsulting.com/",
        logo: "https://www.ganeshaconsulting.com/logo.png",
        sameAs: [
            "https://www.facebook.com/ganeshaconsulting",
            "https://twitter.com/ganeshaconsult",
            "https://www.linkedin.com/company/ganeshaconsulting"
        ]
    }
};


export const CardWeb = ({ data }) => {

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
            <div id='web' />
            <div className='m-10 lg:m-32 flex items-center justify-center'>
                <h1 className='font-extrabold text-3xl lg:text-5xl text-center uppercase text-white bg-sky-500 rounded-full p-10'>Paket Website Company</h1>
            </div>

            <div className="m-10 lg:m-32 flex flex-wrap justify-center gap-7">
                {data.packages.map((el) => (
                    <div key={el.type} className="max-w-sm p-6 bg-gradient-to-b from-sky-100 to-sky-200 rounded-[40px] hover:bg-gradient-to-t hover:from-sky-100 hover:to-sky-200 mb-4 md:mb-0">
                        <div href="#" className="max-w-sm flex flex-col justify-between h-full">
                            <div className='flex justify-center'>
                                <h5 className="text-sky-600 mt-2 uppercase text-center text-3xl font-bold tracking-tight">
                                    {el.type}
                                </h5>
                            </div>
                            <p className="mt-10 text-center line-through text-lg text-indigo-600">
                                {el.priceOriginal === 0 ? null : formatToRupiah(el.priceOriginal)}
                            </p>
                            <div className='mt-2 mb-2 flex justify-center'>
                                <p className="uppercase text-center font-bold text-red-600 text-xl outline-2 border border-red-500 w-fit px-2 rounded-full">
                                {el.discount === 0 ? null : `Discount ${el.discount}%`}
                                    
                                    
                                </p>
                            </div>
                            <p className="text-center font-bold text-sky-800 text-3xl">
                            {el.price === 0 ? ("Talk With Us!") : formatToRupiah(el.price)}

                            </p>
                            <div className="mt-3 flex justify-center">
                                <a
                                    href={el.link}
                                    className="text-white font-extrabold w-full md:w-full bg-gradient-to-br from-sky-600 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    Konsultasi Sekarang
                                </a>
                            </div>
                            <div className='mt-4'>
                                {el.features.map((feature) => (
                                    <div className='flex gap-3 align-middle items-center'>
                                        <Image className='w-5 h-5 ' src={feature.status === true ? check : cross} alt="checklist" />
                                        <p className="font-normal text-neutral-900">
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