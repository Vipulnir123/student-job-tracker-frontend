import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/jobs';

export const getJobs = () => axios.get(API_BASE);

export const addJob = (job) => axios.post(API_BASE, job);

export const deleteJob = (id) => axios.delete(`${API_BASE}/${id}`);

export const updateJobStatus = (id, status) =>
  axios.patch(`${API_BASE}/${id}`, { status });
