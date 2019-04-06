import React from 'react';

const Job = ({ data }) => {
  return (
    <div className='job'>
      <h3>Job title</h3>
      <p>{data.title}</p>

      <h4>Description</h4>
      <p>{data.description}</p>

      <h4>Location</h4>
      <p>{data.location}</p>
    </div>
  );
};

export default Job;


