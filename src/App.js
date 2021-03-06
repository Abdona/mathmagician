import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import MyCalculator from './components/Calculator';
import HomePage from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <h1>Math Magicians</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quotes">quote</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/quotes">
            <Quote />
          </Route>
          <Route path="/calculator">
            <MyCalculator />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
