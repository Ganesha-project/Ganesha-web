import Image from "next/image"
import pt from "../../public/IMG/IconVector/building.png"

export const AllProductButton = () => {
    const items = [
        {
            "name": "Pendirian PT",
            "link": "legalitas/pendirian-pt",
            "image": pt
        },
        {
            "name": "Pendirian CV",
            "link": "legalitas/pendirian-cv",
            "image": pt
        },
        {
            "name": "Pendirian Yayasan",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Pendirian Firma Hukum",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Pendirian Perkumpulan/Asosiasi",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Pendirian Virtual Office | PKP | NIB",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
        {
            "name": "Konsultan Pajak",
            "link": "legalitas/badan-usaha",
            "image": pt
        },
    ]

    return (
        <>
            <div className="bg-white p-10 lg:p-32 sm:p-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                <p className="font-extrabold text-6xl text-left flex items-center justify-center bg-indigo-200 text-gray-800 rounded-[40px] p-5">
                    Layanan Kami
                </p>
                {items.map((el, index) => (
                    <a
                        key={index}
                        href={el.link}
                        className={`w-full h-full flex items-center gap-3 p-8 sm:p-14 hover:bg-opacity-70
                ${index === 3 ? 'bg-orange-200' : index === 6 ? 'bg-slate-200' : index === 1 ? 'bg-pink-200' : 'bg-teal-300'}
                rounded-[40px]`}
                    >
                        <Image
                            src={el.image === "" ? "" : pt}
                            className="h-10 w-10 object-cover"
                        />
                        
                        <div
                            className=" text-lg sm:text-2xl font-bold"
                        >
                            <p>{el.name}</p>
                        </div>
                    </a>
                ))}
                <p className="font-extrabold text-4xl sm:text-6xl text-right flex items-center justify-center bg-[#dffbff] rounded-[40px]"></p>
            </div>

        </>
    )
}
