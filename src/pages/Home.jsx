import React, { useEffect, useState } from 'react';
import { getJobs, deleteJob, updateJobStatus } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs();
  };

  const handleStatusChange = async (id, status) => {
    await updateJobStatus(id, status);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">🎯 Student Job Tracker</h2>

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-end mb-4">
          <Link to="/add">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              + Add Job
            </button>
          </Link>
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-gray-500">No jobs added yet.</p>
        )}

        {jobs.map((job) => (
          <div key={job._id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{job.company}</h3>
              <span className="text-sm text-gray-500">{new Date(job.appliedDate).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700 mb-2">{job.role}</p>

            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm font-medium">Status:</label>
              <select
                value={job.status}
                onChange={(e) => handleStatusChange(job._id, e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>

            <a
              href={job.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm block mb-2"
            >
              View Job Posting
            </a>

            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
