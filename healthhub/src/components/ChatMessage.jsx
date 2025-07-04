import React from 'react';

export default function ChatMessage({ sender, text }) {
  const isUser = sender === 'user';
  return (
    <div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
        {text}
      </div>
    </div>
  );
}
