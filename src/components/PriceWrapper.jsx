import { FaPlus } from "react-icons/fa6"
import { Title } from "./Title"
import { formatToRupiah } from "@/helper/formatToRupiah"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"
import { TextMainGradient } from "@/utils/ReueseClass"

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
                                <div className="md:translate-y-[50%] group-hover:translate-y-0 duration-200 delay-75">
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
                                <div tabIndex={0} className="duration-300 ease-in-out md:translate-y-[200%] group-hover:translate-y-0 group-focus:translate-y-0 delay-100">
                                    <button
                                        onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                                        className="btn btn-sm mt-2 btn-ghost rounded-full bg-darkColor/50">
                                        Cek Pricelist
                                    </button>
                                </div>
                            </div>
                            <dialog id={`modal-${idx}`} className="modal modal-bottom !p-[-1.5rem] backdrop-blur-md ">
                                <div className="modal-box shadow-none bg-transparent md:w-[100%] md:h-full h-fit max-h-full max-w-full noBar">
                                    <form method="dialog" className="flex justify-end self-end w-full">
                                        <button className="m-2 btn btn-circle btn-sm  shadow-none border-none bg-neutral-200 focus:ring-0 dark:bg-darkColor hover:bg-neutral-300 dark:hover:bg-neutral-900 absolute right-0 top-0 rotate-45">
                                            <FaPlus className="text-lg md:text-xl text-neutral-800 dark:text-neutral-100" />
                                        </button>
                                    </form>
                                    <section className="mt-7 space-y-5">
                                    <Link
                                                href={el.href}
                                                className="flex gap-2 items-center btn btn-ghost bg-baseColor/80 order-last md:order-none dark:bg-darkColor rounded-full md:hidden"
                                            >
                                                Cari Tahu Lebih Lengkap! <IoIosArrowForward />
                                            </Link>
                                        <div className="grid grid-cols-4 w-full h-full gap-5">
                                            {el.items.map((el, idx) => (
                                                <div
                                                    key={idx}
                                                    className="carousel-item md:w-[20lvw] w-[60lvw] h-[60lvw] md:h-[20lvw] p-5 rounded-3xl bg-lightColor/50 dark:bg-darkColor/50 relative">
                                                        <div className="font-bold bg-gradient-to-tr md:text-lg dark:from-neutral-100 from-neutral-800 dark:via-neutral-300 via-neutral-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent text-wrap">
                                                            {el.type}
                                                        </div>

                                                    <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                                                        <h2 className={`${TextMainGradient} font-medium text-xl md:text-3xl`}>
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

                                                            <span className="font-bold shimmer-text rounded-xl text-sm animate-pulse" >
                                                                {el.discount === 0 ? null : (`OFF ${el.discount} %`)}
                                                            </span>
                                                        </div>

                                                        <Link
                                                            href={el.link}
                                                            className={`text-sm bg-darkColor dark:bg-lightColor w-fit px-3 text-center dark:text-neutral-800 text-white py-1 rounded-full font-bold ease-in-out duration-300 hover:scale-95`}>
                                                            Konsultasi Sekarang
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                            <Link
                                                href={el.href}
                                                className="gap-2 flex items-center justify-center font-medium aspect-square w-full h-full bg-baseColor/80 order-last md:order-none dark:bg-darkColor rounded-3xl text-lg"
                                            >
                                                Cari Tahu Lebih Lengkap! <IoIosArrowForward />
                                            </Link>
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