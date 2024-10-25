'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TestimonialWithYouTubeVideo() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    const toggleVideo = () => setIsVideoOpen(!isVideoOpen)

    // Replace this with your actual YouTube video ID
    const youtubeVideoId = 'iRO1P_ONNFQ'

    return (
        <div id={"about"} className="bg-gray-900 text-white p-8 flex flex-col md:flex-row items-center mt-[100px] mb-[100px] justify-between max-w-[70vw]">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">Simply the best. Better than all the rest.</h2>
                <p className="mb-4">I'd recommend this product to beginners and all users.</p>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis imperdiet ipsum massa, semper. Aliquam sapien ornare nec posuere risus.</p>
                <p className="mb-4">Magna erat vel varius dictum. Pell leo turpis placerat tortor pulvinar nisi. Ut at.</p>
                <p className="text-gray-400">Daniel Pearson, Full Stack Developer</p>
            </div>
            <div className="md:w-1/2 relative">
                <div className="relative group cursor-pointer" onClick={toggleVideo}>
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202024-10-17%2016-49-54-spHLmA6ju0SMdVJADVJb3HJVjnuqV7.png"
                        alt="Testimonial"
                        className="w-full rounded-lg h-[400px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-16 h-16 text-white" />
                    </div>
                </div>
                {isVideoOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-lg relative w-full max-w-4xl">
                            <Button
                                onClick={toggleVideo}
                                className="absolute -top-12 right-0 text-white hover:text-gray-200"
                                variant="ghost"
                                size="icon"
                                aria-label="Close video"
                            >
                                <X className="h-8 w-8" />
                            </Button>
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}