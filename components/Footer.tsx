import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

import img1 from "@/assets/images/footer/footerMedia (1).png"
import img2 from "@/assets/images/footer/footerMedia (2).png"
import img3 from "@/assets/images/footer/footerMedia (3).png"
import img4 from "@/assets/images/footer/footerMedia (4).png"
import img5 from "@/assets/images/footer/footerMedia (5).png"
import img6 from "@/assets/images/footer/footerMedia (6).png"

const mediaImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <div className="w-32 h-16 mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c8dc74805fff48d85db158c5975648a-9tG4voAVbaQ1y0av3vdFwAQmHcC16n.png"
              alt="VI CROSS Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span>Networking Events</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span>Conference Planning</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span>Live Webinar</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span>Contact Us</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Our Location</h4>
          <div className="flex items-start gap-2 mb-4">
            <svg
              className="w-5 h-5 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>Toronto, Canada</span>
          </div>

          <h4 className="font-bold mb-4">Support</h4>
          <p className="text-sm">support@vicross.com</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Media</h4>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-800 rounded-sm overflow-hidden">
                <Image
                  src={mediaImages[i]}
                  alt={`Media ${i + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4">Subscribe Our Newsletter</h4>
            <div className="p-6 flex justify-center items-center">
              <div className="flex bg-white/5 h-12 rounded-full text-white px-4 py-2 w-full max-w-md text-sm focus-within:ring-2 focus-within:ring-blue-400/50">
                
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-transparent flex-1 outline-none"
                />

                <button className="relative group w-24 items-center justify-center">
                  {/* Outer glow effect */}
                  <div className="absolute h-full w-24 inset-0 rounded-full bg-blue-500 blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  
                  {/* Inner button with smaller blur for sharper edges */}
                  <div className="absolute h-full w-24 inset-0 rounded-full bg-blue-600 blur-[1px] opacity-70"></div>
                  
                  {/* Main button */}
                  <span className="relative z-10 rounded-full block text-white font-medium">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Payment</h4>
            <div className="w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20%281%29-uNqTQNezMTB5aTBDvV4G1KqFF8rs8Q.png"
                alt="Payment Methods"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

