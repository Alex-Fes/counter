import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter/Counetr";
import Settings from "./Settings/Settings";

function App() {
  return (
    <div className="App">
      <Counter/>
        <Settings/>
    </div>
  );
}

export default App;
