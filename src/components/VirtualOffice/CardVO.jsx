"use client"

import { dataPageVO } from "@/app/Database"
import { FaPlus } from "react-icons/fa6"
import { Title } from "../Title"

export const CardVO = () => {
    return (
        <section className="md:m-24 m-5 py-10 md:py-16 space-y-10">
            <Title text1={'Preview'} text={'Lokasi Vitrual Office Kami'}/>
            <div className="flex flex-col gap-5">
                {dataPageVO.Location.map((el, idx) => (
                    <div key={idx}>
                        <div
                            onClick={() => document.getElementById(`modal-${idx}`).showModal()}
                            className="cursor-pointer w-full h-[40lvh] relative group duration-500 ease-in-out hover:scale-[1.02] overflow-hidden rounded-3xl">
                            <img
                                className="w-full h-[40lvh] rounded-3xl object-cover"
                                src={el.image}
                                alt={"Virtual Office " + el.name} />
                            <div className="z-10 w-[15lvw] h-7 bg-black blur-[50px] absolute top-0 -left-5 rounded-full" />
                            <div className="z-30 absolute top-0 left-0">
                                <h1 className="mx-5 my-3 md:text-xl font-medium text-white">
                                    {el.location}
                                </h1>
                            </div>
                            <div className="z-10 w-[20lvw] h-7 bg-black blur-[50px] absolute -bottom-0 -left-5 rounded-full" />
                            <div className="z-30 absolute bottom-0 left-0">
                                <h1 className="mx-5 my-3 text-xl md:text-2xl font-bold text-white">
                                    {el.name}
                                </h1>
                            </div>
                            <div className="absolute right-5 bottom-5">
                                <button className="h-10 w-10 flex items-center justify-center rounded-full dark:bg-black bg-white">
                                    <FaPlus className="dark:text-gray-100 text-gray-600 text-xl group-hover:rotate-90 duration-300 ease-in-out" />
                                </button>
                            </div>
                        </div>
                        <dialog id={`modal-${idx}`} className="modal backdrop-blur-md py-5">
                            <div className="modal-box dark:bg-[#151515] bg-white w-[80lvw] h-full max-h-full max-w-full noBar">
                                <form method="dialog" className="sticky top-0 right-0">
                                    <button className="btn btn-circle border-none bg-gray-200 focus:ring-0 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 absolute right-0 top-0 rotate-45"><FaPlus className="text-2xl text-gray-800 dark:text-gray-100" /></button>
                                </form>
                                <section className="md:mx-14 mt-5 space-y-10">
                                    <div className="space-y-3 mb-5">
                                        <span className="text-lg">
                                            Gallery.
                                        </span>
                                        <h1 className="text-2xl md:text-4xl font-bold mb-5">
                                            All Views of Our Virtual Office
                                        </h1>
                                    </div>
                                    <div className="flex flex-col gap-10 w-full">
                                        {el.images.map(el => (
                                            <img
                                                className="rounded-2xl w-full min-h-[50lvh] h-[80lvh] object-cover shadow-mainShadow"
                                                src={el}
                                                alt={el} />
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </dialog>
                    </div>
                ))}
            </div>
        </section>
    )
}
