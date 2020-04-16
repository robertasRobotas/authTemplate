import React from 'react';
import Wrapper from '../../_hoc/Wrapper';
import { observer } from 'mobx-react';

const Main = ({ history, location, rootModel }) => {
  return (
    <>
      <Wrapper history={history} rootModel={rootModel} location={location}>
        <button onClick={rootModel.auth.getUserData}>aaaa</button>
        gggggg
      </Wrapper>
    </>
  );
};

export default observer(Main);
