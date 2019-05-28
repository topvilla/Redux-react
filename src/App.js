import React from 'react';
import ContentView from '../src/Componnets/contentView/index';
import OptionList from '../src/Componnets/optionList/index';
import {Provider} from 'react-redux';
import Store from '../src/Store/store';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
        <ContentView />
        <OptionList />
    </Provider>
    
  );
}

export default App;
