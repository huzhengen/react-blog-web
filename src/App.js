import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';

import Index from './components/Index'
import Login from './components/Login'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">index</Link>
              </li>
              <li>
                <Link to="/login/">login</Link>
              </li>             
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/login/" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
