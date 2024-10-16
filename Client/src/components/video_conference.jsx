import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Video, MonitorUp, Users, MessageSquare, MoreVertical, Send, MicOff, VideoOff, X } from 'lucide-react'

export default function VideoConference() {
  const [chatMessage, setChatMessage] = useState('')
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isChatVisible, setIsChatVisible] = useState(false)

  const participants = [
    { name: 'Sarah', image: '/placeholder.svg?height=80&width=80&text=S' },
    { name: 'John', image: '/placeholder.svg?height=80&width=80&text=J' },
    { name: 'Emily', image: '/placeholder.svg?height=80&width=80&text=E' },
    { name: 'Michael', image: '/placeholder.svg?height=80&width=80&text=M' },
    { name: 'Jessica', image: '/placeholder.svg?height=80&width=80&text=J' },
  ]

  const chatMessages = [
    { sender: 'Rendra', message: 'I think we should add more ideas' },
    { sender: 'Lucas Do', message: 'Agree with that! 🔥' },
    { sender: 'Caroline J', message: 'https://example.com/reference/link' },
    { sender: 'You', message: "Let's add 'How we work' section" },
    { sender: 'Grigore', message: "Yes, let's add this solution then" },
    { sender: 'Lucas Do', message: "Fine enough! Let's rock, guys!" },
  ]

  const toggleChat = () => setIsChatVisible(!isChatVisible)

  return (
       <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Top bar with participant thumbnails */}
      <ScrollArea className="bg-gray-800 p-2 whitespace-nowrap">
        <div className="flex space-x-2">
          {participants.map((participant, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar className="w-16 h-16 border-2 border-purple-600"> 
                <AvatarImage src={participant.image} alt={participant.name} />
                <AvatarFallback>{participant.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-xs mt-1">{participant.name}</p>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Main video */}
        <div className="flex-1 relative">
          <img 
            src="/placeholder.svg?height=720&width=1280&text=Main+Speaker" 
            alt="Main speaker" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-gray-800/75 px-2 py-1 rounded"> 
            Caroline Johnson
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/75 px-2 py-1 rounded max-w-md text-center"> {/* Updated background color */}
            So here is the think. We will redesign the website and make it more clean
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            {participants.slice(0, 3).map((participant, index) => (
              <Avatar key={index} className="w-12 h-12 border-2 border-purple-600">
                <AvatarImage src={participant.image} alt={participant.name} />
                <AvatarFallback>{participant.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        {/* Chat sidebar */}
        <Card className={`w-80 flex flex-col absolute inset-y-0 right-0 transform transition-transform duration-300 ease-in-out ${isChatVisible ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 bg-gray-800 text-white`}>
          <CardContent className="flex flex-col h-full p-0">
            <div className="p-4 bg-gray-700 font-bold flex justify-between items-center">
              <span>Chat</span>
              <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="flex-1 p-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{msg.sender}</p>
                  <p className="text-sm">{msg.message}</p>
                </div>
              ))}
            </ScrollArea>
            <div className="p-4 flex border-t border-gray-700">
              <Input
                type="text"
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1 mr-2 bg-gray-600 text-white" 
              />
              <Button size="icon"><Send className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom control bar */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex space-x-2 sm:space-x-4">
          <Button 
            variant={isMuted ? "destructive" : "secondary"} 
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className={`bg-gray-700 ${isMuted ? 'hover:bg-red-600' : 'hover:bg-gray-600'}`}
          >
            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button 
            variant={isVideoOff ? "destructive" : "secondary"} 
            size="icon"
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`bg-gray-700 ${isVideoOff ? 'hover:bg-red-600' : 'hover:bg-gray-600'}`}
          >
            {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
          </Button>
          <Button variant="secondary" size="icon" className="hidden sm:inline-flex bg-gray-700 hover:bg-gray-600"> 
            <MonitorUp className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="hidden sm:inline-flex bg-gray-700 hover:bg-gray-600"> 
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="md:hidden bg-gray-700 hover:bg-gray-600" onClick={toggleChat}> 
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="sm:hidden bg-gray-700 hover:bg-gray-600"> 
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="destructive" className="bg-red-600 hover:bg-red-700">Leave Meet</Button>
      </div>
    </div>
  )
}
