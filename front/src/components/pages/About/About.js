import React from 'react';
import Wrapper from '../../_hoc/Wrapper';

const About = ({ history, location, rootModel }) => {
  console.log('about');

  return (
    <Wrapper rootModel={rootModel} location={location}>
      ABOUT
    </Wrapper>
  );
};

export default About;
