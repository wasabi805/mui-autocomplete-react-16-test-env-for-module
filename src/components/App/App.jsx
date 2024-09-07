import React from 'react';
import "../../../styles.css";
import './App.scss'

import Foo from '../foo/Foo';

const App =()=>{
    return(
        <div>
            Test APP
            <div className={'test'}>test sass</div>
            <Foo/>
        </div>
    )
}
export default App