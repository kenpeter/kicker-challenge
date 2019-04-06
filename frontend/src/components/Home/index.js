import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({ data, deleteSingleJob }) => {
  function buildLayout() {
    let res = data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>

          <td>
            <Link to={{
              pathname: '/view-job',
              data: {
                title: item.title,
                description: item.description,
                location: item.location
              }
            }}>{item.title}</Link>
          </td>

          <td><a href="#" onClick={() => deleteSingleJob(item.id)}>Delete</a></td>
        </tr>
      );
    });

    return res;
  }


  return (
    <div className='home'>
      <br/>
      <p>
        <Link class='btn btn-primary' to='/view-create-job'>Create a job ad</Link>
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
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


