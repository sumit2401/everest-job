"use client"

import Link from "next/link"
import { ChevronDown } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

export function NavBar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-bold text-white">alchemy</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/jobs" className="text-white hover:text-gray-300">
              Jobs
            </Link>
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-gray-300">
                Sectors <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Technology</DropdownMenuItem>
                <DropdownMenuItem>Finance</DropdownMenuItem>
                <DropdownMenuItem>Healthcare</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Link href="/candidates" className="text-white hover:text-gray-300">
              Candidates
            </Link>
            <Link href="/clients" className="text-white hover:text-gray-300">
              Clients
            </Link>
            <button  className="bg-white text-black hover:bg-gray-100">
              Hire Anywhere
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

