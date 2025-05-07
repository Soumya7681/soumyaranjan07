"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/ModeToggle"

import sr from "@/assets/images/sr.png"
import sr1 from "@/assets/images/sr1.png"
import { useTheme } from "next-themes"

const Navbar: React.FC = () => {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/SoumyaCV.pdf" // public path, no import needed
    link.setAttribute("download", "Soumyaranjan_Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white dark:bg-black dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2">
          <Image src={theme === "dark" ? sr1 : sr } alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Soumya</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
            About Me
          </Link>
          <Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
            Contact Me
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={handleDownload} aria-label="Download Resume">
            <Download className="h-5 w-5" />
          </Button>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6">
              <div className="flex items-center justify-between mb-4">
                <Link href="#home" className="flex items-center space-x-2">
                  <Image src={isDarkMode ? sr1 : sr} alt="Logo" width={28} height={28} />
                  <span className="text-lg font-bold">Soumya</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <Separator className="mb-4" />
              <nav className="flex flex-col gap-3 text-lg font-medium">
                <SheetClose asChild>
                  <Link href="#about">About Me</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#skills">Skills</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#projects">Projects</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="#contact">Contact Me</Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
