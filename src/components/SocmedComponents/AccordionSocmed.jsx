import { FaInfoCircle } from "react-icons/fa";

const accordionData = [
    {
        id: 1,
        title: "Membangun Merek dan Identitas Online",
        description: [
            "Sosial Media Manajemen membantu perusahaan dalam membangun dan mengelola citra merek mereka secara online.",
            "Memastikan konsistensi pesan, gaya visual, dan nilai-nilai merek di seluruh platform media sosial."
        ],
        buttonClass: "bg-violet-500",
        contentClass: "bg-violet-500",
    },
    {
        id: 2,
        title: "Interaksi dengan Pelanggan",
        description: [
            "Menyediakan platform untuk berinteraksi langsung dengan pelanggan.",
            "Menanggapi pertanyaan, umpan balik, dan komentar pelanggan secara cepat dan efektif."
        ],
        buttonClass: "bg-violet-600",
        contentClass: "bg-violet-600",
    },
    {
        id: 3,
        title: "Pemasaran dan Promosi",
        description: [
            "Membantu perusahaan dalam merancang dan melaksanakan kampanye pemasaran online.",
            "Menjangkau audiens target melalui iklan yang disesuaikan dan promosi produk atau layanan."
        ],
        buttonClass: "bg-violet-700",
        contentClass: "bg-violet-700",
    },
    {
        id: 4,
        title: "Analisis Kinerja dan Penelitian Pasar",
        description: [
            "Menyediakan alat analisis untuk melacak kinerja kampanye dan konten.",
            "Memantau tren pasar dan mengumpulkan wawasan yang dapat membantu perusahaan dalam mengambil keputusan strategis."
        ],
        buttonClass: "bg-violet-800",
        contentClass: "bg-violet-800",
    }
];

export const AccordionSocmed = () => {
    return (
        <div className="m-10 flex-col lg:flex-row lg:m-32 flex gap-5 items-center justify-center">
            <h1 className="mt-5 text-gray-900 dark:text-gray-800 md:dark:text-baseColor md:bg-transparent lg:bg-transparent lg:rounded-none bg-violet-200 rounded-[40px] lg:p-0 p-5 font-bold text-3xl md:text-5xl lg:text-7xl w-full lg:w-[40vw] capitalize text-center lg:text-right">
                Kenapa perusahaan{' '}
                <span className="font-extrabold text-violet-700">membutuhkan</span> Sosial Media Manajemen
            </h1>
            <div className="lg:left-1/2 -ml-0.5 w-2.5 h-[55vh] rounded-lg bg-violet-900 hidden lg:block"></div>

            <div className="space-y-3">
                {/* Accordion */}
                {accordionData.map(({ id, title, description, buttonClass, contentClass }) => (
                    <div key={id} className={`collapse collapse-plus h-fit ${buttonClass}`}>
                        <input type="radio" name="accordion" id={`item${id}`} />
                        <div className={`!rounded-full collapse-title text-xl font-medium flex items-center gap-2 ${buttonClass} text-white`}>
                            <FaInfoCircle color='white' /> {title}
                        </div>
                        <div className={`collapse-content ${contentClass}`}>
                            <ul className="ps-5 text-white list-disc">
                                {description.map((text, index) => (
                                    <li key={index}>
                                        <p className="mb-2 text-lg">{text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
