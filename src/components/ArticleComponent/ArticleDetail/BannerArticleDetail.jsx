import Breadcrumbs from "./Breadcrumbs"
import { formatDateTime } from "@/helper/formatDateTime";
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const BannerArticleDetail = ({ data }) => {
    let detail = data?.attributes
    return (
        <>
            <section className="min-h-screen pt-10">
                <div className="flex justify-center flex-col gap-2 h-screen relative">
                    <Breadcrumbs slug={detail?.Slug} categories={detail?.category?.data?.attributes?.ArticleCategory} title={detail?.Title} />
                    <h1 className="font-bold text-3xl dark:text-white text-gray-900">
                        {detail?.Title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-baseColor dark:text-white bg-opacity-50 text-sm font-semibold text-mainColor w-fit rounded-full">
                            {detail?.category?.data?.attributes?.ArticleCategory}
                        </span>
                        <h2>
                            {formatDateTime(detail?.PublishTime)}
                        </h2>
                    </div>
                    <img
                        width={500}
                        height={500}
                        className="h-[70lvh] z-30 w-full rounded-3xl object-cover"
                        src={`${baseURLImg}${detail?.Thumbnail?.data?.attributes?.url}`}
                        alt={detail?.Title}
                    />
                    <img
                        width={30}
                        height={30}
                        className="absolute bottom-20 h-[20lvh] w-[200lvw] rounded-3xl object-cover blur-[100px]"
                        src={`${baseURLImg}${detail?.Thumbnail?.data?.attributes?.url}`}
                        alt={detail?.Title}
                    />
                </div>
            </section>
        </>
    )
}