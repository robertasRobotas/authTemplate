import React from 'react';
import Wrapper from '../../../helpers/Wrapper';
import { observer } from 'mobx-react';

const Main = ({ history, location, rootModel }) => {
  return (
    <>
      <Wrapper rootModel={rootModel}>
        <button>aaaa</button>
        gggggg
      </Wrapper>
    </>
  );
};

export default observer(Main);
