import type React from "react"

interface EventCardProps {
  image: string
  title: string
  description: string
}

export const EventCard: React.FC<EventCardProps> = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-transform hover:scale-105">
      {/* Image Container */}
      <div className="relative h-[300px] w-full">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        {/* Frosted Glass Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5">
          <div className="backdrop-blur-md bg-white/30 px-6 py-3 rounded-lg">
            <h3 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

// Keep other card components unchanged...

