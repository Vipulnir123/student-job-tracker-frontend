import React, { useState } from 'react';
import { addJob } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

const AddJobForm = () => {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    link: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(form);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <Link to="/" className="text-blue-600 hover:underline inline-block mb-4">← Back</Link>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            required
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            required
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <input
            name="appliedDate"
            value={form.appliedDate}
            onChange={handleChange}
            type="date"
            required
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="Job Link"
            required
            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobForm;
