import React, { useState } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';

function App() {
  const [activeUserid,setActiveUserid]=useState(null)
  return (
    <div className="App">
      <div>
        <UserList setActiveUserid={setActiveUserid}/> 
      </div>
     {
      activeUserid &&  <div>
      <UserDetail activeUserid={activeUserid}/>
    </div>
     }
    </div>
  );
}

export default App;
