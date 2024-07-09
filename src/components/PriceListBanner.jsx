export const PriceListBanner = () => {
    return (
        <>
            <div className="z-40 absolute top-1/2 left-1/3 ml-10 transform -translate-x-[65%] -translate-y-1/2" >
                <h1 className="mb-5 text-gray-800 dark:text-white w-[50vw] font-extrabold text-6xl lg:text-9xl">List Paket <span className="bg-[#e58653] bg-clip-text text-transparent rounded-xl" >Menarik</span> Kami!</h1>
                <div className='lg:w-[50vw]'>
                    <a
                        href='#web'
                        className='w-fit'>
                        <span className='mb-3 dark:text-white bg-sky-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Website Development</span>
                    </a>
                </div>
                <div className='my-7 lg:w-[50vw]'>
                    <a
                        href='#socmed'
                        className='w-fit'>
                        <span className='mb-3 dark:text-white bg-violet-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Social Media Management</span>
                    </a>
                </div>
                <div className='lg:w-[50vw]'>
                    <a
                        href='#legal'
                        className='w-fit'>
                        <span className='mb-3 dark:text-white bg-teal-300 bg-opacity-50 hover:bg-opacity-30 hover:text-opacity-50 rounded-[40px]  text-center text-gray-800 p-3 font-medium'>
                            Jasa Legalitas Bisnis</span>
                    </a>
                </div>
            </div>
        </>
    )
}