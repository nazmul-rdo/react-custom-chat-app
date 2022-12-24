import { Fragment, React, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Massanger from './components/Massanger';

function App() {
    const [isTaggle,setIsTaggle] =useState(false);
    return (
        <Fragment>
            {!isTaggle?
            <Login isTaggle={isTaggle} setIsTaggle={setIsTaggle} />
            :
            <Massanger isTaggle={isTaggle} setIsTaggle={setIsTaggle}/>} 
        </Fragment>

    );
}

export default App;
