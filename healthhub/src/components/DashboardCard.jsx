import React from 'react';

export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h2 className="text-gray-600 text-sm font-semibold">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
