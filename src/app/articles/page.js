import { ArticleCard } from "@/components/ArticleComponent/ArticleCard";
import { BannerArticle } from "@/components/ArticleComponent/Banner";
import { Featured } from "@/components/ArticleComponent/Featured";
import { Landing } from "@/components/ArticleComponent/Landing";
import { Searchbar } from "@/components/ArticleComponent/Searchbar";
import { TilesFilter } from "@/components/ArticleComponent/TilesFilter";

export default async function ArticlesPage() {

    return (
        <>
            <BannerArticle >
                <Landing />
                <Searchbar />
                <TilesFilter />
                <Featured />
            </BannerArticle>
            <ArticleCard />
        </>
    );
}