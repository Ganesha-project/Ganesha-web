"use client"

import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaUsers, FaWifi, FaCoffee, FaPrint } from "react-icons/fa"
import clsx from 'clsx';

const rooms = [
  {
    id: 1,
    name: "Creative Studio",
    capacity: "8-12 orang",
    features: ["High-speed WiFi", "Whiteboard", "Projector", "AC"],
    image: "https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg",
    description: "Ruang kreatif dengan pencahayaan natural yang sempurna untuk brainstorming dan workshop.",
  },
  {
    id: 2,
    name: "Meeting Room Pro",
    capacity: "4-8 orang",
    features: ["Video Conference", "Smart TV", "Sound System", "Coffee Station"],
    image: "https://images.pexels.com/photos/20101490/pexels-photo-20101490.jpeg",
    description: "Ruang meeting profesional dengan teknologi terdepan untuk presentasi dan video call.",
  },
  {
    id: 3,
    name: "Focus Zone",
    capacity: "1-4 orang",
    features: ["Silent Area", "Ergonomic Chairs", "Personal Lockers", "Phone Booth"],
    image: "https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg",
    description: "Area tenang untuk deep work dan konsentrasi maksimal tanpa gangguan.",
  },
  {
    id: 4,
    name: "Collaboration Hub",
    capacity: "10-20 orang",
    features: ["Flexible Layout", "Mobile Furniture", "Multiple Screens", "Breakout Areas"],
    image: "https://images.pexels.com/photos/22718136/pexels-photo-22718136.jpeg",
    description: "Ruang kolaborasi fleksibel yang dapat disesuaikan untuk berbagai kebutuhan tim.",
  },
]

const featureIcons = {
  "High-speed WiFi": FaWifi,
  "Coffee Station": FaCoffee,
  "Printer": FaPrint,
  "Video Conference": FaUsers,
}

export const RoomPreview = ({ fontCustom = "", titleComponent }) => {
  const [currentRoom, setCurrentRoom] = useState(0)
  const [imageError, setImageError] = useState({})
  const [imageLoading, setImageLoading] = useState({})

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length)
  }

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  const handleImageError = (roomId) => {
    setImageError(prev => ({ ...prev, [roomId]: true }))
    setImageLoading(prev => ({ ...prev, [roomId]: false }))
  }

  const handleImageLoad = (roomId) => {
    setImageLoading(prev => ({ ...prev, [roomId]: false }))
  }

  const room = rooms[currentRoom]

  return (
    <section className="my-16" >
      <div className="text-center mb-12">
        <h2
          className={clsx('text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-goPurple bg-clip-text text-transparent', fontCustom, titleComponent)}
        >
          Jelajahi Ruang Kerja Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Setiap ruang dirancang khusus untuk mendukung produktivitas dan kreativitas Anda
        </p>
      </div>

      <div >
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Image Section */}
          <div className="relative h-80 md:h-96 bg-gray-200">
            {imageError[room.id] ? (
              // Fallback when image fails to load
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-goPurple/100 to-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-goPurple/200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="text-goPurple text-2xl" />
                  </div>
                  <p className="text-gray-600 font-medium">{room.name}</p>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={() => handleImageError(room.id)}
                  onLoad={() => handleImageLoad(room.id)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {imageLoading[room.id] && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-goPurple"></div>
                  </div>
                )}
              </>
            )}

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
                <h3 className={`text-3xl font-bold mb-4 text-gray-800 ${fontCustom}`}>{room.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                <div className="flex items-center gap-2 mb-6">
                  <FaUsers className="text-goPurple" />
                  <span className="font-semibold text-gray-700">Kapasitas: {room.capacity}</span>
                </div>

                <button className="px-8 py-3 go-button">
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
                        <IconComponent className="text-goPurple" />
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentRoom ? "bg-goPurple scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}