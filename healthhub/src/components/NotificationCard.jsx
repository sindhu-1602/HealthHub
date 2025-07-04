import React from 'react';

export default function NotificationCard({ title, message }) {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-3 rounded">
      <h2 className="font-semibold">{title}</h2>
      <p>{message}</p>
    </div>
  );
}

