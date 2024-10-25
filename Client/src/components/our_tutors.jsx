import React, { useState, useEffect, useCallback } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
    {
        name: "Emily Chen",
        title: "High School Student",
        review: "This learning platform has completely transformed my study habits. The interactive lessons and practice quizzes have helped me improve my grades significantly. I feel much more confident in my classes now!",
        imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Michael Rodriguez",
        title: "Parent of Middle School Student",
        review: "As a parent, I'm impressed by how engaging this platform is for my child. The progress tracking feature allows me to stay involved in their learning journey. It's been a great investment in my child's education.",
        imageUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Sarah Johnson",
        title: "College Student",
        review: "The flexibility of this platform has been a game-changer for my busy schedule. I can access lessons and complete assignments on my own time. The quality of the content is excellent, and it's helped me stay on top of my coursework.",
        imageUrl: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "David Kim",
        title: "Parent of Elementary School Student",
        review: "My child loves the gamified learning approach of this platform. It's amazing to see how excited they are about learning new concepts. The variety of subjects covered is impressive, and the content is always age-appropriate.",
        imageUrl: "https://i.pravatar.cc/150?img=7",
    },
    {
        name: "Lisa Thompson",
        title: "High School Student",
        review: "The personalized learning paths have been incredibly helpful. The platform adapts to my strengths and weaknesses, ensuring I'm always challenged but not overwhelmed. It's like having a personal tutor available 24/7!",
        imageUrl: "https://i.pravatar.cc/150?img=9",
    },
    {
        name: "Alex Nguyen",
        title: "Parent of High School Student",
        review: "This platform has been a lifesaver during remote learning. The live tutoring sessions and collaborative study groups have helped my teenager stay connected and motivated. I've seen a real improvement in their grades and confidence.",
        imageUrl: "https://i.pravatar.cc/150?img=11",
    },
]

export default function ReviewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000) // Change slide every 5 seconds
        return () => clearInterval(intervalId)
    }, [nextSlide])

    return (
        <section className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex max-w-[90vw] items-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Students and Parents Say</h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="flex flex-col items-center text-center max-w-md mx-auto">
                                        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
                                            <Avatar className="w-24 h-24 mb-6 ring-4 ring-blue-300 ring-opacity-50">
                                                <AvatarImage src={review.imageUrl} alt={review.name} />
                                                <AvatarFallback>{review.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                            </Avatar>
                                            <h3 className="font-semibold text-xl text-white mb-1">{review.name}</h3>
                                            <p className="text-sm text-blue-200 mb-4">{review.title}</p>
                                            <p className="text-white leading-relaxed">&ldquo;{review.review}&rdquo;</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full"
                        onClick={prevSlide}
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full"
                        onClick={nextSlide}
                        aria-label="Next review"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
                <div className="flex justify-center mt-8">
                    {reviews.map((_, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className={`mx-1 rounded-full w-3 h-3 p-0 ${
                                index === currentIndex ? "bg-white" : "bg-white bg-opacity-30"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}