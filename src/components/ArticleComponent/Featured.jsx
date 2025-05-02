import Image from "next/image"
import Link from "next/link"
import { HighlightCarousel } from "./HightlightCarousel"
import { FaFire } from "react-icons/fa6"
import { formatDateTime } from "@/helper/formatDateTime"
import { slugify } from "@/helper/slugify"
import { TextMainGradient } from "@/utils/ReueseClass"
const baseURLImg = process.env.NEXT_PUBLIC_URL_STRAPI_IMG;

export const Featured = ({ data }) => {
    return (
        <>
            <div className="md:mx-0 mx-5">
                <h1 className={`text-left text-xl md:text-3xl font-semibold ${TextMainGradient}`}>
                    Ganesha News & Article
                </h1>
            </div>
            <HighlightCarousel data={data} />
        </>
    )
}
