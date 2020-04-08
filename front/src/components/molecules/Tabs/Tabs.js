import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../atoms';
import burgerButton from '../../../assets/photos/Burger.png';

const Tabs = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-gap: 5px;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  padding-top: 1em;
  background-color: blue;
  justify-content: end;

  @media only screen and (min-width: 600px) {
    /* For mobile phones: */
    background-color: yellow;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const BurgerImage = styled.img`
  width: 1em;
  height: 1em;
  float: right;
  margin-right: 1em;
`;

const SmallMenuWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const NavBarTabs = ({ navLinks, pressedTab, setPressedTab }) => {
  const [smallMenuStatus, setSmallMenu] = useState(false);
  return (
    <>
      <Tabs>
        <SmallMenuWrapper>
          <BurgerImage src={burgerButton} alt='burger' />
        </SmallMenuWrapper>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            path={link.path}
            text={link.text}
            pressedTab={pressedTab}
            setPressedTab={setPressedTab}
          />
        ))}
      </Tabs>
    </>
  );
};

export default NavBarTabs;
