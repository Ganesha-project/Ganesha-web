import { FaCheck, FaStar, FaCrown } from "react-icons/fa"
import clsx from "clsx"

const pricingPlans = [
  {
    name: "Basic Space",
    price: "299K",
    period: "/bulan",
    description: "Perfect untuk freelancer dan startup",
    features: ["Akses 24/7", "High-speed WiFi", "Meeting room 2 jam/hari", "Free coffee & tea", "Printer access"],
    popular: false,
    icon: FaStar,
  },
  {
    name: "Premium Space",
    price: "599K",
    period: "/bulan",
    description: "Ideal untuk tim kecil dan bisnis berkembang",
    features: [
      "Semua fitur Basic",
      "Dedicated desk",
      "Meeting room unlimited",
      "Locker pribadi",
      "Event space access",
      "Networking events",
    ],
    popular: true,
    icon: FaCrown,
  },
  {
    name: "Enterprise Space",
    price: "999K",
    period: "/bulan",
    description: "Solusi lengkap untuk perusahaan",
    features: [
      "Semua fitur Premium",
      "Private office",
      "Receptionist service",
      "Mail handling",
      "Custom branding",
      "Priority support",
    ],
    popular: false,
    icon: FaCrown,
  },
]

export const PriceCatalog = ({ fontCustom, titleComponent }) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2
          className={clsx(
            "text-4xl font-bold mb-4 bg-gradient-to-r from-goYellow to-goPurple bg-clip-text text-transparent",
            fontCustom, titleComponent
          )}
        >
          Pilih Paket Terbaik
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan ruang kerja yang sesuai dengan kebutuhan dan budget Anda
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, idx) => {
          const IconComponent = plan.icon
          return (
            <div
              key={idx}
              className={clsx(
                "relative rounded-2xl p-8 transition-all duration-300 hover:scale-105",
                plan.popular
                  ? "bg-gradient-to-br from-goPurple to-indigo-700 text-white shadow-2xl border-2 border-goYellow"
                  : "bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-goYellow to-goYellow/60 text-black px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <IconComponent
                  className={clsx("text-3xl mx-auto mb-4", plan.popular ? "text-goYellow" : "text-goPurple")}
                />
                <h3 className={clsx("text-2xl font-bold mb-2", fontCustom)}>{plan.name}</h3>
                <p className={clsx("text-sm", plan.popular ? "text-gray-200" : "text-gray-600")}>{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-4xl font-bold">Rp {plan.price}</span>
                <span className={clsx("text-lg", plan.popular ? "text-gray-200" : "text-gray-600")}>{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-3">
                    <FaCheck className={clsx("text-sm", plan.popular ? "text-green-300" : "text-green-500")} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300",
                  plan.popular
                    ? "bg-white text-goPurple hover:bg-gray-100"
                    : "go-button",
                )}
              >
                Pilih Paket
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
