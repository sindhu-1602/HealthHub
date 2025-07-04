import React from 'react';
import NotificationCard from '../components/NotificationCard';

const mockNotifications = [
  { id: 1, title: 'Upcoming Appointment', message: 'Your check-up is scheduled for tomorrow at 10:00 AM.' },
  { id: 2, title: 'Medication Reminder', message: 'Take your vitamin D tablet at 6:00 PM.' },
  { id: 3, title: 'Water Reminder', message: 'Drink 1 glass of water now.' },
];

export default function Notifications() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {mockNotifications.map((note) => (
        <NotificationCard key={note.id} title={note.title} message={note.message} />
      ))}
    </div>
  );
}
