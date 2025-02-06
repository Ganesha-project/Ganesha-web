export const BannerActivity = () => {
  
    return (
        <section className="pt-16">
            <div className="mx-5 md:mx-24 2xl:mx-80 mb-1 md:mb-2 overflow-hidden rounded-3xl">
                <div className="w-full bg-darkColor h-[40lvh] relative group">
                    <img
                    className="group-hover:scale-150 h-full w-full object-cover duration-300"
                        src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-bgLight/60"></div>
                    <div className="absolute inset-0 w-full h-full">
                        <div className="flex flex-col gap-1 md:gap-3 items-center justify-center h-full px-10">
                            <h1 className="text-2xl pb-1 md:text-4xl font-bold bg-gradient-to-tr from-gray-800 via-gray-600 to-sky-800  bg-clip-text text-transparent">
                                Our  Activity
                            </h1>
                            <p className="text-sm md:text-base text-center font-medium bg-gradient-to-tr from-gray-800 via-gray-600 to-sky-800  bg-clip-text text-transparent">
                                Update terbaru seputar aktivitas, program, dan proyek Ganesha Consulting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
