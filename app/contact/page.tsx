"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navigation activePage="contact" />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <div className="absolute inset-0 bg-indigo-900/30 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201261153009-hqpsxHyowBuKwlwNQVdtfd6IEju4sf.png"
          alt="Contact Us Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-xl">
            Have questions or ready to host your virtual exhibition?
            <br />
            Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-16 px-6 md:px-12 bg-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help you create an engaging, immersive experience tailored to your needs. Let's bring
              your vision to life!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1-555-123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-9x00 mb-1">Mail Us</h3>
                  <p className="text-gray-600">info@vicross.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Maple Street Toronto, ON M5G 2N8, Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg z-20">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Fill the Form Below</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute w-full h-full -top-10 z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289742303!2d-79.51814099999999!3d43.718449999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1635959479526!5m2!1sen!2sus"
            width="100%"
            height="110%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

