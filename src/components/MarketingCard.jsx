import { TextGradientYellowPurple, TextMainGradient } from "@/utils/ReueseClass";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Title } from "./Title";

export const MarketingCard = () => {
    const marketingCards = [
        {
            id: 1,
            name: "Erlin",
            waLink: "https://api.whatsapp.com/send?phone=628887127000",
            imageUrl: "https://ganesha-cms.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1765793823%2Fcms_media%2F3055546ff36a25fc1722eed00a53944a.jpg&w=3840&q=75",
            bio: "Client & marketing Specialist Ganesha Consulting.",
            brand: "Ganesha Consulting"
        },
        {
            id: 2,
            name: "Guntur",
            waLink: "https://api.whatsapp.com/send?phone=628887127000",
            imageUrl: "https://ganesha-cms.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1765793849%2Fcms_media%2F585cf50d27afa5340e80d4010c7056f9.jpg&w=3840&q=75",
            bio: "Konsultasikan segala kebutuhan Bisnis mu dengan Kami.",
            brand: "Ganesha Consulting"
        },
        {
            id: 3,
            name: "Ghevira",
            waLink: "https://api.whatsapp.com/send?phone=628871510044",
            imageUrl: "https://ganesha-cms.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzrh2ogbn%2Fimage%2Fupload%2Fv1765793838%2Fcms_media%2Ff7fe7b82b51245469db441f8934be44b.jpg&w=3840&q=75",
            bio: "Menangani operasional dan ruang kerja di Go Space.",
            brand: "Go Space"
        }
    ];

    return (
        <>
            <section className="margin spacing space-y-10">
                <Title text1={"Konsultasi Dengan"} text={"Team Marketing Kami"} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {marketingCards.map((el, idx) => (
                        <Link
                            key={idx}
                            className="relative rounded-parent overflow-hidden group"
                            href=""
                        >
                            <Image
                                width={500}
                                height={500}
                                src={el.imageUrl}
                                alt={el.name}
                                className="bg-mainColor object-cover group-hover:scale-115 duration-200 "
                            />

                            <div className="absolute top-0 left-0 px-3 py-3 bg-white dark:bg-black rounded-br-3xl font-bold text-sm tracking-wider">
                                <div className="rounded-out-tr-3xl bg-white dark:bg-black"></div>
                                <div className="rounded-out-lb-3xl bg-white dark:bg-black"></div>
                                <span className={`${marketingCards.length - 1 === idx ? TextGradientYellowPurple : TextMainGradient}`}>
                                    {el.brand}
                                </span>
                            </div>
                            <div className="absolute bottom-0 w-full h-[30%] linear-blur-to-t dark:bg-lightColor/50 bg-darkColor/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 m-2.5">
                                <div className="relative text-xl font-semibold tracking-wide px-3 pt-2 bg-white dark:bg-black rounded-t-2xl w-fit">
                                    <div className="rounded-out-br-2xl bg-white dark:bg-black"></div>
                                    {el.name}
                                </div>
                                <div className="flex flex-col gap-3 text-sm px-3 py-2 bg-white dark:bg-black rounded-b-3xl rounded-tr-2xl">
                                    <span className="line-clamp-1">
                                        {el.bio}
                                    </span>
                                    <Link href={el.waLink}>
                                        <Button
                                            className={"bg-linear-to-br from-green-400 via-green-500 to-green-600 text-white rounded-xl w-full mb-1 text-xs hover:brightness-90"}
                                        >
                                            <FaWhatsapp /> Chat On WhatsApp
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}