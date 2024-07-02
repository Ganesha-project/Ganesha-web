import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";

export const SideRec = ({ data }) => {
    return (
        <>
            <section className="flex flex-col gap-5 sticky top-24">
                <h1 className="text-2xl flex items-center gap-2 font-bold text-mainColor pb-1 relative">
                    Most Popular <FaFire />
                    <span className="absolute bottom-0 w-[30px] h-1 bg-red-600 rounded-full"></span>
                </h1>
                {data.slice(0, 5).map((el, idx) => (
                    <Link
                        href="/article/1"
                        key={idx} className="h-[15lvh] group flex flex-col justify-between duration-300">
                        <div className="space-y-1 flex  flex-row gap-4 w-full h-full">
                            <div className="overflow-hidden rounded-xl max-w-[15lvh] min-w-[15lvh]">
                                <Image
                                    className="w-full h-full object-cover rounded-xl group-hover:scale-125 duration-150"
                                    width={500}
                                    height={500}
                                    src={el.thumbnailImg}
                                    alt={el.title} />
                            </div>

                            <div className="space-y-1 w-full flex flex-col justify-between h-auto">
                                <h1 className="font-bold text-xl group-hover:text-mainColor duration-150 truncate-last">
                                    {el.title}
                                </h1>
                                <h2 className="text-mainColor">
                                    {el.categories}
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    )
}