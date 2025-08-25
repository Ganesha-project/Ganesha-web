import clsx from "clsx";
import { FaRocket, FaShieldAlt, FaUsers, FaClock, FaAward, FaHeadset } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { FaMapMarkerAlt, FaWallet, FaFileSignature, FaLaptopHouse, FaUserTie, FaHandshake } from "react-icons/fa";

const data = [
  {
    title: "Alamat Strategis",
    desc: "Tingkatkan kredibilitas dengan alamat kantor bergengsi yang bisa digunakan untuk legalitas dan branding bisnismu.",
    icon: FaMapMarkerAlt,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Hemat Biaya",
    desc: "Nikmati fasilitas kantor tanpa harus membayar sewa fisik. Lebih efisien, lebih fleksibel, tetap profesional.",
    icon: FaWallet,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    title: "Legalitas Terjamin",
    desc: "Alamat Go Space bisa digunakan untuk kebutuhan pendaftaran PT, CV, dan perizinan usaha secara resmi.",
    icon: FaFileSignature,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Fleksibel & Praktis",
    desc: "Tidak perlu repot urus kantor fisik. Semua bisa dijalankan dari mana saja, kapan saja.",
    icon: FaLaptopHouse,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    title: "Tim Support Profesional",
    desc: "Dibantu oleh tim yang berpengalaman dan responsif, siap menjawab kebutuhan bisnismu.",
    icon: FaUserTie,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    title: "Terpercaya",
    desc: "Bagian dari ekosistem Ganesha Group yang berpengalaman dalam layanan bisnis & konsultasi.",
    icon: FaHandshake,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
];

export const WhyUs = ({ fontCustom = "", titleComponent = "" }) => {
  return (
    <section className="mb-12">
      <div className="mb-16 text-center">
        <h1 className={clsx("text-4xl font-bold mb-4 bg-clip-text text-transparent", fontCustom, titleComponent)}>Why Choose Go Space?</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Alasan kenapa ratusan pebisnis, freelancer, dan startup memilih Go Space sebagai solusi Virtual Office mereka.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon container */}
              <div className="relative p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`text-3xl ${item.textColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold text-gray-800 group-hover:${item.textColor} transition-colors duration-300 ${fontCustom}`}>{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                </div>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500`} />
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <a href="https://" className="inline-flex items-center gap-2 px-6 py-3 go-button">
          <MdSpeed className="text-xl" />
          <span>Get Started Today</span>
        </a>
      </div>
    </section>
  );
};
