"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The 2.5D virtual exhibition platform exceeded our expectations with its interactive, yet easy-to-use interface. Visitors loved exploring the customized booths and engaging with our content seamlessly.",
    name: "Sarah Jack",
    role: "TV Model",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The platform offered the perfect blend of simplicity and interaction. Our audience was fully immersed, and the ability to explore exhibits in a virtual space added a unique dimension to the experience. It's a game-changer for online events",
    name: "Jhon Smit",
    role: "Developer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Setting up the exhibition was a breeze, and the response from attendees was fantastic. The platform made it easy to showcase our work while keeping visitors engaged. It's the perfect solution for hosting virtual events.",
    name: "Ramos Leo",
    role: "Designer",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The virtual platform transformed our exhibition experience. The intuitive interface made navigation seamless for all attendees.",
    name: "Emma Thompson",
    role: "Event Manager",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "As an exhibitor, the platform provided all the tools we needed to create an engaging virtual booth. The results exceeded our expectations.",
    name: "Michael Chen",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The analytics and engagement metrics helped us understand our audience better. A truly comprehensive virtual event solution.",
    name: "Lisa Rodriguez",
    role: "Data Analyst",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "The platform's reliability and performance were outstanding. No technical issues throughout our month-long exhibition.",
    name: "David Park",
    role: "Technical Director",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "Customer support was exceptional. Any questions were answered promptly, making the setup process smooth.",
    name: "Sophie Martin",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "The virtual networking features created genuine connections. It felt as engaging as an in-person event.",
    name: "James Wilson",
    role: "Business Development",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(testimonials.length / 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const getCurrentTestimonials = () => {
    const start = currentSlide * 3
    return testimonials.slice(start, start + 3)
  }

  return (
    <section className="py-20 px-6 md:px-12 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">TESTIMONIAL</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What Peoples Says About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl relative">
              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">{testimonial.quote}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-6 right-8 text-gray-200">
                <svg
                  className="w-12 h-12 transform rotate-180"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8c-2.2 0-4 1.8-4 4v12h6v-12h-4c0-1.1 0.9-2 2-2v-2zm12 0c-2.2 0-4 1.8-4 4v12h6v-12h-4c0-1.1 0.9-2 2-2v-2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-8" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

