"use client"

import Image from "next/image"
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Globe2, Users, MessageSquare, Accessibility, Box, Calendar, Network, Languages, BarChart3 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

import img_hero from "@/assets/images/our-solution/image.png"
import CountdownSection from "@/components/CountdownSection"

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

export default function SolutionPage() {

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navigation activePage="solution" />

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 z-10"></div>
        <Image
          src={img_hero}
          alt="Virtual Exhibition Platform"
          fill
          className="object-cover w-full"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Solution</h1>
          <p className="text-xl">1st Canadian 2.5D Virtual Exhibition platform</p>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="px-6 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto ">
          <div className="bg-[#111] rounded-b-[60px] py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Enhance Your Business With Our
                  <br />
                  2.5D Virtual Exhibition Platform
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Are you a Canadian supplier looking to expand your reach into the dynamic Asia-Pacific market? Our
                  innovative platform bridges the gap between Canadian suppliers and Asia-Pacific buyers, offering an
                  immersive and engaging experience. With advanced features like business matching, real-time
                  communication, and a visually appealing 2.5D environment, our platform is designed to facilitate
                  cross-border trade and drive business growth.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px] ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6211ecbd8232a8a0816222b6ac73de96-7b9RHN1skhqAHkTNcfsE9FGkET0B21.png"
                  alt="Virtual Exhibition Platform Visualization"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Key Benefits Header */}
            <div className="col-span-1">
              <div className="h-full text-left p-4">
                <h2 className="text-3xl font-bold text-indigo-900 mb-2">Key Benefits:</h2>
                <p className="text-gray-600 text-lg">
                  Our 2.5D virtual exhibition platform is here to revolutionize the way you connect with potential
                  buyers
                </p>
              </div>
            </div>
            {/* Benefit Cards */}
            {[
              {
                icon: Globe2,
                color: "green",
                title: "Seamless Connections",
                description: "Connect with potential buyers from the Asia-Pacific region in a virtual space.",
              },
              {
                icon: Box,
                color: "yellow",
                title: "Immersive Experience",
                description: "Explore a visually appealing 2.5D environment that enhances engagement.",
              },
              {
                icon: Users,
                color: "purple",
                title: "Efficient Business Matching",
                description: "Find and connect with relevant buyers using advanced matching tools.",
              },
              {
                icon: MessageSquare,
                color: "blue",
                title: "Real-Time Communication",
                description: "Communicate directly with potential partners through built-in tools.",
              },
              {
                icon: Accessibility,
                color: "red",
                title: "Accessibility",
                description: "Enjoy a responsive design compatible with various devices and browsers.",
              },
            ].map(({ icon: Icon, color, title, description }) => (
              <div key={title} className="col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-xl h-full text-left p-4">
                  <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${color}-500`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-[#2D1B4D] hover:bg-[#231439] text-white px-8 rounded-full">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Solution Features Section - Updated Design */}
      <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={cardVariants}
        className="bg-[#FFF9E7] rounded-2xl p-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
          <Box className="w-6 h-6 text-yellow-600" />
        </div>
        <span className="text-lg font-semibold text-gray-900">
          2.5D Virtual Environment
        </span>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="bg-[#E7FFE9] rounded-2xl p-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <Calendar className="w-6 h-6 text-green-600" />
        </div>
        <span className="text-lg font-semibold text-gray-900">
          Event &amp; Session Management
        </span>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="bg-[#EBE7FF] rounded-2xl p-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Network className="w-6 h-6 text-purple-600" />
        </div>
        <span className="text-lg font-semibold text-gray-900">
          Business Matching &amp; Networking
        </span>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="bg-[#F7E7FF] rounded-2xl p-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Languages className="w-6 h-6 text-purple-600" />
        </div>
        <span className="text-lg font-semibold text-gray-900">
          Multi Language Support
        </span>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="bg-[#FFE7E7] rounded-2xl p-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-red-600" />
        </div>
        <span className="text-lg font-semibold text-gray-900">
          Real Time Analytics
        </span>
      </motion.div>
    </motion.div>

      {/* Countdown Section */}
      <CountdownSection/>

      {/* Footer */}
      <Footer />
    </main>
  )
}

