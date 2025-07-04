import React, { useState } from 'react';
import ChatMessage from '../components/ChatMessage';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'doctor', text: 'Hello! How are you feeling today?' },
    { id: 2, sender: 'user', text: 'I have a slight headache.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with Doctor</h2>
      <div className="bg-gray-100 p-4 h-80 overflow-y-scroll rounded shadow mb-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border p-2 rounded"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
