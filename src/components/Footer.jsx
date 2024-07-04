import Image from 'next/image'
import logo from '../public/IMG/logos.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { TbBuildingBank, TbMailFilled } from 'react-icons/tb'

export const Footer = () => {
    const mailLink = "mailto:email@domain.com?subject=Konsultasi%20Ganesha%20Consulting&body=Halo%20kak%20saya%20mau%20konsultasi%20nih"
    const waLink = "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
    const igLink = "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    const fbLink = "https://www.facebook.com/profile.php?id=61555739807086"
    const linkedin = "https://www.linkedin.com/in/ganesha-multi-konsultan-4991412b2/"

    return (
        <>
            <>
                {/* Footer container */}
                <footer className="bg-neutral-100 text-center text-neutral-600 lg:text-left">
                    {/* Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
                    <div className="mx-6 pt-8 text-center md:text-left">
                        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* TW elements section */}
                            <div className="bg-slate-200 p-5 rounded-[40px]">
                                <h6 className="mb-4 gap-2 flex items-center justify-center font-semibold uppercase md:justify-start">
                                    <span className='flex justify-center items-center'><TbBuildingBank /></span>
                                    PT Ganesha Multi Kreatif
                                </h6>

                                <p className="">
                                    Menara Cakrawala 12th Floor Unit 5A, Jalan M.H. Thamrin,
                                    Desa/Kelurahan Kebon Sirih, Kec. Menteng, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta,
                                    Kode Pos: 10340
                                </p>
                            </div>
                            {/* Products section */}
                            <div className="bg-slate-200 p-5 rounded-[40px]">
                                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Produk Dan Jasa
                                </h6>
                                <p className="mb-4">
                                    <a href="/all-products/sosmed" className="text-neutral-600">
                                        Social Media Management
                                    </a>
                                </p>
                                <p className="mb-4">
                                    <a href="/all-products/web" className="text-neutral-600">
                                        Website Development
                                    </a>
                                </p>
                                <p className="mb-4">
                                    <a href="/all-products/legalitas" className="text-neutral-600">
                                        Legalitas Bisnis
                                    </a>
                                </p>
                                <p>
                                    <a href="all-products/legalitas/badan-usaha" className="text-neutral-600">
                                        Badan Usaha Lainnya
                                    </a>
                                </p>
                            </div>
                            {/* Useful links section */}
                            <div className="bg-slate-200 p-5 rounded-[40px]">
                                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Social Media Kami
                                </h6>
                                <p className="mb-4">
                                    <a href={igLink} className="flex gap-2 lg:justify-start justify-center text-neutral-600">
                                        <span className='flex justify-center items-center'><FaInstagram /></span>Instagram
                                    </a>
                                </p>
                                <p className="mb-4">
                                    <a href={fbLink} className="flex gap-2 lg:justify-start justify-center text-neutral-600">
                                        <span className='flex justify-center items-center'><FaFacebook /></span>Facebook
                                    </a>
                                </p>
                                <p className="mb-4">
                                    <a href={linkedin} className="flex gap-2 lg:justify-start justify-center text-neutral-600">
                                        <span className='flex justify-center items-center'><FaLinkedin /></span>LinkedIn
                                    </a>
                                </p>
                                <p>
                                    <a href={waLink} className="flex gap-2 lg:justify-start justify-center text-neutral-600">
                                        <span className='flex justify-center items-center'><FaWhatsapp /></span>WhatsApp
                                    </a>
                                </p>
                            </div>
                            {/* Contact section */}
                            <div className='bg-slate-200 p-5 rounded-[40px]'>
                                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Contact
                                </h6>
                                {/* <p className="mb-4 flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                    New York, NY 10012, US
                                </p> */}
                                <p className="mb-4 gap-2 flex items-center justify-center md:justify-start">
                                    <span className='flex justify-center items-center'><TbMailFilled /></span>
                                    ganeshamultikreatif@gmail.com
                                </p>
                                <p className="mb-4 gap-2 flex items-center justify-center md:justify-start">
                                    <span className='flex justify-center items-center'><BiSolidPhoneCall /></span>

                                    + 62 888 712 7000
                                </p>
                                <div className="text-right object-right flex justify-center lg:justify-end">
                                    <div className="bg-[#772a7d31] w-full flex justify-center lg:w-fit p-5 rounded-[40px]">
                                        <a
                                            className="font-semibold text-neutral-600 "
                                            href="/"
                                        >
                                            <span className=''>
                                                <Image
                                                    src={logo}
                                                    className="lg:w-[7vw] w-[50vw] h-auto"
                                                    alt="Ganesha Logo"
                                                /> </span>
                                        </a>
                                    </div>
                                </div>
                                {/* <p className="flex items-center justify-center md:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    + 01 234 567 89
                                </p> */}
                            </div>
                        </div>
                    </div>
                    {/*Copyright section*/}

                    <div className="bg-neutral-100 p-6 text-right object-right flex justify-center lg:justify-center">
                        <div className="bg-slate-200 w-full p-5 rounded-[40px] flex justify-center items-center h-fit self-end">
                            <span>© 2024 Copyright:{' '}</span>
                            <a
                                className="font-semibold text-neutral-600"
                                href="/"
                            >
                                 Ganesha Consulting
                            </a>
                        </div>
                    </div>

                </footer>
            </>
        </>
    )
}