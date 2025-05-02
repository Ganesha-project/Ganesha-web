import Image from "next/image"

export const BannerArticle = ({ children }) => {
    return (
        <>
            <section className="md:min-h-screen">
                <div className="relative flex flex-col min-h-screen">
                    <Image
                        className="w-full h-full object-cover absolute dark:invert dark:hue-rotate-180 blur-xl brightness-110 scale-105 opacity-50"
                        width={500}
                        height={500}
                        src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                    {/* <span className="w-full bg-gradient-to-b from-transparent to-white dark:to-black absolute z-10 h-[10%] -bottom-5"></span> */}
                    <div className="flex items-center justify-center flex-1 z-10 px-6 md:px-24 2xl:px-80">
                        <div className="flex flex-col gap-5">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
