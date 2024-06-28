import Image from "next/image"

export const BannerArticle = ({ children }) => {
    return (
        <>
            <section className="min-h-screen">
                <div className="relative flex flex-col h-screen">
                    <Image
                        className="w-full min-h-screen object-cover absolute"
                        width={500}
                        height={500}
                        src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                    <span className="w-full from-transparent dark:from-[#ffffff] bg-gradient-to-t to-[#ffffff] absolute z-10 h-[10%] bottom-0"></span>
                    <div className="md:mt-auto md:mb-24 mt-[20lvh] md:mx-24 flex flex-col gap-5 z-10">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}