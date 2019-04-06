import React from 'react';
import { shallow } from 'enzyme';
import Job from './index';

describe('Test Job component', () => {
  it('able to render', () => {
    let data = {
      title: 'web developer',
      description: 'desc',
      location: 'location'
    };

    const component = shallow(<Job data={data}/>);

    const condi = component.text().includes('web developer');

    expect(condi).toBe(true);
  });
});
