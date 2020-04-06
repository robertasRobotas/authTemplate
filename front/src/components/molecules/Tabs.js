import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../atoms';

const Tabs = styled.ul`
  list-style-type: none;
`;

const NavBarTabs = ({ navLinks }) => (
  <Tabs>
    {navLinks.map((link, i) => (
      <Link path={link.path} text={link.text} />
    ))}
  </Tabs>
);

export default NavBarTabs;
