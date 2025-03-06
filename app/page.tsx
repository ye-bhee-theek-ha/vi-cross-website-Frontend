"use client"

import Image from "next/image"

import laptopImage from '@/assets/images/home/laptop.png';

import {motion} from "framer-motion"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/cards"
import { useState, useEffect } from "react"
import TestimonialsSection from "@/components/TestimonialsSection"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer" // Import Footer component
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { text } from "stream/consumers"
import { transform } from "next/dist/build/swc";
import { WorldMap } from "@/components/ui/world-map";
import { AnimatedStat } from "@/components/AnimatedStat";
import CountdownSection from "@/components/CountdownSection";
const testimonials = [
  {
    quote: "VI Cross is an amazing platform that has helped us connect with potential buyers from all over the world.",
    author: "John Doe",
    title: "CEO, Acme Corp",
  },
  {
    quote:
      "I've been using VI Cross for over a year now, and I'm consistently impressed with the quality of the platform and the level of support.",
    author: "Jane Doe",
    title: "Marketing Manager, Beta Inc",
  },
  {
    quote:
      "VI Cross has been instrumental in helping us grow our business. The platform is easy to use and has helped us reach a wider audience.",
    author: "Peter Jones",
    title: "Sales Manager, Gamma Ltd",
  },
]

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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (testimonials.length - 2))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const wordsHeader1 = [
    {
      text: "2.5D",
      className: "text-white"

    },
    {
      text: "Web-Based",
      className: "text-white"
    },
    {
      text: "Virtual",
      className: "text-white"
    },
    {
      text: "with",
      className: "text-white"
    },
    {
      text: "Exhibition",
      className: "text-purple-100"
    },
    {
      text: "Platform",
      className: "text-white"
    }
  ];

  // core features

  // Container variants with staggerChildren for each column
  const leftContainerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const rightContainerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  // Item variants for left column features
  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Item variants for right column features
  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const leftColumnFeatures = [
    {
      title: "2.5D VIRTUAL ENVIRONMENT",
      description:
        "The Platform Will Utilize 2.5D Graphics To Create An Engaging And Interactive Virtual Exhibition Space.",
    },
    {
      title: "RESPONSIVE USER INTERFACE",
      description:
        "Developed Using React, The Platform Will Offer A Dynamic And Responsive Interface That Adapts To Different Screen Sizes And Devices.",
    },
    {
      title: "EXHIBITOR BOOTHS",
      description:
        "Each Exhibitor Will Have A Customizable Virtual Booth Where They Can Showcase Their Products, Services, And Brand.",
    },
    {
      title: "PRODUCT SEARCH & FILTERING",
      description:
        "Each Exhibitor Will Have A Customizable Virtual Booth Where They Can Showcase Their Products, Services, And Brand.",
    },
    {
      title: "PRESENTATION & WEBINAR ROOMS",
      description:
        "Sellers Will Have The Ability To Host Live Presentations, Product Launches, And Webinars Within The Platform.",
    },
  ];

  const rightColumnFeatures = [
    {
      title: "BUSINESS MATCHING & NETWORKING",
      description:
        "The Platform Will Feature AI-Driven Business Matching Services That Connect Buyers With The Most Relevant Exhibitors Based On Their Interests And Needs.",
    },
    {
      title: "CONTENT MANAGEMENT SYSTEM (CMS)",
      description:
        "An Integrated CMS Will Allow Exhibitors And Organizers To Easily Manage Their Content, Including Updating Booth Materials, Scheduling Presentations, And Managing Attendee Lists.",
    },
    {
      title: "DIGITAL INVITATIONS AND ENGAGEMENT TOOLS",
      description:
        "The Platform Will Support The Creation And Distribution Of Digital Invitations To Potential Buyers.",
    },
    {
      title: "ANALYTICS AND REPORTING",
      description:
        "The Platform Will Include Analytics Tools That Provide Exhibitors And Event Organizers With Insights Into Attendee Behavior, Booth Visits, Engagement Levels, And Other Key Metrics.",
    },
  ];  


  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navigation activePage="home" />
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[#2E246080]/50 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a8ef15426f4e77f2b49d160a832da57e-42uRTfsxLEiyODq2Q7ovflLfkhvd4X.png"
          alt="Virtual Exhibition Platform - Modern Exhibition Booth"
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute items-start w-[80%] md:w-[50%] lg:w-[35%] inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
            <TypewriterEffect words={wordsHeader1} className="text-start text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight flex" cursorClassName="hidden"/>
          <div className="mt-6">
            <Button className="text-blue-500 bg-white hover:bg-blue-500 hover:text-white rounded-full px-6 text-sm">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium text-gray-600 mb-2">KEY FEATURES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">What We Offer</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform provides a comprehensive suite of features designed to enhance your virtual exhibition
              experience.
            </p>
          </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-4 items-center flex flex-col text-center">
                <h3 className="text-xl font-bold mb-2">Enhance Cross Border Trade</h3>
                <p className="text-sm text-gray-600">
                  The Platform Provides A Virtual Trade Space For Canadian Exporters To Connect With Potential Buyers In
                  The Asia-Pacific Region.
                </p>
                </div>
                <div className="p-4 items-center flex flex-col text-center">
                <h3 className="text-xl font-bold mb-2">Engaging User Experience</h3>
                <p className="text-sm text-gray-600">
                  The Platform Will Deliver A Visually Appealing Environment That Enhances Interaction.
                </p>
                </div>
                <div className="p-4 items-center flex flex-col text-center">
                <h3 className="text-xl font-bold mb-2">Facilitate Business Connection</h3>
                <p className="text-sm text-gray-600">
                  The Platform Will Offer Advanced Business Matching, Real-Time Communication Tools, And Comprehensive
                  Search Functions.
                </p>
                </div>
                <div className="p-4 items-center flex flex-col text-center">
                <h3 className="text-xl font-bold mb-2">Multi Devices Support</h3>
                <p className="text-sm text-gray-600">
                  By Delivering A Seamless, Responsive, PWA-Enabled Experience And Compatibility Across Various Devices
                  And Browsers.
                </p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-6 md:px-12 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-gray-600 mb-2">FEATURES</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#2E1B4D] mb-6">Core Features</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Platform Offers Several Core Features To Enhance The User Experience And Foster Business Connections.
            It Provides A 2.5D Virtual Space, Creating An Immersive But Accessible Environment For Product Showcases And
            Networking Opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-8 px-16 relative">
          {/* Left Column */}
          <motion.div
            className="space-y-12 text-center md:text-right md:pr-12"
            variants={leftContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {leftColumnFeatures.map((feature, idx) => (
              <motion.div key={idx} variants={leftItemVariants}>
                <h4 className="text-xl font-bold text-[#2E1B4D] mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Logo */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-48 h-48 hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.8, ease: "easeOut" } }}
          >
            <Image
              src={laptopImage}
              alt="Virtual Exhibition Platform - Modern Exhibition Booth"
              width={1200}
              height={600}
              className="absolute w-full object-cover"
            />
            <div className="text-2xl font-bold text-[#2E1B4D] z-10">
              <div className="flex flex-col items-center">
                <span>VI CROSS</span>
                <span className="text-sm font-normal text-gray-500">MARKETING</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-12 text-center md:text-left md:pl-12"
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {rightColumnFeatures.map((feature, idx) => (
              <motion.div key={idx} variants={rightItemVariants}>
                <h4 className="text-xl font-bold text-[#2E1B4D] mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

      {/* Why Attend Section */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-lg font-medium text-gray-400 mb-2">WHY JOIN VI CROSS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Why Attend VI Cross Events</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e0cc9bf316e23aa4b9752f5f75704fb6-EwEZPGa0lCvrUUpGSOTr9bQq4hq3WX.png"
              title="Networking Events"
              description="Connect with industry professionals in our virtual networking spaces"
            />
            <EventCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bdabe57e874d6d3f89a67b1ab0406561-q6naEWo0Ww1CPaVLr9gh4ZBG3YzyBS.png"
              title="Virtual Environment"
              description="Experience our cutting-edge 2.5D virtual exhibition spaces"
            />
            <EventCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8c7d8156effc8c12ee22948326571566-c9HSekdaNIwjaU6TbY6WgbGAng58ib.png"
              title="Live Webinar"
              description="Attend interactive webinars and virtual presentations"
            />
          </div>
        </div>
      </section>

      {/* Our Measurable Results Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-100 h-full relative">
      
        {/* World Map Background */}
        <div 
          className="absolute hidden md:flex inset-0  z-0 opacity-20 W-full overflow-hidden pointer-events-none items-center"
        >
        <WorldMap
          dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
          ]}
        />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-lg font-medium text-gray-600 mb-2">OUR IMPACT</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-indigo-900">
              Our Measurable Results
            </h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-16">
            {[
              { target: 5, label: "Participants Served", suffix: "M+" },
              { target: 5, label: "Exhibition Served", suffix: "K+" },
              { target: 5, label: "Years in Industry", suffix: "+" },
            ].map((item, index) => (
              <AnimatedStat
              key={index}
                target={item.target}
                label={item.label}
                suffix={item.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose VI Cross Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600 mb-2">WHY CHOOSE US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-900">Why Choose VI Cross?</h3>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We Help Companies Of All Sizes Host Incredible Custom Events With An Easy-To-Use Platform With Complimentary
            Project Management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
          {[
            {
              title: "Complete Event Tech Suite",
              description:
                "Plan, Host & Manage Your Events, Engage The Audience & Measure Results - All With A Single Platform.",
              icon: (
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Inclusive Events For Everyone",
              description:
                "Set Up User-Friendly, Multi-Lingual, And WCAG-Compliant Event Websites, Accessible For All.",
              icon: (
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Done-For-You + Done-By-You",
              description:
                "Leverage Our Fully Self-Serve Backend To Set Up Events Yourself Or Get A Dedicated PM To Handle It For You.",
              icon: (
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              ),
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg text-center relative pt-16 transform transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-indigo-900 rounded-full flex items-center justify-center mx-auto absolute -top-10 left-1/2 transform -translate-x-1/2 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Countdown Section */}
      <CountdownSection/>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

