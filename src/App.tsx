import React from 'react';
import './App.css';
import {Settings} from "./CounterWithRedux/Settings/Settings";
import {CounterWithRedux} from "./CounterWithRedux/Counter/CounterWithRedux";

function App() {
    return (
        <div className="App">

            {/*<CounterMain/>*/}

            <Settings/>
            <CounterWithRedux/>

        </div>
    );
}

export default App;
