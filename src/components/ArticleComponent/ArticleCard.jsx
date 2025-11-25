import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/helper/slugify";

const sendArticleCounter = async (articleId) => {
  try {
    const res = await fetch(`https://ganesha-cms.vercel.app/api/counter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refId: articleId,
        type: "ARTICLE",
      }),
    });

    const data = await res.json();
    // console.log("Counter Article:", data);

  } catch (err) {
    console.log("Counter error:", err);
  }
};


// Status badge component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    DRAFT: { color: "bg-yellow-500/80", text: "Draft" },
    PUBLISHED: { color: "bg-green-500/80", text: "Published" },
    ARCHIVED: { color: "bg-red-500/80", text: "Archived" },
  };

  const config = statusConfig[status] || statusConfig.DRAFT;

  return (
    <div className={`px-2 py-1 border ${config.color} border-secondaryGray/5 text-white dark:border-secondaryColor/20 text-[10px] font-bold tracking-wider backdrop-blur-xl rounded-lg`}>
      {config.text}
    </div>
  );
};

export const ArticleCard = ({
  data,
  moms,
  isSearching,
  loadMore,
  items,
  loadNew,
  showStatus = false,
}) => {
  // console.log("====================================");
  // console.log(data);
  // console.log("====================================");

  return (
    <>
      <section className="space-y-5">
        {moms}
        
        <div className="md:grid md:grid-cols-4 flex flex-col gap-5">
          {data?.data?.map((el, idx) => {
            // Extract data from new API structure
            const categoryName = el?.category?.name || el?.attributes?.category?.data?.attributes?.name || "Uncategorized";
            const categorySlug = el?.category?.slug || slugify(categoryName);
            const title = el?.title || el?.attributes?.Title;
            const thumbnailUrl = el?.thumbnail?.url || el?.attributes?.Thumbnail?.data?.attributes?.url;
            const slug = el?.slug || el?.attributes?.Slug || slugify(title);
            const trending = el?.trending || el?.highlight || el?.attributes?.Trending || el?.attributes?.highlight;
            const status = el?.status || el?.attributes?.status;

            return (
              <Link
                key={el?.id || idx}
                href={'/article' + "/" + slug}
                className="md:min-h-[60lvh] group rounded-3xl space-y-2 p-0 flex flex-col justify-between duration-300"
                onClick={() => {sendArticleCounter(el.id)}}
              >
                <div className="space-y-1 flex flex-col gap-2 w-full h-[50lvh] md:h-full relative">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-3xl md:w-full">
                    <img
                      className="w-full h-[50lvh] md:h-[60lvh] object-cover rounded-3xl group-hover:scale-125 duration-150"
                      width={500}
                      height={500}
                      src={thumbnailUrl}
                      alt={title}
                    />
                  </div>

                  {/* Title - Bottom Overlay */}
                  <div className="absolute z-10 bottom-0 left-0 m-5">
                    <h1 className="font-bold text-secondaryGray group-hover:text-white group-hover:scale-105 duration-150 truncate-last">
                      {title}
                    </h1>
                  </div>

                  {/* Badges - Top Overlay */}
                  <div className="absolute z-10 top-0 left-0 flex items-center gap-1 mx-5 my-4 flex-wrap">
                    {/* Status Badge (if enabled) */}
                    {/* {showStatus && status && (
                      <StatusBadge status={status} />
                    )} */}

                    {/* Trending Badge */}
                    {trending === true && (
                      <div className="shimmer-animate px-2 py-1 border bg-darkColor/10 border-secondaryGray/5 text-secondaryYellow dark:border-secondaryColor/20 text-[10px] font-bold tracking-wider backdrop-blur-xl rounded-lg">
                        Populer
                      </div>
                    )}

                    {/* Category Badge */}
                    <p className="dark:text-secondaryDark/60 text-secondaryGray/90 px-2 py-1 border border-mainColor/5 dark:border-secondaryColor/20 bg-darkColor/10 text-[10px] font-bold tracking-wider backdrop-blur-xl rounded-lg">
                      {categoryName}
                    </p>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="gradient-blur h-[40%] duration-300 ease-in-out bg-black/40"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}  