import Link from "next/link"
import { WALINK } from "../Links/Links"

export const CopyWriting = ({ data }) => {
    return (
        <>
            <section className="md:mx-24 mx-5 md:my-20 my-10 flex flex-col items-center justify-center">
                <h1 className="min-h-24 py-3 md:text-6xl text-3xl font-bold bg-gradient-to-bl from-darkColor to-sky-700 dark:from-neutral-100 dark:to-sky-300 bg-clip-text text-transparent text-center">
                    {data.head}
                </h1>
                <p className="text-center md:text-xl bg-gradient-to-bl from-darkColor to-sky-700 dark:from-neutral-100 dark:to-sky-300 bg-clip-text text-transparent">
                    {data.body}
                </p>
                <button className="ease-in-out duration-300 hover:scale-95 shadow-[0px_2px_35px_0px_#5dbed6c2] hover:shadow-[0px_2px_50px_0px_#48b0cae9] dark:hover:shadow-[0px_2px_50px_0px_#5dbed6e9] dark:hover:brightness-125 hover:brightness-105 mt-10 font-bold text-lg px-5 py-3 bg-gradient-to-bl dark:from-darkColor dark:to-sky-700 from-secondaryneutral to-sky-300 rounded-full">
                    <Link href={WALINK}>
                        Konsultasi Sekarang
                    </Link>
                </button>
            </section>
        </>
    )
}