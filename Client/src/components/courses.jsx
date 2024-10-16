import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Link, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = ["All", "Advertising", "Design", "Marketing", "Illustration", "Brand"]

  return (
    <nav className="mb-6">
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] bg-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Button key={item} variant={item === "All" ? "default" : "ghost"} className="justify-start">
                  {item}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <Button key={item} variant={item === "All" ? "default" : "ghost"} className="text-sm">
            {item}
          </Button>
        ))}
      </div>
    </nav>
  )
}

const CourseCard = ({ title, description, price, discountedPrice, tags, startDate, icon }) => (
  <Card className="mb-4 bg-gray-800 text-white">
    <CardHeader className="relative p-0">
      <img src="/placeholder.svg?height=100&width=400" alt={title} className="w-full h-24 object-cover rounded-t-lg" />
      <div className="absolute top-2 left-2 bg-gray-900 rounded-full p-2">
        {icon}
      </div>
      {discountedPrice && (
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
          {Math.round((1 - discountedPrice / price) * 100)}% OFF
        </div>
      )}
    </CardHeader>
    <CardContent className="pt-4">
      <CardTitle className="text-lg mb-2">{title}</CardTitle>
      <p className="text-sm text-gray-400 mb-2">{description}</p>
      <div className="flex flex-wrap justify-between items-center mb-2">
        <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </CardContent>
    <CardFooter className="text-xs text-gray-400">
      Start: {startDate}
    </CardFooter>
  </Card>
)

const Calendar = () => (
  <Card className="bg-gray-800 text-white mb-6">
    <CardHeader className="flex justify-between items-center">
      <CardTitle className="text-lg">July 2023</CardTitle>
      <div className="flex space-x-2">
        <Button size="icon" variant="ghost">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-7 gap-2 text-center">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="text-xs font-semibold text-gray-400">
            {day}
          </div>
        ))}
        {Array.from({ length: 31 }, (_, i) => (
          <div
            key={i}
            className={`text-sm p-1 rounded-full ${i + 1 === 14 ? "bg-purple-600" : ""}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

const Mentors = () => (
  <Card className="bg-gray-800 text-white mb-6">
    <CardHeader className="flex justify-between items-center">
      <CardTitle className="text-lg">Mentors</CardTitle>
      <Button variant="link" className="text-purple-400">
        See all
      </Button>
    </CardHeader>
    <CardContent>
      {[
        { name: "John Wilson", role: "UI/UX Designer" },
        { name: "Daniel Hill", role: "Product Designer" },
        { name: "Sofia Harris", role: "Python Developer" },
        { name: "Eva Smith", role: "Motion Designer" },
      ].map((mentor, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
            <AvatarFallback>{mentor.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{mentor.name}</p>
            <p className="text-sm text-gray-400">{mentor.role}</p>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
)

const LearningProgress = () => (
  <Card className="bg-gray-800 text-white">
    <CardHeader className="flex justify-between items-center">
      <CardTitle className="text-lg">Learning Process</CardTitle>
      <Button variant="link" className="text-purple-400">
        See all
      </Button>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>Python Developer</span>
            <span>80%</span>
          </div>
          <Progress value={80} className="h-2 bg-gray-700" indicatorClassName="bg-green-500" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Test Engineer</span>
            <span>60%</span>
          </div>
          <Progress value={60} className="h-2 bg-gray-700" indicatorClassName="bg-purple-500" />
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function ResponsiveDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 " style={{ height: 'calc(100vh - [header-height])' }}>
      <Navigation />
      <div className="flex flex-col lg:flex-row lg:space-x-8 ">
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0" >
          <CourseCard
            title="UI/UX Designer"
            description="An online course for those who want to delve into UX/UI design"
            price={1800}
            tags={["UI/UX", "Web"]}
            startDate="15 November - 17 January"
            icon={<Link className="h-6 w-6" />}
          />
          <CourseCard
            title="Python from scratch"
            description="This course provides a comprehensive introduction to the Python programming language"
            price={3400}
            discountedPrice={2000}
            tags={["Python", "Development"]}
            startDate="13 December - 20 January"
            icon={<Link className="h-6 w-6" />}
          />
          <CourseCard
            title="Test Engineer"
            description="The course provides hands-on training in testing methodologies and techniques"
            price={1800}
            tags={["Engineering", "Testing"]}
            startDate="5 January - 15 February"
            icon={<Link className="h-6 w-6" />}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <Calendar />
          <Mentors />
          <LearningProgress />
        </div>
      </div>
    </div>
  )
}
