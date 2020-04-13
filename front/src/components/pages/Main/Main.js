import React, { useState, useEffect } from 'react';
import { Spinner } from '../../atoms';
import { Navbar } from '../../organisms/';
import { observer } from 'mobx-react';

const Main = (props) => {
  console.log('props', props);
  return (
    <>
      {props.rootModel.getDisplayName()}
      <button onClick={props.rootModel.getUserData}></button>
    </>
  );
};

export default observer(Main);
