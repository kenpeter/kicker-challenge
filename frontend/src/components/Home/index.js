import React from 'react';

const Home = ({ data, viewSingleJob, deleteSingleJob }) => {
  function buildLayout() {
    let res = data.map((item, index) => {
      return (
        <tr key={index}>
          <td><a href="#" onClick={() => viewSingleJob(item.id)}>{item.title}</a></td>
          <td><a href="#" onClick={() => deleteSingleJob(item.id)}>Delete</a></td>
        </tr>
      );
    });

    return res;
  }


  return (
    <div className='home'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Job title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          { buildLayout() }
        </tbody>
      </table>
    </div>
  );
};

export default Home;


