import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import First from './pages/first/First';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={First} />
      </Switch>
    </div>
  );
}

export default App;
