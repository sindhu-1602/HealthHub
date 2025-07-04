import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 mb-4 flex gap-4">
      <Link to="/" className="hover:underline">Dashboard</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
      <Link to="/notifications" className="hover:underline">Notifications</Link>
      <Link to="/chat" className="hover:underline">Chat</Link>
    </nav>
  );
}
