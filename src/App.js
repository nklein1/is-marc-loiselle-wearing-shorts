import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage/HomePage.jsx';
import WhyPage from './containers/WhyPage/WhyPage.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/why' component={WhyPage} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
