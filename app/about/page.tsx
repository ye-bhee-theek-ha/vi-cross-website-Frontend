"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import TestimonialSlider from "@/components/TestimonialSlider"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import AboutUsSection from "@/components/AboutUs"
import { Icon, Play, PlayCircle, PlayCircleIcon, PlayIcon } from "lucide-react"

import customer1 from "@/assets/images/home/customer1.png";
import customer2 from "@/assets/images/home/customer2.png";
import customer3 from "@/assets/images/home/customer3.png";
import customer4 from "@/assets/images/home/customer4.png";

import image from "@/assets/images/about us/image.png"
import TestimonialsSection from "@/components/TestimonialsSection"

const NavLink = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`text-sm font-medium relative pb-2 ${
      isActive ? "text-indigo-700" : "text-zinc-800 hover:text-indigo-700"
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-800 rounded-full" />
    )}
  </a>
)

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Navigation */}
      <Navigation activePage="about" />

      {/* About Hero Section */}
      <div className="px-20 bg-white">
        <AboutUsSection/>
      </div>


      {/* Mission Statements Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Mission Statements</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to transform the virtual event experience by providing an innovative 2.5D platform that
              seamlessly blends interactivity with accessibility. We aim to empower businesses, creators, and
              organizations to host dynamic virtual exhibitions that captivate audiences and foster meaningful
              engagement.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Online%20Payment-aI9yl03aKFcGB9oRIxFSTZQU1oA412.png"
              alt="Online Payment Illustration"
              width={400}
              height={400}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Vision and Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
            <div className="absolute h-full w-full">
              <Image src={image} alt="about us"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-3 border rounded-full border-white">
              <div className="p-3 border rounded-full border-white">

                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <PlayIcon fill="#2E2460" stroke="#2E2460" />
                </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Vision and Values</h2>
            <p className="text-gray-600">
              Our vision is to become the leading platform for immersive virtual exhibitions, empowering organizations
              to connect to engage global audiences through innovative, interactive environments. We are committed to
              fostering a future where virtual events are as impactful and accessible as in-person experiences, creating
              lasting impressions and enabling meaningful connections.
            </p>
            <Button className="mt-6 bg-indigo-900">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
        <TestimonialsSection 
          classname_container="bg-gradient-to-b from-stone-900 to-stone-800"
          classname_text="text-white"  
          classname_bar="bg-gray-500"
          classname_pagination = {true}
        />


      {/* Expert Members Section */}
      <section className="py-20 px-6 md:px-12 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201261152984-0pnPykPfNXFdd96Va1yZ63FiUKQRQ8.png"
            alt="World Map Dots"
            fill
            className="object-cover  hidden md:block bg-white"
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2E2460] mb-12">Expert Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Eugene Wells",
                  image: customer1,
                  role: "CEO & Founder",
                },
                {
                  name: "Donna Howard",
                  image: customer2,
                  role: "Technical Lead",
                },
                {
                  name: "Donald Henderson",
                  image: customer3,
                  role: "Creative Director",
                },
                {
                  name: "Elizabeth Walker",
                  image: customer4,
                  role: "Product Manager",
                },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full border-4 border-white/10"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-stone-900">{member.name}</h3>
                  {/* <p className="text-gray-300">{member.role}</p> */}
                </div>
              ))}
            </div>
            <Button className="mt-12 border-[#2E2460] rounded-full bg-[#2E2460] text-white hover:text-[#2E2460] hover:bg-gray-100 hover:border-2">View All Team</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

