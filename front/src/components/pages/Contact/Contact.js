import React from 'react';

import Wrapper from '../../_hoc/Wrapper';

const Contact = ({ history, location, rootModel }) => {
  console.log('contact');

  return (
    <Wrapper rootModel={rootModel} location={location}>
      CONTACT
    </Wrapper>
  );
};

export default Contact;
