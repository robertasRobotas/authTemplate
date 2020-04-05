import React from 'react';
import styled from 'styled-components';
import navbarLinks from './navbarLinks';

const Wrapper = styled.div`
  height: 4em;
  background-color: brown;
`;

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <ul>
          {navbarLinks.map((objLink, i) => {
            return (
              <li>
                <a href={objLink.link}>{objLink.text}</a>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </>
  );
};

export default Navbar;
