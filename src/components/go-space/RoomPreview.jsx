"use client"

import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaUsers, FaWifi, FaCoffee, FaPrint } from "react-icons/fa"
import clsx from "clsx"

const rooms = [
  {
    id: 1,
    name: "Creative Studio",
    capacity: "8-12 orang",
    features: ["High-speed WiFi", "Whiteboard", "Projector", "AC"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    description: "Ruang kreatif dengan pencahayaan natural yang sempurna untuk brainstorming dan workshop.",
  },
  {
    id: 2,
    name: "Meeting Room Pro",
    capacity: "4-8 orang",
    features: ["Video Conference", "Smart TV", "Sound System", "Coffee Station"],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    description: "Ruang meeting profesional dengan teknologi terdepan untuk presentasi dan video call.",
  },
  {
    id: 3,
    name: "Focus Zone",
    capacity: "1-4 orang",
    features: ["Silent Area", "Ergonomic Chairs", "Personal Lockers", "Phone Booth"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    description: "Area tenang untuk deep work dan konsentrasi maksimal tanpa gangguan.",
  },
  {
    id: 4,
    name: "Collaboration Hub",
    capacity: "10-20 orang",
    features: ["Flexible Layout", "Mobile Furniture", "Multiple Screens", "Breakout Areas"],
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    description: "Ruang kolaborasi fleksibel yang dapat disesuaikan untuk berbagai kebutuhan tim.",
  },
]

const featureIcons = {
  "High-speed WiFi": FaWifi,
  "Coffee Station": FaCoffee,
  Printer: FaPrint,
  "Video Conference": FaUsers,
}

export const RoomPreview = ({ fontCustom }) => {
  const [currentRoom, setCurrentRoom] = useState(0)

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length)
  }

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  const room = rooms[currentRoom]

  return (
    <section className="mx-7 my-16">
      <div className="text-center mb-12">
        <h2
          className={clsx(
            "text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent",
            fontCustom,
          )}
        >
          Jelajahi Ruang Kerja Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Setiap ruang dirancang khusus untuk mendukung produktivitas dan kreativitas Anda
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Image Section */}
          <div className="relative h-80 md:h-96">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url("${room.image}")` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevRoom}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-lg"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button
              onClick={nextRoom}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300 shadow-lg"
            >
              <FaChevronRight className="text-gray-700" />
            </button>

            {/* Room Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full px-4 py-2">
              <span className="text-sm font-semibold text-gray-700">
                {currentRoom + 1} / {rooms.length}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h3 className={clsx("text-3xl font-bold mb-4 text-gray-800", fontCustom)}>{room.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                <div className="flex items-center gap-2 mb-6">
                  <FaUsers className="text-purple-600" />
                  <span className="font-semibold text-gray-700">Kapasitas: {room.capacity}</span>
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book Sekarang
                </button>
              </div>

              {/* Right Column - Features */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Fasilitas Tersedia</h4>
                <div className="grid grid-cols-2 gap-4">
                  {room.features.map((feature, idx) => {
                    const IconComponent = featureIcons[feature] || FaUsers
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Thumbnails */}
        <div className="flex justify-center gap-4 mt-8">
          {rooms.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentRoom(idx)}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300",
                idx === currentRoom ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
