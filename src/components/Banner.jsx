export const Banner = () => {
    return (
        <>
            <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="">
                    <div>
                        <h1 className="text-5xl w-max font-bold mb-4 uppercase">Sinergi Layanan Bisnis Multifungsi</h1>
                        <p className="text-xl text-white text-opacity-80">
                            Kami menyediakan solusi all-in-one untuk bisnis anda, mulai dari pengembangan website, sosial media manajemen, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya.
                        </p>
                    </div>
                    <div className="p-3">
                        <a
                            href='/'
                            className="text-white bg-[#ffffff3e] backdrop-blur-sm hover:bg-[#762A7D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center md:inline-block"
                        >
                            Lebih Lanjut
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}