export const whyBadanUsaha = [
    {
        title: "Kepatuhan Hukum",
        points: [
            {
                heading: "Mematuhi Undang-Undang",
                description: "Legalitas usaha memastikan bisnis mematuhi peraturan hukum, menghindari sanksi dan denda."
            }
        ]
    },
    {
        title: "Kepercayaan dan Kredibilitas",
        points: [
            {
                heading: "Kepercayaan Pelanggan",
                description: "Legalitas meningkatkan kepercayaan pelanggan dan reputasi bisnis di mata publik."
            }
        ]
    },
    {
        title: "Perlindungan Hukum",
        points: [
            {
                heading: "Perlindungan Kekayaan Intelektual",
                description: "Legalitas melindungi merek dagang, paten, dan memberikan perlindungan hukum dari konflik."
            }
        ]
    },
    {
        title: "Akses ke Pembiayaan",
        points: [
            {
                heading: "Pinjaman dan Investasi",
                description: "Bisnis legal lebih mudah mendapatkan pinjaman, investasi, serta akses subsidi dan hibah."
            }
        ]
    },
    {
        title: "Kemudahan Ekspansi",
        points: [
            {
                heading: "Ekspansi Pasar",
                description: "Legalitas mempermudah ekspansi bisnis ke pasar baru dan menjalin kemitraan strategis."
            }
        ]
    },
    {
        title: "Kepastian Usaha",
        points: [
            {
                heading: "Perlindungan Aset Pribadi",
                description: "Legalitas melindungi aset pribadi pemilik dan mendukung keberlanjutan usaha jangka panjang."
            }
        ]
    }
];

export const undangUndangTerkait = [
    {
        number: '1',
        text: "Pendirian Yayasan",
        points: [
            "Undang-Undang Nomor 16 Tahun 2001 tentang Yayasan",
            "Mengatur tentang pendirian, pengelolaan, dan tata kelola yayasan, termasuk ketentuan mengenai tujuan, struktur organisasi, dan kewajiban administratif yayasan."
        ]
    },
    {
        number: '2',
        text: "Pendirian Perkumpulan",
        points: [
            "Undang-Undang Nomor 17 Tahun 2013 tentang Organisasi Kemasyarakatan",
            "Menyediakan regulasi untuk pendirian, pengelolaan, dan pembubaran organisasi kemasyarakatan yang dapat mencakup perkumpulan. Mengatur tentang hak dan kewajiban, serta tata cara pendaftaran dan pengawasan."
        ]
    },
    {
        number: '3',
        text: "Pendirian Asosiasi",
        points: [
            "Undang-Undang Nomor 17 Tahun 2013 tentang Organisasi Kemasyarakatan",
            "Juga berlaku untuk asosiasi, karena asosiasi adalah jenis organisasi yang memiliki tujuan tertentu dan berfungsi untuk kepentingan anggotanya. Mengatur tata cara pendirian, pengelolaan, dan pendaftaran asosiasi."
        ]
    },
    {
        number: '4',
        text: "Pendirian Firma Hukum",
        points: [
            "Undang-Undang Nomor 40 Tahun 2007 tentang Perseroan Terbatas (UU PT)",
            "Meskipun khusus mengatur Perseroan Terbatas (PT), beberapa prinsip dalam UU PT juga bisa diterapkan untuk firma hukum dalam hal struktur dan administrasi."
        ]
    }
];

export const dataPageBadanUsaha = {
    faqDataBU: [
        {
            question: "Apa itu Yayasan?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Yayasan adalah badan hukum yang didirikan untuk tujuan sosial, kemanusiaan, atau keagamaan. Yayasan tidak bertujuan untuk mencari keuntungan dan memiliki aset yang digunakan untuk mencapai tujuan sosialnya.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa syarat pendirian Yayasan?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>Pendiri: Minimal dua orang sebagai pendiri.</li>
                        <li>Akta Pendirian: Dibuat oleh notaris.</li>
                        <li>Anggaran Dasar: Berisi tujuan, struktur organisasi, dan cara pengelolaan.</li>
                        <li>Kepengurusan: Memiliki pengurus dan penasihat.</li>
                        <li>Domisili: Alamat yang jelas.</li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa itu Perkumpulan?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Perkumpulan adalah organisasi yang terdiri dari sekelompok orang yang bergabung untuk tujuan tertentu. Biasanya perkumpulan berfokus pada kegiatan sosial, profesional, atau kegiatan yang bersifat komunitas.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa syarat mendirikan Perkumpulan?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>Pendiri: Minimal tiga orang.</li>
                        <li>Akta Pendirian: Dibuat oleh notaris.</li>
                        <li>Anggaran Dasar: Menyusun struktur, tujuan, dan cara pengelolaan.</li>
                        <li>Pendaftaran: Mengurus pendaftaran di instansi terkait.</li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa itu Asosiasi?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Asosiasi adalah organisasi yang dibentuk untuk tujuan tertentu yang biasanya melibatkan anggota dengan kepentingan yang sama, seperti profesional atau hobi.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa syarat mendirikan Asosiasi?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>Pendiri: Minimal dua orang.</li>
                        <li>Akta Pendirian: Dibuat oleh notaris.</li>
                        <li>Anggaran Dasar: Mencakup struktur, tujuan, dan pengelolaan.</li>
                        <li>Pendaftaran: Harus didaftarkan di instansi pemerintah yang relevan.</li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa itu Firma Hukum?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Firma hukum adalah bentuk badan usaha di bidang hukum yang dibentuk oleh sekelompok pengacara atau konsultan hukum yang bekerja sama.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Apa syarat mendirikan Firma Hukum?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>Pendiri: Beberapa orang yang memenuhi syarat sebagai pengacara.</li>
                        <li>Akta Pendirian: Dibuat oleh notaris.</li>
                        <li>Pendaftaran: Harus terdaftar di Pengadilan Negeri.</li>
                        <li>Lisensi: Memiliki izin praktik dari organisasi profesi hukum.</li>
                    </ul>
                </>
            )
        },
        {
            question: "Apakah Yayasan dapat melakukan kegiatan komersial?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Ya, yayasan dapat melakukan kegiatan komersial untuk mendukung tujuan sosialnya, namun keuntungan dari kegiatan tersebut harus digunakan untuk kegiatan yang sesuai dengan tujuan yayasan dan tidak boleh dibagikan kepada pendiri atau pengurus.
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: "Bagaimana mengurus perubahan struktur atau anggaran dasar di Badan Usaha Diatas?",
            answer: (
                <>
                    <ul className="list-item list-decimal mx-5">
                        <li>
                            Yayasan: Perubahan harus disetujui oleh pengurus dan diubah akta pendirian di hadapan notaris, lalu didaftarkan ulang di Kemenkumham.
                        </li>
                        <li>
                            Perkumpulan dan Asosiasi: Perubahan harus disetujui oleh anggota dan diubah akta pendirian di hadapan notaris, lalu didaftarkan di Kemenkumham.
                        </li>
                        <li>
                            Firma Hukum: Perubahan harus diubah dalam akta pendirian oleh notaris dan diberitahukan kepada Pengadilan Negeri.
                        </li>
                    </ul>
                </>
            )
        }
    ]
}


