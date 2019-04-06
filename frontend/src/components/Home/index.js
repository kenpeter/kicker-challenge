import React from 'react';

const Home = ({ data }) => {
  function buildLayout() {
    console.log('--');
    console.log(data);
  }

  return (
    <div className='home'>
      { buildLayout() }
    </div>
  );
};

export default Home;


