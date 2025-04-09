import React from 'react';

function JobList({ jobs, onDelete, onUpdate }) {
  if (jobs.length === 0) return <p>No jobs added yet.</p>;

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
          }}
        >
          <h3>{job.company}</h3>
          <p><strong>Position:</strong> {job.position}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <button onClick={() => onUpdate(job._id, 'Interview')}>Set to Interview</button>
          <button onClick={() => onUpdate(job._id, 'Declined')}>Set to Declined</button>
          <button onClick={() => onDelete(job._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default JobList;
