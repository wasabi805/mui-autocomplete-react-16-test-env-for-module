import React from 'react';
import "../../../styles.css";
import './App.scss'

import Foo from '../foo/Foo';
import {SmartSearchBarContainer} from 'mui-autocomplete-react-16-webpack-module';

const App =()=>{
    return(
        <div>
            {/* Test APP */}
            {/* <div className={'test'}>test sass</div> */}
            <SmartSearchBarContainer/>
            {/* <Foo/> */}
        </div>
    )
}
export default App