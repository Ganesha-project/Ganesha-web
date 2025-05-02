import { dataAboutus } from "@/app/Database"

export const About = () => {
    return (
        <>
            <section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAEEFC" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,181.3C672,171,768,85,864,74.7C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className="bg-[#FAEEFC] -mt-4 md:-mt-24 md:px-24 px-5 flex gap-5 md:flex-row flex-col items-center justify-center">
                    <img
                        src="https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236551/GaneshaAssets/egneilhuh6m2daouhj4a.svg"
                        alt=""
                    />
                    <div className="space-y-3 text-neutral-800 text-justify">
                        <h1 className="text-3xl text-[rgb(238,140,255)] font-semibold">
                            About Us
                        </h1>
                        {dataAboutus.content}
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAEEFC" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,181.3C672,171,768,85,864,74.7C960,64,1056,128,1152,149.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>
        </>
    )
}