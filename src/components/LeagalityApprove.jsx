import Image from "next/image"
import oss from "../public/BG/oss2.png"
import djp from "../public/BG/djp1.png"
import kemenkumham from "../public/BG/kemenkumham.png"

export const metadata = {
    title: 'Ganesha Consulting - Daftar Legalitas',
    description: 'Lihat daftar legalitas resmi yang dimiliki oleh Ganesha Consulting, termasuk registrasi dari Kementerian Hukum dan HAM, Direktorat Jenderal Pajak, dan OSS (Online Single Submission).',
    keywords: 'Ganesha Consulting, daftar legalitas, registrasi perusahaan, Kemenkumham, DJP, OSS, Online Single Submission',
    canonical: 'https://www.ganeshaconsulting.co.id',
    ogTitle: 'Ganesha Consulting - Daftar Legalitas',
    ogDescription: 'Lihat daftar legalitas resmi yang dimiliki oleh Ganesha Consulting, termasuk registrasi dari Kementerian Hukum dan HAM, Direktorat Jenderal Pajak, dan OSS (Online Single Submission).',
    twitterTitle: 'Ganesha Consulting - Daftar Legalitas',
    twitterDescription: 'Lihat daftar legalitas resmi yang dimiliki oleh Ganesha Consulting, termasuk registrasi dari Kementerian Hukum dan HAM, Direktorat Jenderal Pajak, dan OSS (Online Single Submission).',
  };
  

export const LegalityApprove = () => {
    return (
        <>
            <div className="lg:m-32 m-10 flex justify-center">
                <div className="border-[#762a7d] w-fit flex justify-center flex-col items-center border-8 rounded-[40px] p-5">
                    <h1 className="mb-10 bg-[#762a7d] text-transparent bg-clip-text font-extrabold text-5xl text-center lg:text-7xl rounded-[40px] p-7 lg:text-left">Kami Resmi Terdaftar Di</h1>
                    <div className="flex justify-between flex-col lg:flex-row gap-4 w-auto">
                        <div className="h-fit bg-white w-full lg:w-fit rounded-[40px] p-7">
                            <Image
                                src={djp}
                                className="w-full lg:w-[20vw] h-auto object-cover"
                            />
                        </div>
                        <div className="h-fit bg-white w-full lg:w-fit rounded-[40px] p-7">
                            <Image
                                src={oss}
                                className="w-full lg:w-[20vw] h-auto object-cover"
                            />
                        </div>
                        <div className="h-fit bg-white w-full lg:w-fit rounded-[40px] p-7">
                            <Image
                                src={kemenkumham}
                                className="w-full lg:w-[10vw] h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}