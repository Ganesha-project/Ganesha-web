import Image from 'next/image'
import socmed from '../public/BG/socmed.png'
import web from '../public/BG/web.png'
import tax from '../public/BG/tax.png'
import legal from '../public/BG/law.png'
import { BiCamera } from 'react-icons/bi'

export const CardProduct = () => {
    return (
        <>
            <div className="z-40 absolute top-1/2 left-1/3 ml-10 transform -translate-x-[65%] -translate-y-1/2" >
                <h1 className="mb-5 text-gray-800 w-[50vw] font-extrabold text-6xl lg:text-9xl">Produk & Layanan <span className="bg-[#77297d00] rounded-xl" >Kami</span></h1>
                <div className='lg:w-[50vw]'>
                    <a
                        href='#web'
                        className='w-fit'>
                        <span className='mb-3 bg-sky-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Website Development</span>
                    </a>
                </div>
                <div className='my-7 lg:w-[50vw]'>
                    <a
                        href='#socmed'
                        className='w-fit'>
                        <span className='mb-3 bg-violet-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Social Media Management</span>
                    </a>
                </div>
                <div className='lg:w-[50vw]'>
                    <a
                        href='#legal'
                        className='w-fit'>
                        <span className='mb-3 bg-teal-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Jasa Legalitas Bisnis</span>
                    </a>
                </div>


            </div>

            <div id='web' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="max-w-lg w-[80vw] lg:w-[420px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={web}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow">
                    <a href="/all-products/web">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text lg:text-left bg-[#68BDE7] text-5xl font-bold py-3">
                            Website Development
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#cdecfc] font-normal text-xl text-gray-800">
                        Optimalkan image digital perusahaan Anda dengan layanan Jasa Pembuatan Website kami. Desain yang aesthetic, fungsionalitas yang efektif, dan pengalaman pengguna yang menarik, semuanya terdapat dalam satu paket. Bersama kami, hadirkan daya tarik dan kekuatan untuk memperluas jangkauan bisnis Anda.
                    </p>
                    <a
                        href="/all-products/web"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#68BDE7] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='socmed' />

            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="max-w-lg w-[80vw] lg:w-[420px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={socmed}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow">
                    <a href="/all-products/sosmed">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#A88BFA] text-5xl text-left font-bold py-3">
                            Social Media Management
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#ece6ff] font-normal text-xl text-gray-800">
                        Social Media Management merupakan salah satu aspek pendukung yang sangat penting bagi suatu Perusahaan di-Era Digital sekarang ini. Selain penting untuk meningkatkan visibilitas dan kredibilitas Perusahaan, aspek yang satu ini juga berperan penting untuk berinteraksi degan client serta meningkatkan kesadaran merek, sehingga sangat berpengaruh atas keputusan client dalam menjalin kerjasama dengan Perusahaan.
                    </p>
                    <a
                        href="/all-products/sosmed"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#A88BFA] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='legal' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="max-w-lg w-[80vw] lg:w-[420px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={legal}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow">
                    <a href="/all-products/legalitas">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#19B49D] text-5xl text-left font-bold py-3">
                            Legalitas Bisinis
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#e8fffc] font-normal text-xl text-gray-800">
                        Kami hadir bersama Konsultan yang profesional untuk memberikan pelayanan Legalitas terbaik  yang akan memastikan Bisnis mu sesuai dengan aturan hukum yang berlaku di Indonesia, Legalkan Bisnis Mu Bersama Ganesha Consulting!
                    </p>
                    <a
                        href="/all-products/legalitas"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#19B49D] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='Pajak' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="max-w-lg w-[80vw] lg:w-[420px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={tax}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow">
                    <a href="/all-products/legalitas">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#83514D] text-5xl text-left font-bold py-3">
                            Konsultan Pajak
                        </h5>
                    </a>
                    <p className="mb-5 min-w-full lg:min-w-[53vw] p-7 w-max flex-grow text-justify rounded-[30px] bg-[#F1E5DC] font-normal text-xl text-gray-800">
                        Coming Soon!
                    </p>
                    <a
                        href="#legal"
                        className="cursor-not-allowed w-full disabled font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#83514D] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>

            </div>

        </>
    )
}