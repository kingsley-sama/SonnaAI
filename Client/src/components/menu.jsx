import { Bell, ChevronDown, Search, Settings, Menu, Home, Grid, Video, Box, Palette } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "react-router-dom" // Importing Link from react-router-dom for navigation
import { Input } from "@/components/ui/input"
import "./menu.css"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sonna-menubar">
            <Link to={'/'} className="sonna-logo">SONNA-AI</Link>
            <button className="sonna-menu-toggle" onClick={toggleMenu}>
                <Menu />
            </button>
            <div className={`sonna-menu-items ${isOpen ? 'open' : ''}`}>
                <div className="sonna-nav-items">
                    <a href='/#about' className="sonna-cta-btn sonna-pricing">About Us</a>
                </div>
                <div className="sonna-cta-buttons">
                <Link to={'/course_list'} className="sonna-cta-btn sonna-pricing">Courses Lists</Link>
                    <Link to={'/register'} className="sonna-nav-btn sonna-join">Login</Link>
                    <Link to={'/register'} className="sonna-cta-btn sonna-try-free">SignUp</Link>
                </div>
            </div>
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

const menuItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: Grid, label: 'Dashboard', to: '/dashboard' },
  { icon: Video, label: 'Online Class', to: '/dashboard/video_meeting' },
  { icon: Box, label: 'Learning', to: '/dashboard/courses' },
  { icon: Palette, label: 'Tokens', to: '/dashboard/games' },
];

export function CenteredLogoNavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const NavItems = () => (
    <>
      {menuItems.map((item) => (
        <Link to={item.to} key={item.label} className="text-white hover:bg-gray-800 flex items-center gap-2 p-2 rounded-md">
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
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

