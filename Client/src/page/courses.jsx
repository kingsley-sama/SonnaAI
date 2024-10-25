import React, { createContext, useContext, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Link } from "lucide-react"
import { ArrowRight, BookOpen } from "lucide-react"
import {toast} from "@/hooks/use-toast";
import emotional_inteligence from '../assets/images/steptodown.com208626.jpg'
import english from "../assets/images/steptodown.com402997.jpg"
import math from "../assets/images/steptodown.com808575.jpg"
import physics from "../assets/images/steptodown.com768176.jpg"
import chemistry from "../assets/images/steptodown.com450360.jpg"
import biology from "../assets/images/steptodown.com931315.jpg"

// Create a context for registered courses
const RegisteredCoursesContext = createContext({
    registeredCourses: [],
    registerCourse: (course) => {},
})

// Custom hook to use the registered courses context
const useRegisteredCourses = () => useContext(RegisteredCoursesContext)

// Provider component for the registered courses context
const RegisteredCoursesProvider = ({ children }) => {
    const [registeredCourses, setRegisteredCourses] = useState([])

    const registerCourse = (course) => {
        setRegisteredCourses((prevCourses) => [...prevCourses, course])
        toast({
            title: "Course Registered",
            description: `You have successfully registered for ${course.title}`,
        })
    }

    return (
        <RegisteredCoursesContext.Provider value={{ registeredCourses, registerCourse }}>
            {children}
        </RegisteredCoursesContext.Provider>
    )
}

const CourseCard = ({ course, onRegister }) => {
    const { title, description, price, discountedPrice, tags, startDate, icon, img_url } = course

    return (
        <Card className="mb-4 bg-gray-800 text-white">
            <CardHeader className="relative p-0">
                <img src={img_url} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
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
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700" onClick={() => onRegister(course)}>
                        Register <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="text-xs text-gray-400 flex justify-between items-center">
                <span>Start: {startDate}</span>
                <span className="font-bold text-lg">
          {discountedPrice ? (
              <>
                  <span className="line-through text-gray-500 mr-2">${price}</span>
                  ${discountedPrice}
              </>
          ) : (
              `$${price}`
          )}
        </span>
            </CardFooter>
        </Card>
    )
}

export const CoursesPage = () => {
    const { registerCourse } = useRegisteredCourses()
    const courses = [
        {
            title: "Emotional Inteligence for kids",
            description: "An online course for those who want to delve into UX/UI design",
            price: 1800,
            tags: ["UI/UX", "Web"],
            startDate: "15 November - 17 January",
            img_url: emotional_inteligence, // Image imported at the top
            icon: <Link className="h-6 w-6" />,
        },
        {
            title: "Mathematics for STEM",
            description: "This course provides a comprehensive introduction to the Python programming language",
            price: 3400,
            discountedPrice: 2000,
            tags: ["Python", "Development"],
            startDate: "13 December - 20 January",
            img_url: math, // Image imported at the top
            icon: <Link className="h-6 w-6" />,
        },
        {
            title: "English Language",
            description: "The course provides hands-on training in testing methodologies and techniques",
            price: 1800,
            tags: ["Engineering", "Testing"],
            startDate: "5 January - 15 February",
            img_url: english, // Image imported at the top
            icon: <Link className="h-6 w-6" />,
        },
        {
            title: "Physics In STEM",
            description: "The course provides hands-on training in testing methodologies and techniques",
            price: 1800,
            tags: ["Engineering", "Testing"],
            startDate: "5 January - 15 February",
            img_url: physics, // Image imported at the top
            icon: <Link className="h-6 w-6" />,
        },
        {
            title: "Biology",
            description: "The course provides hands-on training in testing methodologies and techniques",
            price: 1800,
            tags: ["Engineering", "Testing"],
            startDate: "5 January - 15 February",
            img_url: biology, // Image imported at the top
            icon: <Link className="h-6 w-6" />,
        },
        {
            title: "Chemistry",
            description: "The course provides hands-on training in testing methodologies and techniques",
            price: 1800,
            tags: ["Engineering", "Testing"],
            startDate: "5 January - 15 February",
            img_url: chemistry, // Image imported at the top
            icon: <Link className="h-6 w-6" />,
        },
        // Add more courses as needed...
    ]
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-white">Available Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} onRegister={registerCourse} />
                ))}
            </div>
        </div>
    )
}