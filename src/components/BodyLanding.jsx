import Link from "next/link";
import { DataBanner } from "@/app/Database";
import { Title } from "./Title";

export const metadata = {
    title: 'Ganesha Consulting - Jasa dan Produk Kami',
    description: 'Ganesha Consulting menawarkan berbagai layanan dan produk yang mencakup pengelolaan media sosial, pengembangan website, legalitas usaha, dan banyak lagi. Temukan solusi lengkap untuk kebutuhan bisnis Anda di Ganesha Consulting.',
    keywords: 'Ganesha Consulting, jasa dan produk, pengelolaan media sosial, pengembangan website, legalitas usaha, solusi bisnis, konsultasi 24 jam, terjamin dan terpercaya, pelayanan cepat, layanan lengkap',
    canonical: 'https://www.ganeshaconsulting.co.id',
    ogTitle: 'Ganesha Consulting - Jasa dan Produk Kami',
    ogDescription: 'Ganesha Consulting menawarkan berbagai layanan dan produk yang mencakup pengelolaan media sosial, pengembangan website, legalitas usaha, dan banyak lagi. Temukan solusi lengkap untuk kebutuhan bisnis Anda di Ganesha Consulting.',
    twitterTitle: 'Ganesha Consulting - Jasa dan Produk Kami',
    twitterDescription: 'Ganesha Consulting menawarkan berbagai layanan dan produk yang mencakup pengelolaan media sosial, pengembangan website, legalitas usaha, dan banyak lagi. Temukan solusi lengkap untuk kebutuhan bisnis Anda di Ganesha Consulting.',
};

export const BodyLanding = () => {
    return (
        <>
            <section className="md:my-24 my-5">
                <Title text={'Layanan Kami'} className={'md:mx-24 mx-5'} />
                <div className="carousel carousel-item gap-5 w-[100%] py-16">
                    {DataBanner.slice(0, 13).map((el, idx) => (
                        <Link
                            href={"/" + el.href}
                            key={idx} className={`carousel-item w-[75%] md:w-[30%] duration-300 ease-in-out hover:scale-[1.03] hover:origin-bottom  ${idx === 0 ? 'pl-5 md:pl-24' : ''} ${idx === DataBanner.length - 5 ? 'pr-5 md:pr-24' : ''}`}>
                            <div className={`${el.data.accent} flex h-[80lvh] flex-col gap-0 duration-300 ease-in-out hover:shadow-[0px_2px_35px_0px_#692d7991] dark:hover:shadow-[0px_2px_35px_0px_#a781a98a] rounded-3xl`}>
                                <img
                                    className={`grow object-contain p-10 rounded-t-3xl md:h-auto min-h-[50lvh]`}
                                    src={el.data.bannerImage}
                                    alt={el.data.mainText} />
                                <div className={`bg-white/20 dark:bg-black/20 p-5 rounded-b-3xl space-y-1`}>
                                    <h1 className={`${el.data.textAccent} brightness-95 dark:brightness-125 font-semibold text-xl md:text-2xl`}>
                                        {el.data.mainText}
                                    </h1>
                                    <p className="truncate-last-1 text-sm">
                                        {el.data.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            

            

          
        </>
    )
}