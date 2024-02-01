import medsosPict from "../public/IMG/VectorBg/medsos.jpg"
import bulb from "../public/IMG/IconVector/lightbulb-exclamation.png"
import twentyfour from '../public/IMG/IconVector/24white.png'
import Image from "next/image"

export const BannerSosmed = () => {

    return (
        <>

            <div className="px-10 md:px-20 lg:px-36 py-10 md:py-16 lg:py-24">
                <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
                    <Image src={medsosPict} className="w-full order-1 md:w-[50%] h-auto md:h-[50vw] lg:h-auto object-cover" alt="medsos image" />
                    <div className="mx-10 bg-violet-100 p-5 rounded-[40px] w-full md:w-[50%]">
                        <h1 className="lg:mt-4 md:mt-0 text-gray-900 font-bold lg:text-right text-3xl md:text-6xl lg:text-7xl font-poppins">Apa itu Sosial Media Manajemen?</h1>
                        <h1 className="mt-4 text-justify lg:text-justify text-gray-900 text-xl md:text-2xl lg:text-xl tracking-wide leading-relaxed">
                            Sosial Media Manajemen adalah proses pengelolaan dan pengelolaan aktivitas serta konten di platform media sosial untuk mencapai tujuan tertentu, seperti membangun merek, meningkatkan visibilitas, atau berinteraksi dengan audiens.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="m-10 lg:m-32 md:m-10 flex flex-wrap gap-5 md:gap-7 justify-center">
                <p className="bg-violet-100 p-5 rounded-[40px] text-3xl lg:text-5xl lg:leading-normal font-bold lg:w-[70vw] text-left capitalize">Apasih Kelebihan Social Media Management Di <span className='bg-violet-800 bg-clip-text text-transparent font-extrabold '>Ganesha Consulting</span>?</p>
                <div className="flex justify-center items-center flex-row gap-3 w-fit h-auto lg:w-full lg:h-auto p-4 md:p-6 bg-violet-600 rounded-[40px] hover:bg-violet-500">
                    <h5 className="mb-2 text-xl md:text-2xl font-medium text-justify tracking-tight text-white">
                        Karena kami berkomitmen untuk memberikan pelayanan Social Media yang terbaik, ditangani oleh para tenaga professional dengan memberikan strategi yang kreatif, inovatif, serta menyediakan konten-konten yang Up to Date!
                    </h5>
                </div>
            </div>

        </>
    )
}