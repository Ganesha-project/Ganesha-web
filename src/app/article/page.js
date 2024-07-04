import { ArticleCard } from "@/components/ArticleComponent/ArticleCard";
import { BannerArticle } from "@/components/ArticleComponent/Banner";
import { Featured } from "@/components/ArticleComponent/Featured";
import { Landing } from "@/components/ArticleComponent/Landing";
import { Searchbar } from "@/components/ArticleComponent/Searchbar";
import { TilesFilter } from "@/components/ArticleComponent/TilesFilter";
import { DataArticles } from "../Database";

export default async function ArticlesPage() {

    return (
        <>
            <BannerArticle >
                <Featured  />
            </BannerArticle>
            <section className="md:px-24 px-5 space-y-5 pt-24 mb-10">
                <Searchbar />
                <TilesFilter />
                <ArticleCard data={DataArticles.new} tag={DataArticles.label.new} />
                <ArticleCard data={DataArticles.trend} tag={DataArticles.label.trend} />
            </section>
        </>
    );
}