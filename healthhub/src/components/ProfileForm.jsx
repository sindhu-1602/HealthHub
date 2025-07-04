import React, { useState } from 'react';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 w-full" />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
