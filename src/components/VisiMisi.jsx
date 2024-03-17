import Image from "next/image"
import visi from "../public/BG/mision.jpg"

export const metadata = {
    title: 'Ganesha Consulting - Visi dan Misi',
    description: 'Temukan visi dan misi Ganesha Consulting yang menekankan kreativitas, solusi bisnis terpercaya, dan komitmen terhadap kepuasan klien. Kami menyediakan layanan seperti desain inovatif, pengembangan website, konsultasi bisnis, perpajakan, dan manajemen izin usaha.',
    keywords: 'Ganesha Consulting, visi dan misi, kreativitas, solusi bisnis, pengembangan website, konsultasi bisnis, perpajakan, manajemen izin usaha',
    canonical: 'https://ganeshaconsulting.co.id',
    ogTitle: 'Ganesha Consulting - Visi dan Misi',
    ogDescription: 'Temukan visi dan misi Ganesha Consulting yang menekankan kreativitas, solusi bisnis terpercaya, dan komitmen terhadap kepuasan klien. Kami menyediakan layanan seperti desain inovatif, pengembangan website, konsultasi bisnis, perpajakan, dan manajemen izin usaha.',
    twitterTitle: 'Ganesha Consulting - Visi dan Misi',
    twitterDescription: 'Temukan visi dan misi Ganesha Consulting yang menekankan kreativitas, solusi bisnis terpercaya, dan komitmen terhadap kepuasan klien. Kami menyediakan layanan seperti desain inovatif, pengembangan website, konsultasi bisnis, perpajakan, dan manajemen izin usaha.',
};


export const VisiMisi = () => {
    return (
        <>
            <div className="m-5 lg:m-32 lg:h-[150vh]">
                <div className="flex justify-center lg:flex-row flex-col relative">
                    <Image
                        src={visi}
                        className="w-full h-auto object-cover absolute"
                    />
                    <div className="z-40 p-4 lg:p-10 lg:ml-[40vw] mt-[70vh] lg:mt-[15vw]">
                        <div className="bg-[#d1afdb] rounded-[40px] backdrop-blur-[10px] p-4 lg:p-10">
                            <h1 className="text-3xl lg:text-6xl font-extrabold">Visi Kami</h1>
                            <p className="text-lg lg:text-2xl font-medium mt-2 lg:mt-5">
                                Menjadikan pusat kreativitas dan solusi bisnis terkemuka kepada klien untuk mencapai potensi penuh melalui desain inovatif, pengembangan website, konsultasi bisnis, Perpajakan dan layanan pengelolaan izin usaha yang handal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-8 md:m-32 justify-center">
                <h1 className="text-3xl lg:text-6xl font-extrabold mb-5">
                    Misi Kami
                </h1>
                <div className="flex flex-col gap-3">
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Berakselerasi Kreativitas Anak Muda
                        </div>
                        <div className="collapse-content">
                            <p>
                                Memberdayakan generasi muda untuk meraih potensi penuh client dengan memberikan platform bagi client untuk mengekspresikan kreativitas melalui desain, teknologi, dan inovasi.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Memberkan Kode untuk Masa Depan
                        </div>
                        <div className="collapse-content">
                            <p>
                                Membangun website yang bukan hanya platform digital, tetapi simfoni teknologi, menggabungkan kreativitas yang berdasarkan ilmu dipadukan dengan tampilan yang menginspirasi.3. Konsultasi Bisnis Terpercaya: Menyediakan konsultasi bisnis yang komprehensif untuk membantu klien merumuskan strategi, mengoptimalkan operasional, dan mencapai tujuan bisnis mereka.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Legalkan Bisnis, Libatkan Mimpi:
                        </div>
                        <div className="collapse-content">
                            <p>
                                Mengelola izin usaha dan legalitas dengan yang profesional, membebaskan klien untuk fokus pada mewujudkan impian mereka tanpa terhalang oleh hambatan administratif serta memastikan klien beroperasi sesuai dengan regulasi yang berlaku.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Pajak Tanpa Drama
                        </div>
                        <div className="collapse-content">
                            <p>
                                Menyederhanakan pengurusan perpajakan, membantu klien meminimalkan beban pajak, dan menciptakan narasi keuangan yang jelas untuk pertumbuhan yang berkelanjutan.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Ahli Pengelolaan Media Sosial
                        </div>
                        <div className="collapse-content">
                            <p>
                                Menyediakan spesialis media sosial yang berpengalaman untuk membangun dan mengelola kehadiran online klien, meningkatkan visibilitas dan interaksi dengan audiens.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Inovasi Terus Menerus
                        </div>
                        <div className="collapse-content">
                            <p>
                                Terus mengembangkan dan mengadopsi teknologi terkini untuk memastikan bahwa layanan yang disediakan selalu relevan dan sesuai dengan perkembangan industri.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Kepuasan Klien Sebagai Signature
                        </div>
                        <div className="collapse-content">
                            <p>
                                Membuat pengalaman Klien yang tak terlupakan, dengan layanan yang tidak hanya memenuhi kebutuhan tetapi juga menciptakan kesan mendalam dengan fokus pada pelayanan yang ramah, responsif, dan solusi yang sesuai dengan kebutuhan klien.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#d1afdb]">
                        <input type="radio" name="my-accordion-2" className="w-full" />
                        <div className="collapse-title text-xl font-medium">
                            Bisnis Berkelanjutan, Dunia Berkeadilan
                        </div>
                        <div className="collapse-content">
                            <p>
                                Berkomitmen pada tanggung jawab sosial dan lingkungan, menciptakan dampak positif pada masyarakat dan bumi, serta menjadi penggerak perubahan yang berkelanjutan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}