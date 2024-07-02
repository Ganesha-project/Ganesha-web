import { DataArticles } from "@/app/Database";
import { ArticleContent } from "@/components/ArticleComponent/ArticleDetail/ArticleContent";
import { BannerArticleDetail } from "@/components/ArticleComponent/ArticleDetail/BannerArticleDetail";
import Breadcrumbs from "@/components/ArticleComponent/ArticleDetail/Breadcrumbs";

import { SideRec } from "@/components/ArticleComponent/ArticleDetail/SideRec";

export default async function ArticleDetail() {
    return (
        <>
            <section className="flex md:flex-row flex-col gap-20 mx-5 md:mx-24">
                <div className="md:w-[70%]">
                    <BannerArticleDetail />
                    <ArticleContent />
                </div>
                <div className="md:w-[30%]">
                    <SideRec data={DataArticles} />
                </div>
            </section>
        </>
    )
}