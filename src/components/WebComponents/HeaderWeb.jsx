import { TbCategoryFilled } from "react-icons/tb";
import { GiSparkles } from "react-icons/gi";
import { SiSimplenote } from "react-icons/si";
import { TbListCheck } from "react-icons/tb";

export const HeaderWeb = () => {
    return (
        <>
            <div className='lg:m-32 m-10 flex flex-col md:flex-row py-20 px-6 md:px-20 gap-6'>
                <div className='flex flex-col gap-6'>
                    <div
                        className=" lg: flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-400 rounded-full hover:bg-sky-500"
                    >
                        <TbCategoryFilled
                            color='white'
                            size={50}
                        />
                        <h5 className="text-2xl font-bold text-center tracking-tight text-white">

                            Kreatif dan Efektif
                        </h5>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-500 rounded-[40px] hover:bg-sky-500"
                    >
                        <GiSparkles
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Desain Professional
                        </h5>
                    </div>
                </div>
                <div className='order-first lg:order-none p-5 flex bg-sky-400 rounded-[40px] justify-center items-center w-full md:w-auto'>
                    <h1 className="text-white text-3xl lg:text-6xl font-extrabold capitalize font-poppins text-center md:text-left">

                        Buat Perusahaan Anda Terlihat
                        <span className='bg-[#8bfffb] text-transparent bg-clip-text rounded-2xl'> Proffesional</span> dan
                        <span className='bg-yellow-300 text-transparent bg-clip-text rounded-2xl'> Menarik</span> dengan website yang
                        <span className='bg-red-300 text-transparent bg-clip-text rounded-2xl'> Modern</span>
                    </h1>
                </div>
                <div className='flex flex-col gap-6'>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-500 rounded-[40px] hover:bg-sky-500"
                    >
                        <TbListCheck
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Fitur Lengkap
                        </h5>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col gap-3 w-full md:w-56 h-56 max-w-lg p-6 bg-sky-500 rounded-full hover:bg-sky-500"
                    >
                        <SiSimplenote
                            color='white'
                            size={50}
                        />
                        <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-white">
                            Efisien dan Mudah
                        </h5>
                    </div>
                </div>

            </div>
        </>
    )
}