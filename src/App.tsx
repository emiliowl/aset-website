import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logoAset from './img/aset-logo-bg.png';
import './App.css';

const Home = lazy(() => import('./Home'));
const Agenda = lazy(() => import('./agenda/Agenda'));

const App = () => (
  <Router>
    <Suspense fallback={
      <div className="suspence text-center">
        <img src={logoAset} width="50%" alt="carregando..." />
      </div>
    }>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/agenda" component={Agenda} />
        <Route component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
