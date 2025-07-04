import React from 'react';
import DashboardCard from '../components/DashboardCard';

export default function Dashboard() {
  const data = [
    { title: 'Next Appointment', value: 'Tomorrow at 10 AM' },
    { title: 'Steps Today', value: '5,243 steps' },
    { title: 'Sleep Last Night', value: '7 hours 15 mins' },
    { title: 'Unread Messages', value: '2 new messages' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Health Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <DashboardCard key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
}
