import React from 'react';
import axios from 'axios';

function App() {
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
          backgroundColor: 'blue',
          width: '100px',
          height: '100px'
        }}></a>
    </div>
  );
}

export default App;
