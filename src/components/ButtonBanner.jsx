export const ButtonBanner = ({ href1, href2, styleL, styleR, btn1, btn2 }) => {
    return (
        <>
            <div className="z-40 absolute top-[77%] left-[5.5%] ml-10 transform -translate-x-1/2 -translate-y-1/2" >
                <div className="mt-4 flex gap-3">
                    <a
                        href={href1}
                        className={`${styleL} text-gray-800 backdrop-blur-sm hover:bg-violet-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center md:inline-block`}
                    >
                        {btn1}
                    </a>
                    <a
                        href={href2}
                        className={`${styleR} text-gray-800 backdrop-blur-sm hover:bg-violet-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center md:inline-block`}
                    >
                        {btn2}
                    </a>
                </div>
            </div>

        </>
    )
}