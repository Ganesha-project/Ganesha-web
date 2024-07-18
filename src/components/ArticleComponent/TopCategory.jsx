export const TopCategory = ({ category, desc }) => {
    return (
        <>
            <section className="pt-24 md:px-24 px-5 mb-5">
                <div className="p-5 bg-baseColor bg-opacity-25 rounded-r-3xl max-w-[70lvh] w-fit -ml-24 pl-24">
                    <h1 className="md:text-lg">
                        Browse the articles,
                    </h1>
                    <h2 className="md:text-3xl text-xl font-semibold">
                        {category?.ArticleCategory || 'Pembuatan PT'}
                    </h2>
                    {/* <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. laudantium autem ad quo repellat?
                    </p> */}
                </div>
            </section>
        </>
    )
}