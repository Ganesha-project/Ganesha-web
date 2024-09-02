import { BiSolidConversation, BiSolidReport } from "react-icons/bi";
import { FaBoltLightning, FaBuilding, FaMoneyBill1Wave, FaPersonShelter } from "react-icons/fa6";
import { IoChatbubble, IoLeaf, IoSparkles } from "react-icons/io5";
import { PiStampFill } from "react-icons/pi";
import { RiBankCardFill } from "react-icons/ri";
import { SiLightning } from "react-icons/si";
import { TbBulbFilled, TbListCheck } from "react-icons/tb";

export const accordionData = [
    {
        id: 1,
        title: "Menciptakan citra kredibilitas yang tinggi",
        description: [
            "Legalitas usaha membantu menciptakan citra kredibilitas yang tinggi di mata pelanggan dan mitra bisnis."
        ]
    },
    {
        id: 2,
        title: "Perlindungan hukum bagi pemilik usaha",
        description: [
            "Memastikan bahwa pemilik usaha memiliki perlindungan hukum yang kuat."
        ]
    },
    {
        id: 3,
        title: "Akses ke pembiayaan yang lebih baik",
        description: [
            "Legalitas usaha memungkinkan akses ke pembiayaan seperti pinjaman bank atau investasi dengan lebih mudah."
        ]
    },
    {
        id: 4,
        title: "Pemenuhan persyaratan bisnis di Indonesia",
        description: [
            "Memastikan bahwa bisnis memenuhi semua persyaratan hukum yang berlaku di Indonesia."
        ]
    },
    {
        id: 5,
        title: "Kemudahan beroperasi tanpa kendala hukum",
        description: [
            "Legalitas usaha memudahkan operasi bisnis tanpa menghadapi kendala hukum."
        ]
    },
    {
        id: 6,
        title: "Meningkatnya kepercayaan di mata pelanggan dan mitra bisnis",
        description: [
            "Legalitas usaha meningkatkan kepercayaan pelanggan dan mitra bisnis."
        ]
    }
];

