import { formatToRupiah } from "@/helper/formatToRupiah";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";

export const ReusableCards = ({ data, cardColor, typeColor, priceColor, buttonColor, label }) => {
    return (
        <>
            <section className="md:m-24 m-5 space-y-5">
                <div className="flex justify-center">
                    {label ? (
                        <h1 className={`${cardColor} ${priceColor} rounded-full w-fit px-5 py-5 font-semibold md:text-5xl text-2xl uppercase`}>
                            {label}
                        </h1>
                    ) : null}
                </div>

                <div className="carousel carousel-item gap-5 py-10 -m-5 md:-m-0">
                    {data.map((el, idx) => (
                        <div
                            key={idx}
                            className={`carousel-item ${idx === 0 ? 'pl-5 md:pl-0' : ''} ${idx === data.length - 1 ? 'pr-5 md:pr-0' : ''}`}
                        >
                            <div
                                className={`${cardColor ? cardColor : 'bg-cyan-100'} md:w-[30vw] w-[90vw] p-5 rounded-3xl space-y-5 relative hover:scale-[.97] duration-300 ease-in-out hover:shadow-secondaryShadow hover:brightness-105`}
                            >
                                <div className="flex flex-col justify-center items-center gap-3 mt-5">
                                    <h1 className={`${typeColor ? typeColor : 'text-cyan-600'} mt-2 uppercase text-center text-3xl font-bold tracking-tight`}>
                                        {el.type}
                                    </h1>
                                    <h3 className="text-center line-through text-lg text-red-600">
                                        {formatToRupiah(el.priceOriginal)}
                                    </h3>
                                    <h2 className={`${priceColor ? priceColor : 'text-cyan-800'} font-bold text-3xl`}>
                                        {formatToRupiah(el.price)}
                                    </h2>
                                    <a
                                        href={el.link}
                                        className={`${buttonColor ? buttonColor : 'bg-cyan-600'} w-full text-center text-white py-2 rounded-full font-bold ease-in-out duration-300 hover:scale-95`}>
                                        Konsultasi Sekarang
                                    </a>
                                </div>
                                <div className="absolute top-[-30px] right-[-10px]">
                                    <p className="bg-red-500 font-bold px-2 py-1 text-white rounded-xl animate-pulse">
                                        OFF {el.discount}%
                                    </p>
                                </div>
                                <div>
                                    {el.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="items-start">
                                                {feature.status === true ? (<BsFillCheckCircleFill className="text-green-500" />) : (<BsFillXCircleFill className="text-red-500" />)}
                                            </span>
                                            <h4 className="font-medium dark:text-gray-900">
                                                {feature.feature}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
