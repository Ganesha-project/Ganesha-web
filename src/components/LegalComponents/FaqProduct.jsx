import Image from 'next/image'
import explain from '../../public/BG/faq.png'
import { FaInfoCircle } from "react-icons/fa";

export const FaqProduct = () => {
    return (
        <>
            <div className="m-10 flex-col lg:flex-row lg:m-32 flex gap-3 justify-center">
                <div className='flex justify-center'>
                    <Image
                        src={explain}
                        className='w-[80vw] lg:w-[40vw] h-fit'
                    />
                </div>

                {/* Accordion */}
                <div
                    id="accordion-collapse"
                    data-accordion="collapse"
                    data-active-classes="bg-slate-300 text-white"
                    className='flex flex-col justify-center w-[80vw] md:w-[50vw] lg:w-[40vw]'
                >
                    <h1 className='mb-3 font-extrabold text-4xl lg:text-6xl bg-slate-300 p-2 rounded-[40px] text-center'>Taukah Kamu ?</h1>

                    {/* Accordion Items */}
                    {/* Item 1 */}
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            className="mb-3 flex bg-slate-500 items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-slate-500 focus:ring-slate-200 hover:bg-slate-400 gap-3"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl">Firma Hukum Adalah...</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className="hidden mt-[-11px] mb-3"
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-slate-500 border-gray-200">
                            <p className="mb-2 text-lg text-white">
                                Firma hukum adalah suatu badan hukum yang terdiri dari sekelompok pengacara atau advokat yang bekerja bersama dalam menyediakan layanan hukum. Biasanya, firma hukum ini berbentuk bisnis atau kemitraan yang bertujuan untuk memberikan pelayanan hukum kepada klien. Firma hukum dapat memiliki berbagai spesialisasi, seperti hukum bisnis, hukum perdata, hukum pidana, atau area hukum lainnya. Pengacara di firma hukum bekerja sama untuk menyediakan layanan hukum yang komprehensif dan memenuhi kebutuhan klien.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <h2 id="accordion-collapse-heading-2">
                        <button
                            className="mb-3 bg-slate-600 flex items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-slate-600 focus:ring-slate-200 hover:bg-slate-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-2"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">Yayasan Adalah...</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-2"
                        className="hidden mb-3 mt-[-11px]"
                        aria-labelledby="accordion-collapse-heading-2"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-slate-600 border-gray-200">
                            <p className="mb-2 text-lg text-white">
                                Yayasan merupakan badan hukum yang dibentuk untuk mencapai tujuan sosial, kemanusiaan, pendidikan, atau amal lainnya, tanpa keuntungan bagi pemilik atau pendirinya. Proses pendirian yayasan melibatkan penyusunan akta pendirian, pengajuan ke Kementerian Hukum dan Hak Asasi Manusia (Kemenkumham), dan mematuhi ketentuan hukum yang berlaku di wilayah tersebut. Yayasan biasanya didirikan oleh sekelompok orang yang memiliki niat untuk berkontribusi pada kebaikan masyarakat atau memajukan tujuan tertentu.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <h2 id="accordion-collapse-heading-3">
                        <button
                            className="mb-3 flex bg-slate-700 items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-slate-700 focus:ring-slate-200 hover:bg-slate-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-3"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">Perkumpulan atau Asosiasi Adalah...</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-3"
                        className="hidden mb-3 mt-[-11px]"
                        aria-labelledby="accordion-collapse-heading-3"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-slate-700 border-gray-200">
                            <p className="mb-2 text-lg text-white">
                                Perkumpulan atau asosiasi adalah organisasi yang dibentuk oleh sekelompok orang atau entitas dengan tujuan bersama seperti sosial, budaya, olahraga, atau tujuan lain yang sesuai dengan keinginan dan kepentingan anggota. Proses pendiriannya melibatkan penyusunan anggaran dasar, pengajuan ke Kementerian Hukum dan Hak Asasi Manusia (Kemenkumham), serta kepatuhan terhadap ketentuan hukum yang berlaku. Asosiasi atau perkumpulan seringkali didirikan oleh sekelompok orang yang ingin berkolaborasi untuk mencapai tujuan bersama atau mempromosikan kepentingan tertentu.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <h2 id="accordion-collapse-heading-4">
                        <button
                            className=" bg-slate-800 flex items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-slate-800 focus:ring-slate-200 hover:bg-slate-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-4"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-4"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">Virtual Office ( VO ) Adalah...</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-4"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-4"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-slate-800 border-gray-200">
                            <p className="mb-2 text-lg text-white">
                                Virtual Office adalah fasilitas penyewaan kantor secara virtual, dimana para penyewa hanya berhak memiliki alamat dari kantor tersebut dan mendapatkan fasilitas-fasilitas yang disediakan Virtual Office, tapi tidak memiliki ruangan khusus secara fisik di kantor tersebut dan tentunya kamu akan mendapatkan surat domisili untuk bisnismu, serta harganya yang sangat terjangkau.
                            </p>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <h2 id="accordion-collapse-heading-5">
                        <button
                            className="mt-3 bg-slate-900 flex items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-slate-900 focus:ring-slate-200 hover:bg-slate-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-5"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-5"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">PKP ( Pengusaha Kena Pajak ) Adalah...</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-5"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-5"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-slate-900 border-gray-200">
                            <p className="mb-2 text-lg text-white">
                                PKP adalah singkatan dari "Pengusaha Kena Pajak." Dalam konteks perpajakan di Indonesia, PKP merujuk kepada pengusaha atau badan usaha yang memiliki kewajiban untuk melakukan pemungutan dan penyetoran pajak pertambahan nilai (PPN) sesuai dengan peraturan perpajakan yang berlaku. PKP biasanya terlibat dalam kegiatan usaha yang mencapai batas omzet tertentu yaitu 4,8 M yang ditentukan oleh peraturan perpajakan. Sebagai contoh, toko retail besar atau perusahaan manufaktur yang mencapai batas omzet tertentu akan dianggap sebagai PKP. Mereka harus mengumpulkan dan menyetorkan pajak pertambahan nilai (PPN) sesuai dengan peraturan perpajakan yang berlaku.
                            </p>
                        </div>
                    </div>

                    {/* Item 6 */}
                    <h2 id="accordion-collapse-heading-6">
                        <button
                            className="mt-3 bg-slate-900 flex items-center justify-between w-full md:w-[40vw] p-5 font-medium rtl:text-right text-white border border-gray-200 rounded-[40px] focus:ring-4 focus:bg-slate-900 focus:ring-slate-200 hover:bg-slate-500 gap-3"
                            data-accordion-target="#accordion-collapse-body-6"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-6"
                        >
                            <div className="flex items-center gap-2">
                                <FaInfoCircle color='white' size={20} />
                                <span className="font-bold text-white lg:text-2xl text-xl text-left">NIB ( Nomor Induk Berusaha ) Adalah...</span>
                            </div>
                            <svg
                                data-accordion-icon=""
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-6"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-6"
                    >
                        <div className="p-5 border w-full md:w-[40vw] rounded-[40px] bg-slate-900 border-gray-200">
                            <p className="mb-2 text-lg text-white">
                            NIB adalah singkatan dari Nomor Induk Berusaha, yang merupakan identifikasi resmi yang diberikan pemerintah kepada perusahaan atau usaha di Indonesia. NIB diperlukan sebagai bagian dari upaya pemerintah Indonesia untuk menyederhanakan proses perizinan dan memudahkan kegiatan berusaha.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Accordion */}
            </div>


        </>
    )
}