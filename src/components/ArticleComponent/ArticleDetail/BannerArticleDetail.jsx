import { DataArticles } from "@/app/Database"
import Image from "next/image"
import Breadcrumbs from "./Breadcrumbs"

export const BannerArticleDetail = () => {
    return (
        <>
            <section className="min-h-screen pt-10">
                <div className="flex justify-center flex-col gap-2 h-screen relative">
                    <Breadcrumbs/>
                    <h1 className="font-bold text-3xl">
                        {DataArticles[4].title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-baseColor bg-opacity-50 font-semibold text-mainColor w-fit rounded-full">
                            {DataArticles[4].categories}
                        </span>
                        <h2 className="">
                            {DataArticles[4].date}
                        </h2>
                    </div>
                    <Image
                        width={500}
                        height={500}
                        className="h-[70lvh] w-full rounded-3xl object-cover"
                        src={DataArticles[4].thumbnailImg}
                        alt="" />
                </div>
            </section>
        </>
    )
}