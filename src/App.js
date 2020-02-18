import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return <BrowserRouter>
    <div className="App">

      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />

    </div>
  </BrowserRouter>
}

export default App;
