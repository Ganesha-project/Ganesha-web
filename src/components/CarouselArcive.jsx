// "use client"
// import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"
// import { DataProducts } from "../../../public/Database/AboutUsData"
// import { Tag } from "../Tag"
// import { useState } from "react"

// export const ProdLarge = () => {
//     // State untuk kontrol Udang & Kepiting
//     const [currentSlideUdangKepiting, setCurrentSlideUdangKepiting] = useState(0)
//     const dataUdangKepiting = [...DataProducts.udang.lists, ...DataProducts.kepiting.lists]

//     // State untuk kontrol Ikan
//     const [currentSlideIkan, setCurrentSlideIkan] = useState(0)
//     const dataIkan = DataProducts.ikan.lists

//     // Fungsi untuk next dan prev di Udang & Kepiting
//     const nextSlideUdangKepiting = () => {
//         setCurrentSlideUdangKepiting((prev) => (prev === dataUdangKepiting.length - 1 ? 0 : prev + 1))
//     }

//     const prevSlideUdangKepiting = () => {
//         setCurrentSlideUdangKepiting((prev) => (prev === 0 ? dataUdangKepiting.length - 1 : prev - 1))
//     }

//     // Fungsi untuk next dan prev di Ikan
//     const nextSlideIkan = () => {
//         setCurrentSlideIkan((prev) => (prev === dataIkan.length - 1 ? 0 : prev + 1))
//     }

//     const prevSlideIkan = () => {
//         setCurrentSlideIkan((prev) => (prev === 0 ? dataIkan.length - 1 : prev - 1))
//     }

//     return (
//         <>
//             {/* Carousel untuk Udang dan Kepiting */}
//             <section className="md:mx-24 mx-5 py-20">
//                 <div className=" mb-10">
//                     <Tag text={'jenis'} />
//                     <p className="text-4xl mt-2 mb-5">
//                         Udang dan Kepiting
//                     </p>
//                 </div>
//                 <div className="carousel2 w-full md:flex md:flex-row gap-3">
//                     {dataUdangKepiting.map((el, idx) => (
//                         <div
//                             key={idx}
//                             className={`grow w-full min-w-[80lvw] md:min-w-0 transition-transform duration-500 ease-in-out 
//                                   ${idx === dataUdangKepiting.length - 1 ? "rounded-tr-[100px] bg-secondaryBase border-none md:w-[30%]" : "border border-thirdColor md:w-[25%]"}
//                                 `}
//                         >
//                             <div className="flex flex-col items-center md:px-10 md:py-14 px-5 py-10">
//                                 <img
//                                     src={el.img}
//                                     alt={el.name}
//                                     className="w-[80lvw] h-[20lvh] md:w-[50lvw] object-cover overflow-visible  mix-blend-multiply" />
//                                 <div className="space-y-2 text-mainColor mt-16">
//                                     <h1 className="text-xl md:text-2xl font-semibold">
//                                         {el.name}
//                                     </h1>
//                                     <p>{el.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
                
//             </section>

//             <section className="md:mx-24 mx-5 py-20">
//                 <div className=" mb-10">
//                     <Tag text={'jenis'} />
//                     <p className="text-4xl mt-2 mb-5">
//                        Ikan
//                     </p>
//                 </div>
//                 <div className="carousel2 w-full md:flex md:flex-wrap md:flex-row gap-3">
//                     {dataIkan.map((el, idx) => (
//                         <div
//                             key={idx}
//                             style={{ transform: `translateX(${(idx - currentSlideIkan) * 100}%)` }}
//                             className={`min-w-[80lvw] md:min-w-0 grow transition-transform duration-500 ease-in-out border border-thirdColor md:w-[25%]
//                                 `}
//                         >
//                             <div className="flex flex-col items-center md:px-10 md:py-14 px-5 py-10">
//                                 <img
//                                     src={el.img}
//                                     alt={el.name}
//                                     className="w-[80lvw] h-[30lvh] md:w-[50lvw] object-cover overflow-visible  mix-blend-multiply" />
//                                 <div className="space-y-2 text-mainColor mt-16">
//                                     <h1 className="text-xl md:text-2xl font-semibold">
//                                         {el.name}
//                                     </h1>
//                                     <p>{el.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div>
//                 <button
//                         className="transform -translate-y-1/2 h-10 w-10 flex items-center justify-center text-lg bg-mainColor text-white rounded-full"
//                         onClick={prevSlideIkan}
//                     >
//                         <IoMdArrowBack />
//                     </button>
//                     <button
//                         className=" transform -translate-y-1/2 h-10 w-10 flex items-center justify-center text-lg bg-mainColor text-white rounded-full"
//                         onClick={nextSlideIkan}
//                     >
//                         <IoMdArrowForward />
//                     </button>
//                 </div>
//             </section>

//              {/* Carousel untuk Ikan */}
//             {/* <section className="md:mx-24 mx-5 py-20">
//                 <div className="mb-10">
//                     <Tag text={'jenis'} />
//                     <p className="text-4xl mt-2 mb-5">
//                         Ikan
//                     </p>
//                 </div>
//                 <div className="relative w-full h-[50lvh] overflow-hidden">
//                     {dataIkan.map((el, idx) => (
//                         <div
//                             key={idx}
//                             className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${idx === currentSlideIkan ? 'translate-x-0' : 'translate-x-full'}`}
//                             style={{ transform: `translateX(${(idx - currentSlideIkan) * 100}%)` }}>
//                             <div className="flex md:flex-row flex-col items-center p-10 h-[50lvh]">
//                                 <img
//                                     src={el.img}
//                                     alt={el.name}
//                                     className="w-[80lvw] md:h-[35lvh] h-[20lvh] md:w-[40lvw] object-cover mix-blend-multiply" />
//                                 <div className="space-y-2 text-mainColor">
//                                     <h1 className="text-4xl font-semibold">
//                                         {el.name}
//                                     </h1>
//                                     <p>{el.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     <button
//                         className="absolute left-0 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center text-lg bg-mainColor text-white rounded-full"
//                         onClick={prevSlideIkan}
//                     >
//                         <IoMdArrowBack />
//                     </button>
//                     <button
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center text-lg bg-mainColor text-white rounded-full"
//                         onClick={nextSlideIkan}
//                     >
//                         <IoMdArrowForward />
//                     </button>
//                 </div>
//             </section> */}
//         </>
//     )
// }