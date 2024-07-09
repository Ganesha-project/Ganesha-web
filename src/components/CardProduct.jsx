import Image from 'next/image'
import socmed from '../public/BG/socmed.png'
import web from '../public/BG/web.png'
import tax from '../public/BG/tax.png'
import legal from '../public/BG/law.png'
import audit from '../public/BG/audit.jpg'
import pelmanajemen from '../public/BG/management.jpg'
import izin from '../public/BG/izin.jpg'
import akuntansi from '../public/BG/accounting.jpg'
import software from '../public/BG/software.jpg'
import haki from '../public/BG/patent.jpg'
import badanUsaha from '../public/BG/Yayasan.png'

export const CardProduct = () => {
    return (
        <>
            <div className="z-40 absolute top-1/2 left-1/3 ml-10 transform -translate-x-[65%] -translate-y-1/2" >
                <h1 className="mb-5 text-gray-800 dark:text-white w-[50vw] font-extrabold text-6xl lg:text-9xl">Produk & Layanan <span className="bg-[#77297d00] rounded-xl" >Kami</span></h1>
                <div className='lg:w-[50vw]'>
                    <a
                        href='#web'
                        className='w-fit'>
                        <span className='mb-3 bg-sky-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 dark:text-white rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Website Development</span>
                    </a>
                </div>
                <div className='my-7 lg:w-[50vw]'>
                    <a
                        href='#socmed'
                        className='w-fit'>
                        <span className='mb-3 bg-violet-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 dark:text-white rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Social Media Management</span>
                    </a>
                </div>
                <div className='lg:w-[50vw]'>
                    <a
                        href='#legal'
                        className='w-fit'>
                        <span className='mb-3 bg-teal-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 dark:text-white rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
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
                <div className="md:ml-5 flex-grow z-10">
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
                <div className="md:ml-5 flex-grow z-10">
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
                <div className="md:ml-5 flex-grow z-10">
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

            <div id='legal' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="max-w-lg w-[80vw] lg:w-[420px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={badanUsaha}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/all-products/legalitas/badan-usaha">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#9e9710] text-5xl text-left font-bold py-3">
                            Badan Usaha Lainnya
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#eaeaea] font-normal text-xl text-gray-800">
                        Berbagai layanan pendirian badan usaha diantaranya: Yayasan, Perkumpulan atau Asosiasi, Firma Hukum, Virtual Office, PKP, NIB
                    </p>
                    <a
                        href="/all-products/legalitas/badan-usaha"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#9e9710] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='pajak' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="max-w-lg w-[80vw] lg:w-[420px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={tax}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/konsultan-pajak">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#83514D] text-5xl text-left font-bold py-3">
                            Konsultan Pajak
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#F1E5DC] font-normal text-xl text-gray-800">
                        Optimalkan struktur pajak perusahaan Anda dengan bantuan Konsultan Pajak kami. Solusi efisien untuk mengelola kewajiban pajak dan memastikan kepatuhan peraturan
                    </p>
                    <a
                        href="/konsultan-pajak"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#83514D] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='izin-tambahan' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="dark:invert saturate-150 dark:hue-rotate-180 lg:ml-[-20lvh] max-w-[700px] w-[80vw] lg:w-[700px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={izin}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/pelayanan-manajemen">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#599DAD] text-5xl text-left font-bold py-3">
                            Izin Tambahan
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#EBF2FB] font-normal text-xl text-gray-800">
                        Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan.
                    </p>
                    <a
                        href="/pelayanan-manajemen"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#599DAD] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='audit' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="dark:invert saturate-150 dark:hue-rotate-180 lg:ml-[-15lvh] max-w-[600px] w-[80vw] lg:w-[700px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={audit}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/audit">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#305782] text-5xl text-left font-bold py-3">
                            Audit
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#B2DEE2] font-normal text-xl text-gray-800">
                        Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal.
                    </p>
                    <a
                        href="/audit"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#305782] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='pelayanan-manajemen' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="dark:invert saturate-150 dark:hue-rotate-180 lg:ml-[-12lvh] max-w-[580px] w-[80vw] lg:w-[700px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={pelmanajemen}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/pelayanan-manajemen">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#DF6443] text-5xl text-left font-bold py-3">
                            Pelayanan Manajemen
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#ECECEC] font-normal text-xl text-gray-800">
                        Tingkatkan efisiensi operasional dengan Pelayanan Manajemen kami, fokus pada perencanaan strategis dan implementasi praktik manajemen terbaik.
                    </p>
                    <a
                        href="/pelayanan-manajemen"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#DF6443] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='pelayanan-akuntansi' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="dark:invert saturate-150 dark:hue-rotate-180 lg:ml-[-10lvh] max-w-[500px] w-[80vw] lg:w-[700px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={akuntansi}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/pelayanan-akuntansi">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#019C85] text-5xl text-left font-bold py-3">
                            Pelayanan Akuntansi
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#A4F5EC] font-normal text-xl text-gray-800">
                        Dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat.
                    </p>
                    <a
                        href="/pelayanan-akuntansi"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#019C85] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='software-management' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="dark:invert saturate-150 dark:hue-rotate-180 lg:ml-[-10lvh] max-w-[500px] w-[80vw] lg:w-[700px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={software}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/software-management-system">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#D268CB] text-5xl text-left font-bold py-3">
                            Software Management System
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#EFC4E9] font-normal text-xl text-gray-800">
                        Solusi terkini, dari Accounting Software hingga AR System, untuk meningkatkan efisiensi dan kinerja operasional.
                    </p>
                    <a
                        href="/software-management-system"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#D268CB] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

            <div id='haki' />
            <div className="m-5 md:m-24 flex flex-col md:flex-col md:items-center lg:flex-row gap-5 max-w-fit p-6 rounded-3xl">
                <div className={`self-end md:w-[420px] lg:h-max md:max-w-lg`}>
                    <Image
                        className="dark:invert saturate-150 dark:hue-rotate-180 lg:ml-[-10lvh] max-w-[500px] w-[80vw] lg:w-[700px] flex justify-center lg:h-max md:self-center lg:self-end h-auto object-cover"
                        src={haki}
                        alt="image description"
                    />
                </div>
                <div className="md:ml-5 flex-grow z-10">
                    <a href="/haki">
                        <h5 className="lg:mb-5 mb-4 text-transparent bg-clip-text bg-[#E43B3B] text-5xl text-left font-bold py-3">
                            HAKI | Hak Kekayaan Intelektual
                        </h5>
                    </a>
                    <p className="mb-5 p-7 flex-grow text-justify rounded-[30px] bg-[#FFECD5] font-normal text-xl text-gray-800">
                        Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif.
                    </p>
                    <a
                        href="/haki"
                        className="w-full font-extrabold flex-grow text-left inline-flex items-center justify-center p-10 text-xl text-white bg-[#E43B3B] rounded-[30px] hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Read more
                    </a>
                </div>
            </div>

        </>
    )
}