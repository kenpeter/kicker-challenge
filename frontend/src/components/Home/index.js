import React from 'react';
import Config from '../../config';

const Home = ({ data }) => {
  function buildLayout() {
    const { deleteJobUrl, singleJobUrl } = Config;

    let res = data.map((item, index) => {
      return (
        <tr key={index}>
          <td><a href="#" onClick={() => this.viewSingleJob(item.id)}>{item.title}</a></td>
          <td><a href="#" onClick={() => this.deleteSingleJob(item.id)}>Delete</a></td>
        </tr>
      );
    });

    return res;
  }

  function viewSingleJob(id) {
    console.log(id);
  }

  function deleteSingleJob(id) {
    console.log(id);
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


