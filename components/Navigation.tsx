"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

export const NavLink = ({ href, children, isActive }: NavLinkProps) => (
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

interface NavigationProps {
  activePage: "home" | "about" | "solution" | "contact"
}

export default function Navigation({ activePage }: NavigationProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-2 shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <div className="w-32 h-16 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Be%20Right%20Back%20%2810%29-TUYegXx8NadpjVf8VGqn0tFlTeOHzA.png"
              alt="VI CROSS Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <NavLink href="/" isActive={activePage === "home"}>
          HOME
        </NavLink>
        <NavLink href="/about" isActive={activePage === "about"}>
          ABOUT US
        </NavLink>
        <NavLink href="/solution" isActive={activePage === "solution"}>
          OUR SOLUTION
        </NavLink>
        <NavLink href="/contact" isActive={activePage === "contact"}>
          CONTACT US
        </NavLink>
        <Button className="bg-indigo-900 hover:bg-indigo-800">Join</Button>
      </div>
    </nav>
  )
}

