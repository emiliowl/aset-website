import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logoAset from './img/aset-logo-bg.png';
import './App.css';

const Home = lazy(() => import('./Home'));
const Agenda = lazy(() => import('./agenda/Agenda'));

const Acupuntura = lazy(() => import('./specialties/Acupuntura'));
const Aromaterapia = lazy(() => import('./specialties/Aromaterapia'));
const Barras = lazy(() => import('./specialties/Barras'));
const Chromo = lazy(() => import('./specialties/Chromo'));
const Floral = lazy(() => import('./specialties/Floral'));
const Quiro = lazy(() => import('./specialties/Quiro'));
const Radionica = lazy(() => import('./specialties/Radionica'));
const Reiki = lazy(() => import('./specialties/Reiki'));

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
        
        <Route exact path="/acupuntura" component={Acupuntura} />
        <Route exact path="/aromaterapia" component={Aromaterapia} />
        <Route exact path="/barras" component={Barras} />
        <Route exact path="/cromoterapia" component={Chromo} />
        <Route exact path="/floral" component={Floral} />
        <Route exact path="/quiro" component={Quiro} />
        <Route exact path="/mesa-radionica" component={Radionica} />
        <Route exact path="/reiki" component={Reiki} />
        <Route component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