export const DataPageLegal = {
    legalItems: [
        {
            "name": "Pendirian PT",
            "link": "pendirian-pt",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian CV",
            "link": "pendirian-cv",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Yayasan",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Firma Hukum",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Perkumpulan/Asosiasi",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
        {
            "name": "Pendirian Virtual Office | PKP | NIB",
            "link": "badan-usaha",
            "icon": <FaBuilding />
        },
    ],
    explainImg: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236549/GaneshaAssets/xbmc8qinkfrafxaiudw5.svg",
    head: (
        <h1>
            Apa Itu <span className="text-mainColor dark:text-baseColor rounded-3xl">Legalitas</span> Usaha?
        </h1>
    ),
    desc: (
        <h1>
            Legalitas Usaha adalah kepatuhan suatu bisnis dengan aturan hukum yang berlaku untuk memastikan bahwa <span className="font-extrabold">Bisnis mu beroperasi secara sah</span> dan sesuai dengan ketentuan hukum yang berlaku di Indonesia.
        </h1>
    ),
    whyUs: [
        {
            icon: <TbListCheck />,
            text: "Fasilitas Lengkap",
            description: "Ganesha Consulting menyediakan fasilitas lengkap melalui layanan legalitasnya, memastikan bahwa bisnis Anda diakui secara resmi di mata hukum."
        },
        {
            icon: <SiLightning />,
            text: "Cepat dan Terpercaya",
            description: "Layanan Ganesha Consulting tidak hanya cepat, tetapi juga terpercaya. Kami memastikan proses legalitas berjalan lancar dan sesuai dengan standar hukum yang berlaku."
        },
        {
            icon: <FaMoneyBill1Wave />,
            text: "Harga Terjangkau",
            description: "Menawarkan harga yang sangat terjangkau, Ganesha Consulting memahami pentingnya efisiensi biaya bagi bisnis Anda tanpa mengorbankan kualitas pelayanan."
        },
        {
            icon: <IoChatbubble />,
            text: "Konsultasi Gratis",
            description: "Ganesha Consulting memberikan fasilitas konsultasi gratis, memberikan pelanggan informasi dan panduan tambahan tanpa biaya tambahan."
        },
        {
            icon: <FaPersonShelter />,
            text: "Pelayanan Satu Atap",
            description: "Dengan Ganesha Consulting, Anda mendapatkan pelayanan satu atap yang mencakup semua kebutuhan legalitas bisnis Anda, memberikan kenyamanan dan efisiensi."
        }
    ],
    benefit: [
        {
            icon: <BiSolidConversation />,
            text: 'Free Konsultasi',
        },
        {
            icon: <PiStampFill />,
            text: 'Free Stempel Nama Perusahaan',
        },
        {
            icon: <BiSolidReport />,
            text: 'Free Template Laporan Keuangan',
        },
        {
            icon: <RiBankCardFill />,
            text: (
                <>
                    <p className="text-sm md:!text-lg">
                        Free Pembukaan Rekening Baru
                        <br />
                        <span className="font-bold text-2xl md:text-3xl bg-gradient-to-tr dark:from-gray-100 from-gray-800 dark:via-gray-300 via-gray-600 to-sky-800 dark:to-sky-300 bg-clip-text text-transparent">
                            BCA, MayBank, Sinarmas, Bank DKI
                        </span>
                    </p>

                </>
            ),
            desc: [
                {
                    bank: 'BCA',
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
                },
                {
                    bank: 'MayBank',
                    url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoVofoAlnBTk1SLiKLa_H8mZSGbrYOgOyj_ZDA_bxUAmeghVMUD9Hm11HPzCeg2ddZV-T1M4V3Nv1Hhmi0AuOxUiHFycqEuMF6eZr0j1Wc-hTz6JUMDzImK6zISbFFnluNHIljxUAK0--kTNbjgOxwJr9UCeX8hENG97ibxdElrdMYoswj2HXvHw/w640-h146/Maybank.png'
                },
                {
                    bank: 'Sinarmas',
                    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Bank_Sinarmas.png'
                },
                {
                    bank: 'Bank DKI',
                    url: 'https://cdn.healthtechalpha.com/static/corporatesById/895.png'
                }
            ]
        },
    ],
    whyLegal: [
        {
            title: "Kepatuhan Hukum",
            points: [
                {
                    heading: "Mematuhi Peraturan",
                    description: "Legalitas usaha memastikan bisnis mematuhi peraturan seperti perpajakan dan ketenagakerjaan, menghindari sanksi hukum."
                }
            ]
        },
        {
            title: "Kepercayaan & Kredibilitas",
            points: [
                {
                    heading: "Kepercayaan Pelanggan",
                    description: "Bisnis legal meningkatkan rasa aman dan kepercayaan dari pelanggan dan investor, serta membangun reputasi yang baik."
                }
            ]
        },
        {
            title: "Perlindungan Hukum",
            points: [
                {
                    heading: "Hak Kekayaan Intelektual",
                    description: "Legalitas melindungi merek dagang dan memberikan perlindungan hukum terhadap konflik yang mungkin timbul."
                }
            ]
        },
        {
            title: "Akses ke Pembiayaan",
            points: [
                {
                    heading: "Pinjaman dan Investasi",
                    description: "Hanya bisnis legal yang biasanya mendapatkan akses ke pinjaman, investasi, subsidi, dan hibah."
                }
            ]
        },
        {
            title: "Kemudahan Ekspansi",
            points: [
                {
                    heading: "Ekspansi Pasar",
                    description: "Legalitas mempermudah bisnis untuk memperluas pasar dan menjalin kemitraan baru."
                }
            ]
        },
        {
            title: "Kepastian Usaha",
            points: [
                {
                    heading: "Perlindungan Aset",
                    description: "Struktur legal seperti perseroan terbatas melindungi aset pribadi pemilik dari kewajiban bisnis."
                }
            ]
        }
    ],
    faqData: [
        {
            question: "Berapa lama pembuatan PT?",
            answer: "Lama Proses Pembuatan PT di Ganesha Consulting adalah 2 Hari Kerja setelah proses tandatangan akta pendirian."
        },
        {
            question: "Berapa banyak KBLI yang bisa dipilih?",
            answer: "Total KBLI yang bisa dipilih di Ganesha Consulting sebanyak 15 KBLI."
        },
        {
            question: "Apa saja syarat mendirikan PT?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Minimal dua pendiri yang merupakan WNI atau badan hukum Indonesia.,
                        </li>
                        <li>
                            Akta pendirian yang disahkan oleh notaris.,
                        </li>
                        <li>
                            Modal dasar minimal sesuai dengan ketentuan yang berlaku.,
                        </li>
                        <li>
                            Nama perusahaan yang disetujui oleh Kemenkumham.,
                        </li>
                        <li>
                            Domisili perusahaan yang jelas.,
                        </li>
                        <li>
                            NPWP perusahaan.,
                        </li>
                        <li>
                            Izin usaha dan dokumen pendukung lainnya.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apakah pendirian PT membutuhkan modal besar?",
            answer: "Modal dasar minimal PT ditentukan oleh ketentuan yang berlaku, dan dapat disesuaikan dengan kemampuan pendiri."
        },
        {
            question: "Apa itu KBLI?",
            answer: "KBLI, atau Klasifikasi Baku Lapangan Usaha Indonesia, adalah sistem klasifikasi yang digunakan untuk menggolongkan berbagai jenis kegiatan usaha di Indonesia. KBLI disusun oleh Badan Pusat Statistik (BPS) dan digunakan sebagai acuan resmi dalam pendaftaran dan perizinan usaha di Indonesia."
        },
        {
            question: "Apa Kegunaan KBLI?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Pendaftaran Usaha: Mengidentifikasi jenis kegiatan usaha saat pendaftaran.
                        </li>
                        <li>
                            Perizinan: Membantu pemerintah dalam mengeluarkan izin usaha.
                        </li>
                        <li>
                            Statistik dan Data: Mengumpulkan data ekonomi untuk perencanaan dan kebijakan.
                        </li>
                        <li>
                            Penyusunan Regulasi: Dasar dalam membuat kebijakan dan regulasi.
                        </li>
                        <li>
                            Analisis Ekonomi: Memfasilitasi analisis dan pengembangan sektor usaha.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Bolehkah pemegang saham menjadi pengurus PT?",
            answer: "Boleh! Pemegang saham boleh menjadi Direktur ataupun menjadi Komisaris. Namun tidak boleh menjadi Direktur yang merangkap sebagai Komisaris."
        },
        {
            question: "Bagaimana cara melakukan setor modal?",
            answer: "Modal bisa langsung saja disetorkan ke dalam kas perusahaan."
        },
        {
            question: "Apa saja jenis badan usaha selain PT?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            CV (Commanditaire Vennootschap): Persekutuan komanditer.
                        </li>
                        <li>
                            Firma (Fa): Persekutuan yang didirikan untuk menjalankan usaha bersama.
                        </li>
                        <li>
                            Perusahaan Perorangan: Usaha yang dimiliki dan dijalankan oleh satu orang.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa saja tanggung jawab pemegang saham dalam PT?",
            answer: "Pemegang saham bertanggung jawab atas kewajiban perusahaan sebatas jumlah saham yang dimiliki."
        }
    ],
    whyUsData: [
        {
            text: "Harga Ekonomis",
            icon: <FaMoneyBill1Wave />
        },
        {
            text: "Proses Super Cepat",
            icon: <FaBoltLightning />
        },
        {
            text: "Anti Ribet",
            icon: <IoLeaf />
        },
        {
            text: "Kreatif & Inovatif",
            icon: <TbBulbFilled />
        },
        {
            text: "Ditangani Profesional",
            icon: <IoSparkles />
        }
    ],
    legalTexts: [
        {
            number: '1',
            text: "Undang-Undang No. 40 Tahun 2007 tentang Perseroan Terbatas: Undang-undang ini menyediakan kerangka hukum untuk pendirian, pengelolaan, dan pembubaran PT. Regulasi ini mencakup persyaratan minimum, hak dan kewajiban pemegang saham, serta ketentuan-ketentuan lain yang berkaitan dengan PT."
        },
        {
            number: '2',
            text: "Peraturan Pemerintah No. 27 Tahun 2018 tentang Pendaftaran Perusahaan: Menetapkan persyaratan dan prosedur pendaftaran perusahaan, termasuk PT, serta proses perubahan data perusahaan."
        },
        {
            number: '3',
            text: "Peraturan Pemerintah No. 29 Tahun 2016 tentang Pekerja Asing: Menetapkan aturan terkait penggunaan pekerja asing di perusahaan, termasuk PT."
        },
        {
            number: '4',
            text: "Penting untuk selalu merujuk pada undang-undang terkait dan mendapatkan nasihat hukum untuk memahami secara menyeluruh dan akurat mengenai persyaratan dan regulasi PT."
        }
    ],
    whatPt: {
        desc: 'PT adalah singkatan dari yaitu bentuk badan hukum yang diterapkan pada perusahaan di Indonesia. Dengan status hukum terpisah, PT memungkinkan pemiliknya memiliki tanggung jawab terbatas sesuai dengan modal. PT memiliki aturan hukum dan persyaratan tertentu yang diatur oleh Undang-Undang Perseroan Terbatas di Indonesia.'
    }

};