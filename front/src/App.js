import React, { useEffect } from 'react';
import Router from './router';
import { getUserData } from './apiCalls/user';
import RootModel from './store/RootModel';
import { onSnapshot } from 'mobx-state-tree';

const rootModel = RootModel.create({ auth: {} });
onSnapshot(rootModel, (snapshot) => console.log('snapshot', snapshot));
const App = () => {
  getUserData();
  return (
    <>
      <Router rootModel={rootModel} />
    </>
  );
};

export default App;
