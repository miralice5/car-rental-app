import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './pages/Home';
import CarList from './pages/CarList';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cars" component={CarList} />
          {/* Add more routes for other pages */}
        </Switch>
      </Router>
  );
}

export default App;
