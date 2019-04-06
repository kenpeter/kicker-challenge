import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('Test Home component', () => {
  it('able to render', () => {
    let data = '[{"id":1,"title":"Qui occaecati nam eligendi iusto assumenda ad. Aut ipsa est tempore earum. Fugiat vitae at voluptatibus ipsam aut tenetur.","description":"Exercitationem quod eligendi eius soluta. Explicabo quod rerum delectus tempore qui est vitae. Dolor velit nesciunt molestiae dicta enim maxime.","location":"6368 Wolff Trafficway Suite 872","created_at":"2019-04-05 13:53:02","updated_at":"2019-04-05 13:53:02"},{"id":2,"title":"Tempore quis tenetur repudiandae consequatur tenetur voluptatem non. Eaque temporibus aut eius ipsa cupiditate blanditiis voluptatem. Repellat explicabo dolores sit culpa.","description":"Sed numquam quibusdam occaecati architecto sit est ipsam. Ut blanditiis sint qui et voluptas. Modi molestiae quisquam aut repellendus ut. Modi delectus molestias debitis harum.","location":"77438 Casey Terrace Suite 451","created_at":"2019-04-05 13:53:02","updated_at":"2019-04-05 13:53:02"},{"id":5,"title":"web developer","description":"awesome developer","location":"Victoria","created_at":"2019-04-06 05:05:58","updated_at":"2019-04-06 05:05:58"},{"id":6,"title":"a","description":"a","location":"a","created_at":"2019-04-06 06:16:58","updated_at":"2019-04-06 06:16:58"},{"id":7,"title":"b","description":"b","location":"b","created_at":"2019-04-06 06:19:11","updated_at":"2019-04-06 06:19:11"},{"id":8,"title":"c","description":"c","location":"c","created_at":"2019-04-06 06:26:57","updated_at":"2019-04-06 06:26:57"}]';
    data = JSON.parse(data);

    const component = shallow(<Home data={data} deleteSingleJob={false}/>);
    const condi = component.text().includes('Job title');
    expect(condi).toBe(true);
  });
});
