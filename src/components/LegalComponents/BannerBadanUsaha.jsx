export const BannerBadanUsaha = () => {
    return (
        <>
            <div className="z-40 absolute top-[50%] md:top-[50%] lg:top-[50%] left-[35%] lg:left-[25%] md:left-[40%] ml-10 transform -translate-x-1/2 -translate-y-1/2" >
                <div>
                    <h1 className="text-gray-800 dark:text-white font-medium text-3xl w-[50vw]">Layanan Pendirian</h1>
                    <h1 className="mt-3 bg-[#ffffff92] dark:bg-transparent dark:p-0 p-3 rounded-[40px] lg:bg-none text-gray-700 font-extrabold text-5xl w-fit lg:w-[47vw]">
                        <span className="bg-pink-400 rounded-xl text-transparent bg-clip-text"> Yayasan |</span>
                        <span className="bg-blue-400 rounded-xl text-transparent bg-clip-text"> Perkumpulan -</span>
                        <span className="bg-blue-400 rounded-xl text-transparent bg-clip-text"> Asosiasi |</span>
                        <span className="bg-amber-400 rounded-xl text-transparent bg-clip-text"> Firma Hukum |</span>
                        <span className="bg-violet-400 rounded-xl text-transparent bg-clip-text"> Virtual Office |</span>
                        <span className="bg-teal-400 rounded-xl text-transparent bg-clip-text"> PKP |</span>
                        <span className="bg-slate-400 rounded-xl text-transparent bg-clip-text"> NIB |</span>
                    </h1>
                    {/* <h1 className="text-slate-500 font-medium text-xl w-[50vw]">Layanan Pendirian Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti reprehenderit minima voluptate, fuga accusantium iste, ducimus hic dolores consequuntur adipisci facere neque consequatur expedita non, aliquam aliquid iusto deserunt.</h1> */}
                    <div className="mt-4 flex flex-col md:flex-row gap-3">
                        <a
                            href='#packages'
                            className={`text-lg w-fit bg-slate-200 p-10 text-gray-800 backdrop-blur-sm hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full lg:text-sm px-4 py-2 text-center md:inline-block md:order-1`}
                        >
                            Pilih Paket
                        </a>
                        <a
                            href=''
                            className={`text-lg w-fit bg-slate-200 p-10 text-gray-800 backdrop-blur-sm hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full lg:text-sm px-4 py-2 text-center md:inline-block md:order-1`}
                        >
                            Konsultasi Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}