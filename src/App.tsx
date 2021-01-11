import React from 'react';
import './App.scss';

import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ViewTickets from './pages/ViewTickets';
import NewTicket from './pages/NewTicket';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid">
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/view" exact component={ViewTickets} />
          <Route path="/new" exact component={NewTicket} />
        </div>
      </div>
    </div>
  );
}

export default App;
