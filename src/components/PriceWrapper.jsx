import { FaPlus } from "react-icons/fa6"
import { Title } from "./Title"
import { formatToRupiah } from "@/helper/formatToRupiah"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"

export const PriceWrapper = ({ data, text1, text }) => {
    return (
        <>
            <section className="py-20">
                <Title text1={text1} text={text} className={'md:mx-24 2xl:mx-80 mx-5'} />
                <div className="carousel2 w-full gap-5 py-10">
                    {data.map((el, idx) => (
                        <div
                            key={idx}
                            className={`min-w-[85lvw] md:min-w-[25lvw] h-[70lvh] rounded-3xl overflow-hidden relative group
                                ${idx === 0 ? 'ml-5 md:ml-24 2xl:ml-80' : ''} ${idx === data.length - 1 ? 'mr-5 md:mr-24 2xl:mr-80' : ''}
                                `}
                        >
                            <img
                                className="w-full h-full object-cover bg-baseColor rounded-3xl"
                                src={el.image}
                                alt={el.label}
                            />
                            <div className="gradient-blur h-[50%] duration-300 ease-in-out bg-gradient-to-t from-[#523b2ec8] to-transparent"></div>
                            <div className="absolute z-[50] bottom-5 left-5 right-5 text-white">
                                <div className="translate-y-[50%] group-hover:translate-y-0 duration-200 delay-75">
                                    <div className="text-xs uppercase font-medium tracking-wide brightness-200 filter opacity-80">
                                        {el.tag}
                                    </div>
                                    <h1 className="font-bold text-2xl">
                                        {el.label}
                                    </h1>
                                    <h2 className="text-sm opacity-60">
                                        {el.desc}
                                    </h2>
                                </div>
                                <div className="duration-300 ease-in-out translate-y-[200%] group-hover:translate-y-0 delay-100">    
                                    <button
                                        onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                                        className="btn btn-sm mt-2 btn-ghost rounded-full bg-darkColor bg-opacity-50">
                                        Cek Pricelist
                                    </button>
                                </div>
                            </div>
                            <dialog id={`modal-${idx}`} className="modal modal-bottom !p-[-1.5rem] backdrop-blur-md ">
                                <div className="modal-box shadow-none bg-neutral-50 dark:bg-black md:bg-transparent md:w-[100%] md:h-full h-fit max-h-full max-w-full noBar">
                                    <form method="dialog" className="flex justify-end self-end w-full">
                                        <button className="m-2 btn btn-circle btn-sm border-none bg-neutral-200 focus:ring-0 dark:bg-darkColor hover:bg-neutral-300 dark:hover:bg-neutral-900 absolute right-0 top-0 rotate-45">
                                            <FaPlus className="text-lg md:text-xl text-neutral-800 dark:text-neutral-100" />
                                        </button>
                                    </form>
                                    <section className="mt-7 space-y-5">
                                        <Link
                                            href={el.href}
                                            className="flex gap-2 items-center btn btn-ghost bg-neutral-200 order-last md:order-none dark:bg-darkColor rounded-full"
                                        >
                                            Cari Tahu Lebih Lengkap! <IoIosArrowForward/>
                                        </Link>
                                        <div className="carousel2 w-full md:flex md:flex-wrap md:justify-center gap-5">
                                            {el.items.map((el, idx) => (
                                                <div
                                                    key={idx}
                                                    className="shimmer carousel-item md:w-[20lvw] w-[60lvw] h-[60lvw] md:h-[20lvw] p-5 rounded-3xl bg-neutral-200 dark:bg-darkColor relative">
                                                    <h1 className="absolute left-5 top-5 font-bold">
                                                        <span className="bg-gradient-to-tr dark:from-neutral-100 from-neutral-800 dark:via-neutral-300 via-neutral-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent text-wrap">
                                                            {el.type}
                                                        </span>
                                                    </h1>
                                                    <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                                                        <h2 className={`bg-gradient-to-tr dark:from-neutral-100 from-neutral-800 dark:via-neutral-200 via-neutral-600 to-mainColor dark:to-secondaryColor bg-clip-text text-transparent font-medium text-xl md:text-3xl`}>
                                                            {el.price === 0 ? ("Talk With Us!") : formatToRupiah(el.price)}
                                                        </h2>
                                                        <div
                                                            className="flex gap-2 items-center"
                                                        >
                                                            <p
                                                                className="line-through text-lg dark:text-red-500 text-red-600"
                                                            >
                                                                {el.priceOriginal === 0 ? null : formatToRupiah(el.priceOriginal)}
                                                            </p>

                                                            <span className="font-bold text-white rounded-xl text-sm animate-pulse" >
                                                                {el.discount === 0 ? null : (`OFF ${el.discount} %`)}
                                                            </span>
                                                        </div>

                                                        <Link
                                                            href={el.link}
                                                            className={`text-sm bg-[#2e2e2e] dark:bg-neutral-200 w-fit px-3 text-center dark:text-neutral-800 text-white py-1 rounded-full font-bold ease-in-out duration-300 hover:scale-95`}>
                                                            Konsultasi Sekarang
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </dialog>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}