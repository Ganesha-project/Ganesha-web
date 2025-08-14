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

export const PriceCatalog = ({ fontCustom }) => {
  return (
    <section className="mx-7 my-16">
      <div className="text-center mb-12">
        <h2
          className={clsx(
            "text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent",
            fontCustom,
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
                  ? "bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white shadow-2xl border-2 border-yellow-400"
                  : "bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <IconComponent
                  className={clsx("text-3xl mx-auto mb-4", plan.popular ? "text-yellow-300" : "text-purple-600")}
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
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
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
