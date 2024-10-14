import React, { useState } from 'react';
import "./meeting.css"
import { ChevronLeft, Mic, Video, LayoutGrid, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

export function MeetingRoom (){
  const participants = [
    { id: 1, image: "https://i.pravatar.cc/100?img=1" },
    { id: 2, image: "https://i.pravatar.cc/100?img=2" },
    { id: 3, image: "https://i.pravatar.cc/100?img=3" },
    { id: 4, image: "https://i.pravatar.cc/100?img=4" },
    { id: 5, image: "https://i.pravatar.cc/100?img=5" },
  ];

  return (
    <div className="video-conference">
      <header>
        <div className="header-left">
          <ChevronLeft className="icon" />
          <span className="logo">SONNA-AI</span>
        </div>
        <div className="header-center">
          <span className="meeting-name">[Backlog 03]- Aibo Redesign Landing Page</span>
          <span className="meeting-progress">01 23 05</span>
        </div>
        <div className="header-right">
          <img src="https://i.pravatar.cc/40?img=6" alt="User" className="user-avatar" />
        </div>
      </header>
      <main>
        <div className="participants-list">
          {participants.map((participant) => (
            <div key={participant.id} className="participant-thumbnail">
              <img src={participant.image} alt={`Participant ${participant.id}`} />
            </div>
          ))}
        </div>
        <div className="main-content">
          <div className="main-video">
            <img src="https://i.pravatar.cc/1000?img=12" alt="Main speaker"/>
            <div className="caption">So here is the think, We will redesign the website and make it more clean</div>
          </div>
          <ChatComponent />
        </div>
      </main>
      <footer>
        <div className="footer-left">
          <span className="time">5:48</span>
        </div>
        <div className="footer-center">
          <button className="control-button"><Mic className="icon" /></button>
          <button className="control-button"><Video className="icon" /></button>
          <button className="control-button"><Share2 className="icon" /></button>
          <button className="control-button"><LayoutGrid className="icon" /></button>
          <button className="control-button"><MessageSquare className="icon" /></button>
          <button className="control-button"><MoreHorizontal className="icon" /></button>
        </div>
        <div className="footer-right">
          <button className="leave-button">Leave Meet</button>
        </div>
      </footer>

    </div>
  );
}


const ChatComponent = () => {
  const [chatType, setChatType] = useState('general');
  const [messages, setMessages] = useState([
    { sender: 'Rendra', content: 'I think we should add more idea' },
    { sender: 'Lucas Do', content: 'Agrees with that! 🔥' },
    { sender: 'Caroline J', content: 'https://ai-chat.com/pattern/abc/members/123' },
    { sender: 'You', content: "Let's add \"How we work\" section" },
    { sender: 'Caroline J', content: "Yes, let's work on the solution then" },
    { sender: 'Lucas Do', content: 'Fair enough! Let\'s rock, guys!' },
  ]);

  const handleToggle = () => {
    setChatType(chatType === 'general' ? 'ai' : 'general');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    if (input.value.trim()) {
      setMessages([...messages, { sender: 'You', content: input.value }]);
      input.value = '';
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="toggle-container">
          <button 
            className={`toggle-button ${chatType === 'general' ? 'active' : ''}`}
            onClick={() => setChatType('general')}
          >
            General Chat
          </button>
          <button 
            className={`toggle-button ${chatType === 'ai' ? 'active' : ''}`}
            onClick={() => setChatType('ai')}
          >
            AI Chat Assistant
          </button>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'You' ? 'user-message' : 'other-message'}`}>
            <strong>{message.sender}: </strong>{message.content}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input type="text" name="messageInput" placeholder="Type a message..." />
        <button type="submit" className="send-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"/>
          </svg>
        </button>
      </form>
      <style>{`

      `}</style>
    </div>
  );
};

