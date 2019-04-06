import React, { Component } from 'react';
import { createJobAPI } from "../../reducers/createJob";
import { connect } from 'react-redux';

class CreateJob extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      location: ''
    }
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  createJob() {
    console.log(this.state);
    this.props.createJobAPIProps(this.state);
  }

  render() {
    return (
      <div className='createJob'>
        <h3>Create a new job ad</h3>

        <div className='field'>
          <label>Title</label>
          <p>
            <input
              name='title'
              value={ this.state.title  || '' }
              onChange={ this.handleInputChange.bind(this) }
            />
          </p>
        </div>

        <div className='field'>
          <label>Description</label>
          <p>
            <input
              name='description'
              value={ this.state.description  || '' }
              onChange={ this.handleInputChange.bind(this) }
            />
          </p>
        </div>

        <div className='field'>
          <label>Location</label>
          <p>
            <input
              name='location'
              value={ this.state.location  || '' }
              onChange={ this.handleInputChange.bind(this) }
            />
          </p>
        </div>

        <p>
          <button className='btn btn-primary' onClick={this.createJob.bind(this)}>Create</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => ({
  createJobAPIProps: (item) => dispatch(createJobAPI(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
