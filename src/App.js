import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import First from './pages/first/First';
import Second from './pages/second/Second';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={First} />
        <Route path="/complaints" exact component={Second} />
      </Switch>
    </div>
  );
}

export default App;
