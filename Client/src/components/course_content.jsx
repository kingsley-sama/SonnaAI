'use client'

import { useState } from 'react'
import { Play, MessageSquare, X } from 'lucide-react'
import janedoe from '../assets/images/steptodown.com755174.jpg'
export default function Courses() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="relative flex flex-col h-screen bg-gray-900 text-gray-300">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">Fundamentals of Web Design</h1>
        <p className="text-sm text-gray-400 mb-6">Natalie Storm, Design Department</p>
        <div className="relative aspect-video mb-6">
          <img
            src={janedoe}
            alt="Course instructor"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <button className="absolute bottom-4 left-4 bg-gray-800 p-2 rounded-full">
            <Play className="w-6 h-6" />
          </button>
        </div>
        <div className="flex mb-6 border-b border-gray-700">
          <button className="text-blue-400 border-b-2 border-blue-400 pb-2 mr-4">Notes</button>
          <button className="text-gray-500 pb-2 mr-4">Resources</button>
          <button className="text-gray-500 pb-2">Quiz(3)</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="mb-4">
            Hi guys, Natalie here with a very unconventional method that will get you hooked within minutes into this awesome course. As you might be already knowing, web development is the next biggest thing that is going to revolutionize the world.
          </p>
          <p>
            With the possibilities sitting wide open, you might be curious how you can get into the bandwagon a little earlier and be a legit expert. This chapter covers the fundamentals of web design.
          </p>
        </div>
      </div>
      
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 w-full max-w-md rounded-lg shadow-xl">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Chat</h2>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 h-96 overflow-auto">
              <div className="flex mb-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded mr-2">General Chat</button>
                <button className="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded">AI Chat Assistant</button>
              </div>
              <div className="space-y-4">
                <ChatMessage name="Rendra" message="I think we should add more idea" time="20:32" />
                <ChatMessage name="Lucas Do" message="Agree with that! 👍" time="20:32" />
                <ChatMessage name="Caroline J" message="https://dribbble.com/shots/21033909-neurs" time="20:31" isLink />
                <ChatMessage name="You" message="Let's add 'How we work' section" time="20:30" isYou />
                <ChatMessage name="Caroline J" message="Yes, let's try with the solution then" time="20:29" />
                <ChatMessage name="Lucas Do" message="Fine enough! Let's rock, guys!" time="20:28" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ChatMessage({ name, message, time, isLink = false, isYou = false }) {
  return (
    <div className={`flex items-start ${isYou ? 'justify-end' : ''}`}>
      <div className={`max-w-[80%] ${isYou ? 'bg-gray-700' : 'bg-gray-900'} rounded-lg p-3`}>
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className={`text-sm ${isLink ? 'text-blue-400' : 'text-gray-300'}`}>{message}</p>
      </div>
    </div>
  )
}
