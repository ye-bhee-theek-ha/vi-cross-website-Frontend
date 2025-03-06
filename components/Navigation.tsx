"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className={`text-sm font-medium relative pb-2 transition-colors duration-300 ${
      isActive ? "text-indigo-700" : "text-zinc-800 hover:text-indigo-700"
    }`}
    onClick={onClick}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-800 rounded-full" />
    )}
  </Link>
);

interface NavigationProps {
  activePage: "home" | "about" | "solution" | "contact";
}

export default function Navigation({ activePage }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-2 shadow-sm bg-white sticky top-0 z-50">
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
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/" isActive={activePage === "home"}>HOME</NavLink>
        <NavLink href="/about" isActive={activePage === "about"}>ABOUT US</NavLink>
        <NavLink href="/solution" isActive={activePage === "solution"}>OUR SOLUTION</NavLink>
        <NavLink href="/contact" isActive={activePage === "contact"}>CONTACT US</NavLink>
        <Button className="bg-indigo-900 hover:bg-indigo-800">Join</Button>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <NavLink href="/" isActive={activePage === "home"} onClick={() => setMenuOpen(false)}>HOME</NavLink>
          <NavLink href="/about" isActive={activePage === "about"} onClick={() => setMenuOpen(false)}>ABOUT US</NavLink>
          <NavLink href="/solution" isActive={activePage === "solution"} onClick={() => setMenuOpen(false)}>OUR SOLUTION</NavLink>
          <NavLink href="/contact" isActive={activePage === "contact"} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>
          <Button className="bg-indigo-900 hover:bg-indigo-800 w-32">Join</Button>
        </div>
      )}
    </nav>
  );
}
