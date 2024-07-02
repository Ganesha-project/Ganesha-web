import { DataArticles } from "@/app/Database"

export const ArticleContent = () => {
    return (
        <>
        <section className="min-h-screen">
            <div>
                {DataArticles[4].content}
            </div>
        </section>
        </>
    )
}