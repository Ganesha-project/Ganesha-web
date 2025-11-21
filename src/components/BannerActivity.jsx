import Image from "next/image";

export const BannerActivity = ({ data, title, desc }) => {
    // const bannerImage = data?.[0]?.imageUrl?.[0] || "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const bannerImage = "https://i.pinimg.com/736x/e2/db/2e/e2db2e63c4984d8010c7a1ec3735efb8.jpg";
    
    return (
        <section className="pt-16 sm:pt-20">
            <div className="mx-5 md:mx-24 2xl:mx-80 mb-1 md:mb-2 overflow-hidden rounded-3xl">
                <div className="w-full bg-darkColor h-[30lvh] relative group">
                    <img
                        className="group-hover:scale-110 h-full w-full object-cover duration-300"
                        src={bannerImage}
                        alt="Activity Banner"
                    />
                    {/* <div className="absolute inset-0 bg-lightColor/60"></div> */}
                    <div className="absolute inset-0 w-full h-full">
                        <div className="flex flex-col gap-1 md:gap-3 items-center justify-center h-full px-10">
                            <h1 className="text-2xl pb-1 md:text-4xl font-bold bg-gradient-to-tr from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
                                {title}
                            </h1>
                            <p className="text-sm md:text-base text-center font-medium bg-gradient-to-tr from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};