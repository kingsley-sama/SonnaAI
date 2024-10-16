import { Bell, ChevronDown, Search, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import React from 'react';

const MenuBar = () => {
    return (
        <nav className="sonna-menubar">
            <div className="sonna-logo">SONNA-AI</div>
            <div className="sonna-nav-items">
                <button className="sonna-nav-btn sonna-join">Join a Class</button>
                <button className="sonna-nav-btn sonna-homework">Homework</button>
            </div>
            <div className="sonna-cta-buttons">
                <button className="sonna-cta-btn sonna-pricing">See Pricing</button>
                <button className="sonna-cta-btn sonna-try-free">Try for Free</button>
            </div>

            <style jsx>{`
        .sonna-menubar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #000000;
          color: #ffffff;
          font-family: Arial, sans-serif;
        }

        .sonna-logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .sonna-logo span {
          color: #3b82f6;
        }

        .sonna-nav-items,
        .sonna-cta-buttons {
          display: flex;
          gap: 1rem;
        }

        .sonna-nav-btn,
        .sonna-cta-btn {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .sonna-nav-btn {
          background-color: transparent;
          border: 1px solid #ffffff;
          color: #ffffff;
        }

        .sonna-nav-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .sonna-cta-btn {
          border: none;
        }

        .sonna-pricing {
          background-color: transparent;
          color: #3b82f6;
        }

        .sonna-try-free {
          background-color: #3b82f6;
          color: #ffffff;
        }

        .sonna-try-free:hover {
          background-color: #2563eb;
        }

        @media (max-width: 768px) {
          .sonna-menubar {
            flex-direction: column;
            gap: 1rem;
          }

          .sonna-nav-items,
          .sonna-cta-buttons {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </nav>
    );
};

export default MenuBar;


export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-64"
          />
        </div>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <Settings className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Natasha Bunny" />
            <AvatarFallback>NB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Natasha Bunny</span>
            <span className="text-xs text-gray-400">natasha@bunny.com</span>
          </div>
          <ChevronDown className="h-4 w-4 ml-1" />
        </div>
      </div>
    </header>
  )
}

export function CenteredLogoNavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const NavItems = () => (
    <>
      <Button variant="ghost" className="text-white hover:bg-gray-800">
        Dashboard
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            Analytics <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
          <DropdownMenuItem>Overview</DropdownMenuItem>
          <DropdownMenuItem>Reports</DropdownMenuItem>
          <DropdownMenuItem>Metrics</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-white hover:bg-gray-800">
            Products <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
          <DropdownMenuItem>List</DropdownMenuItem>
          <DropdownMenuItem>Add New</DropdownMenuItem>
          <DropdownMenuItem>Categories</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" className="text-white hover:bg-gray-800">
        Settings
      </Button>
    </>
  )

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
      {/* Mobile Menu Button */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
          <nav className="flex flex-col space-y-4 mt-4">
            <NavItems />
          </nav>
        </SheetContent>
      </Sheet>

      {/* Centered Logo */}
      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span className="text-lg font-semibold">Your Brand</span>
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <NavItems />
      </div>
      
      {/* Right-side Icons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
