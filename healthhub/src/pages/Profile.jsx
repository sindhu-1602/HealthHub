import React from 'react';
import ProfileForm from '../components/ProfileForm';

export default function Profile() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <ProfileForm />
    </div>
  );
}
