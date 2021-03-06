import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="app full-width">
      <BrowserRouter>
        <header className="header">
          <h1 className="heading-lg"><FontAwesomeIcon icon={faNewspaper} /> 4U News</h1>
        </header>
        <main className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer className="footer">
          Michelle Diniz | Meiuca Test | 2021
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
