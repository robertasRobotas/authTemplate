import React from 'react';
import axios from 'axios';

function App() {

  const callToApi = () =>{
    axios.get('http://localhost:8085/user/goo').then((response)=>{
      console.log(response);
    });
  }


  return (
    <div className="App">
        <a href="http://localhost:8085/user/auth/google" style={{display:"block", backgroundColor:"red", width:"100px", height:"100px"}} ></a>
        <div style={{backgroundColor:"blue", width:"100px", height:"100px"}} onClick={callToApi}></div>
    </div>
  );
}

export default App;
