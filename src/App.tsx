import React from 'react';
import './App.scss';

import Header from './components/Header';
import Home from './pages/Home';
import ViewTickets from './pages/ViewTickets';

function App() {
  return (
    <div className="App">
      <Header />
      <ViewTickets />
    </div>
  );
}

export default App;
