import React, { Component } from 'react';
import { default as JobComponent } from '../../components/Job';

class Job extends Component {
  render() {
    const data = this.props.location.data;

    return (
      <div>
        <JobComponent
          data={data}
        />
      </div>
    );
  }
}

export default Job;
