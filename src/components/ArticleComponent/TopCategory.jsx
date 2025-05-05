import { TextMainGradient } from "@/utils/ReueseClass"

export const TopCategory = ({ category, desc }) => {
    return (
        <>
            <section className="pt-24 md:px-24 px-5 mb-5">
                <div className="p-5 bg-baseColor/0 bg-opacity-25 rounded-r-3xl max-w-[70lvh] w-fit -ml-24 pl-24">
                    <h1 className="md:text-lg">
                        Jelajahi artikel
                    </h1>
                    <h2 className={`${TextMainGradient} md:text-3xl text-xl font-semibold`}>
                        {category?.ArticleCategory || 'Pembuatan PT'}
                    </h2>
                </div>
            </section>
        </>
    )
}