import React from 'react';
import Welcome from './Welcome';

it('renders two body paragraphs', () => {
  const wrapper = shallow(<Welcome closeWelcome={() => (false)} />);
  expect(wrapper.find('AlertBodyParagraph')).toHaveLength(1);
});