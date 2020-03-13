import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserController from './components/UserController/UserController';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <UserController></UserController>
    </div>
  );
}

export default App;
