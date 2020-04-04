import React from 'react';
import axios from 'axios';

const call = () => {
  axios
    .get('http://localhost:8085/api/action/redirect', { withCredentials: true })
    .then((res) => {
      console.log(res);
    });
};

const Main = () => {
  return (
    <>
      MAIN PAGE <div onClick={call}>aaaaa</div>
    </>
  );
};

export default Main;
