import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbWorldWww } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { FaBuildingWheat, FaUserGear, FaUserTie } from "react-icons/fa6";
import { Tb24Hours } from "react-icons/tb";
import { BiMath, BiMedal } from "react-icons/bi";
import { HiLightningBolt, HiReceiptTax } from "react-icons/hi";
import { RiAppsFill, RiFilePaper2Fill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { SiReadthedocs } from "react-icons/si";

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
            <div id="product" />
            <div className="mt-20 flex gap-5 justify-center ">
                <p className="text-2xl p-8 font-bold text-center mt-10 bg-[#82498C] text-white sm:p-10 lg:p-12 rounded-full lg:text-4xl md:text-3xl">Jasa dan Produk kami</p>
            </div>

            <div className="mt-5 m-10 lg:mt-10 mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:justify-center">
                <div>
                    <a href="/all-products/sosmed">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <HiMiniDevicePhoneMobile size={40} color='black' />
                            </span>Social Media Management
                        </p>
                    </a>
                </div>
                <div>
                    <a href="/all-products/web">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <TbWorldWww size={40} color='black' />
                            </span>Website Development
                        </p>
                    </a>
                </div>
            </div>


            <div className="mt-5 m-10 lg:mt-10 mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 justify-center">
                <div>
                    <a href="/all-products/legalitas">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <GoLaw
                                    size={40}
                                    color='black'
                                />
                            </span>Legalitas Usaha</p>
                    </a>
                </div>

                <div>
                    <a href="all-products/legalitas/badan-usaha">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <FaBuildingWheat
                                    size={40}
                                    color='black'
                                />
                            </span>Badan Usaha Lainnya</p>
                    </a>
                </div>
            </div>

            <div className="mt-5 m-10 lg:mt-10 mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 justify-center">
                <div>
                    <a href="/konsultan-pajak">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <HiReceiptTax
                                    size={40}
                                    color='black'
                                />
                            </span>Konsultan Pajak</p>
                    </a>
                </div>

                <div>
                    <a href="izin-tambahan">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <RiFilePaper2Fill
                                    size={40}
                                    color='black'
                                />
                            </span>Izin Tambahan</p>
                    </a>
                </div>
            </div>
            <div className="mt-5 m-10 lg:mt-10 mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 justify-center">
                <div>
                    <a href="pelayanan-manajemen">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <FaUserGear
                                    size={40}
                                    color='black'
                                />
                            </span>Pelayanan Managemen</p>
                    </a>
                </div>

                <div>
                    <a href="pelayanan-akuntansi">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <BiMath
                                    size={40}
                                    color='black'
                                />
                            </span>Pelayanan Akuntansi</p>
                    </a>
                </div>
            </div>

            <div className="mt-5 m-10 lg:mt-10 mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 justify-center">
                <div>
                    <a href="software-management-system">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <GrTechnology
                                    size={40}
                                    color='black'
                                />
                            </span>Software Management System</p>
                    </a>
                </div>

                <div>
                    <a href="haki">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <SiReadthedocs
                                    size={40}
                                    color='black'
                                />
                            </span>HAKI (Merek, Hak Cipta, Paten)</p>
                    </a>
                </div>
            </div>
            <div className="mt-5 m-10 lg:mt-10 mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 justify-center">
                <div>
                    <a href="audit">
                        <p className="flex w-full lg:w-[30vw] justify-center text-gray-800 items-center text-lg lg:text-xl gap-3 font-bold bg-[#d0aad6] p-5 lg:p-10 rounded-[40px] hover:bg-[#d7c6d9]">
                            <span>
                                <FaUserTie
                                    size={40}
                                    color='black'
                                />
                            </span>Audit</p>
                    </a>

                </div>
            </div>

            <div id="aboutus" />
            <div className="m-10 mt-10 md:mt-20 md:p-32 gap-5 flex flex-col sm:flex-row md:flex-col lg:flex-row">
                <p className="text-4xl md:text-7xl font-bold text-center md:text-right bg-[#82498C] md:self-end text-white p-5 md:p-10 rounded-[40px] mb-5 lg:self-end md:mb-0">
                    Tentang Kami
                </p>
                <p className="text-2xl md:text-2xl  font-medium h-full max-w-screen-xl bg-[#d0aad6] text-gray-800 rounded-[40px] leading-normal p-5 md:p-10 flex-grow">
                    Kami
                    <span className='font-bold'> Ganesha Multi Kreatif </span>
                    bukanlah sekedar perusahaan, kami adalah semangat anak muda yang mengedepankan kreativitas dan professionalitas. "Ganesha" merupakan simbol dari harapan dan keberuntungan, sementara "MULTI KREATIF" mencerminkan kemampuan serbaguna kami. Sebagai konsultan yang inovatif, kami menawarkan berbagai macam layanan diantaranya adalah desain grafis, pembuatan website, pengelolaan sosial media, konsultasi bisnis, dan layanan eksklusif lainnya. Kami berkomitmen untuk memberikan pelayanan yang cepat, berkualitas, dan kreatif, menjadikan kami destinasi satu atap untuk mejadi solusi kesuksesan bisnis Anda
                </p>
            </div>


            <div className="flex justify-center">
                <p className="text-3xl md:text-7xl w-full md:w-[70vw] bg-[#d0aad6] p-5 md:p-10 mx-10 sm:m-10 rounded-[40px] text-center font-bold mt-10">
                    Kenapa Harus di <span className='font-black text-[#82498C]'>Ganesha Consulting</span>?
                </p>
            </div>


            <div className="lg:mx-10 m-10 flex flex-wrap gap-7 justify-center">
                <div className="flex justify-center items-center flex-col gap-3 w-full max-w-lg p-6 bg-[#82498C] rounded-[40px]">
                    <Tb24Hours size={80} color="white" className="mb-3" />
                    <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                        Konsultasi 24 Jam!
                    </h5>
                    <h5 className="mb-0 text-lg tracking-tight text-center text-white">
                        Kami memberikan pelayanan konsultasi kepada Client 24 Jam, Admin kami yang fast response siap melayani segala kebutuhan anda!
                    </h5>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 w-full max-w-lg p-6 bg-[#82498C] rounded-[40px]">
                    <BiMedal size={80} color="white" className="mb-3" />
                    <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                        Terjamin dan Terpercaya
                    </h5>
                    <h5 className="mb-0 text-lg tracking-tight text-center text-white">
                        Kami berkomitmen untuk memberikan solusi yang efektif dan efisien untuk menjamin kesuksesan bisnis anda, selain itu kami juga berkomitmen untuk menjaga kerahasiaan data pribadi perusahaan Anda.
                    </h5>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 w-full max-w-lg p-6 bg-[#82498C] rounded-[40px]">
                    <HiLightningBolt size={80} color="white" className="mb-3" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white">
                        Pelayanan Cepat
                    </h5>
                    <h5 className="mb-0 text-lg tracking-tight text-center text-white">
                        Jaminan konsultasi kapanpun anda butuhkan, Admin kami yang FastResponse akan siap melayani anda!
                    </h5>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 w-full max-w-lg p-6 bg-[#82498C] rounded-[40px]">
                    <RiAppsFill size={80} color="white" className="mb-3" />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white">
                        Layanan Lengkap
                    </h5>
                    <h5 className="mb-0 text-lg tracking-tight text-center text-white">
                        Jaminan konsultasi kapanpun anda butuhkan, Admin kami yang FastResponse akan siap melayani anda!
                    </h5>
                </div>
            </div>


        </>
    )
}