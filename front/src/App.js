import React from 'react';
import axios from 'axios';

function App() {
  const apiCall = () => {
    axios
      .get('http://localhost:8085/user/redirect', { withCredentials: true })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className='App'>
      <a
        href='http://localhost:8085/user/auth/google'
        style={{
          display: 'block',
          backgroundColor: 'red',
          width: '100px',
          height: '100px'
        }}></a>
      <a
        href='http://localhost:8085/user/logout'
        style={{
          display: 'block',
          backgroundColor: 'grey',
          width: '100px',
          height: '100px'
        }}></a>
      <a
        onClick={apiCall}
        style={{
          display: 'block',
          backgroundColor: 'black',
          width: '100px',
          height: '100px'
        }}></a>
      <a
        href='http://localhost:8085/user/auth/facebook'
        style={{
          display: 'block',
          backgroundColor: 'blue',
          width: '100px',
          height: '100px'
        }}>
        facebook
      </a>
    </div>
  );
}

export default App;
