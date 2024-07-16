import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GiChestnutLeaf } from "react-icons/gi";
import { TbBulbFilled } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";

export const BodyCV = () => {
    return (
        <>
            <section className="space-y-20">
                <div className="md:px-24 px-5 2xl:px-80 text-gray-900">
                    <div className="flex flex-col md:flex-row gap-5">
                        <h1 className="text-center w-fit md:text-right text-3xl md:text-5xl md:w-[50vw] h-auto font-bold bg-orange-200 p-5 md:p-10 self-end rounded-[40px]">
                            Pengertian <span className="bg-orange-500 text-transparent bg-clip-text">CV</span>
                        </h1>
                        <p className="text-2xl leading-7 tracking-wide bg-orange-200 p-5 md:p-10 rounded-[40px]">
                            CV (commanditaire vennootschap) adalah salah satu bentuk badan usaha di Indonesia yang dibentuk minimal dua orang atau lebih, tujuannya agar tercapainya cita-cita bersama. Oleh karena itu dalam CV terdapat dua sekutu yang berbeda. Yaitu sekutu komanditer dan sekutu komplementer.
                        </p>
                    </div>
                </div>

                <div className="md:px-24 px-5 2xl:px-80 text-gray-900">
                    <div className="rounded-[40px] bg-orange-200 h-auto w-auto">
                        <div>
                            <p className="bg-orange-500 text-white rounded-[40px] uppercase text-2xl md:text-4xl font-bold p-5 text-center">
                                Undang - Undang terkait CV di Indonesia
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex mt-4 mx-5 gap-4">
                                <p className="font-medium text-lg md:text-xl text-justify bg-orange-100 p-5 rounded-[40px]">
                                    Ketentuan, prosedur dan syarat mendirikan Commanditaire Vennootschap CV diatur dalam Kitab Undang-Undang Hukum Dagang KUHD. Seiring dengan perkembangan zaman, ketentuan yang berkaitan dengan pendirian CV atau yang dikenal juga dengan Persekutuan Komanditer telah mengalami banyak perubahan, di antaranya melalui Permenkumham 17/2018.
                                </p>
                            </div>
                            <div className="flex mt-4 mx-5 gap-4">
                                <p className="font-medium text-lg md:text-xl text-justify bg-orange-100 p-5 rounded-[40px]">
                                    Dalam Pasal 1 angka 1 Permenkumham 17/2018 dinyatakan bahwa Persekutuan Komanditer atau CV adalah persekutuan yang didirikan oleh satu atau lebih sekutu komanditer dengan satu atau lebih sekutu komplementer, untuk menjalankan usaha secara terus menerus.
                                </p>
                            </div>
                        </div>
                        <div className=" mt-4">
                            <p className="bg-orange-500 text-white rounded-[40px] uppercase text-xl font-bold p-5 text-center">
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
