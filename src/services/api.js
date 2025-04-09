import axios from 'axios';

// Use the Render backend URL for production
const API_BASE = process.env.REACT_APP_API_URL || 'https://student-job-tracker-backend-ye6h.onrender.com/api/jobs';

export const getJobs = () => axios.get(API_BASE);

export const addJob = (job) => axios.post(API_BASE, job);

export const deleteJob = (id) => axios.delete(`${API_BASE}/${id}`);

export const updateJobStatus = (id, status) =>
  axios.patch(`${API_BASE}/${id}`, { status });
