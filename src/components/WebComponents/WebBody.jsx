import Image from "next/image"
import webitem from "../../public/BG/webitem.jpg"

export const WebBody = () => {
    return (
        <>
            <div className="m-10">
                <div className="w-full min-h-fit bg-white p-5 md:p-10 lg:p-32 flex flex-col md:flex-row items-center">
                    <Image
                        width={600}
                        height={50}
                        className="self-end object-cover w-full lg:w-fit md:w-[70%] rounded-md"
                        src={webitem}
                        alt="image web"
                    />
                    <div className="bg-sky-100 p-5 rounded-[40px] md:ml-10 flex-grow">
                        <h1 className="text-2xl md:text-5xl font-bold w-full md:w-fit h-fit rounded-md lg:text-left md:text-right">
                            Pentingnya Sebuah Website Untuk Perusahaan!
                        </h1>
                        <p className="mt-5 text-justify text-xl leading-relaxed tracking-wide md:text-justify">
                            Website adalah kunci keberhasilan perusahaan dalam era digital, memberikan eksposur global, aksesibilitas sepanjang waktu, dan meningkatkan kredibilitas. Sebagai platform informasi dan interaksi, website mendukung pertumbuhan bisnis, memperluas pasar, dan membangun brand awareness secara efektif.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}