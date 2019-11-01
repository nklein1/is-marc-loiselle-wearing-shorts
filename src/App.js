import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import HomePage from './containers/homepage/homepage.jsx';
import WhyPage from './containers/whypage/whypage.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HashRouter basename='/is-marc-loiselle-wearing-shorts'>
        <Route exact path='/' component={HomePage} />
        <Route path='/why' component={WhyPage} />
      </HashRouter>
    </div>
  );
}

export default App;
