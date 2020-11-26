import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logoAset from './img/aset-logo-bg.png';
import './App.css';

const Home = lazy(() => import('./Home'));
const Agenda = lazy(() => import('./agenda/Agenda'));

const Acupuntura = lazy(() => import('./specialties/Acupuntura'));
const Ambulatorio = lazy(() => import('./projects/Ambulatorio'));
const Aromaterapia = lazy(() => import('./specialties/Aromaterapia'));
const AsetSocial = lazy(() => import('./projects/AsetSocial'));
const Barras = lazy(() => import('./specialties/Barras'));
const Chromo = lazy(() => import('./specialties/Chromo'));
const Floral = lazy(() => import('./specialties/Floral'));
const Quiro = lazy(() => import('./specialties/Quiro'));
const Radionica = lazy(() => import('./specialties/Radionica'));
const Reiki = lazy(() => import('./specialties/Reiki'));
const MapaAstral = lazy(() => import('./specialties/MapaAstral'));
const Constelacao = lazy(() => import('./specialties/Constelacao'));
const Meditacao = lazy(() => import('./specialties/Meditacao'));
const TarotTerapeutico = lazy(() => import('./specialties/TarotTerapeutico'));

const Amanda = lazy(() => import('./therapists/Amanda'));
const Camilla = lazy(() => import('./therapists/Camilla'));
const Lunder = lazy(() => import('./therapists/Lunder'));
const Simone = lazy(() => import('./therapists/Simone'));
const Tatyana = lazy(() => import('./therapists/Tatyana'));

const App = () => (
  <Router>
    <Suspense fallback={
      <div className="suspence text-center">
        <img src={logoAset} width="50%" alt="carregando..." />
      </div>
    }>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendars/:calendar_name/agenda" component={Agenda} />
        
        <Route exact path="/acupuntura" component={Acupuntura} />
        <Route exact path="/ambulatorio" component={Ambulatorio} />
        <Route exact path="/aromaterapia" component={Aromaterapia} />
        <Route exact path="/asetsocial" component={AsetSocial} />
        <Route exact path="/barras" component={Barras} />
        <Route exact path="/cromoterapia" component={Chromo} />
        <Route exact path="/floral" component={Floral} />
        <Route exact path="/quiro" component={Quiro} />
        <Route exact path="/mesa-radionica" component={Radionica} />
        <Route exact path="/reiki" component={Reiki} />
        <Route exact path="/mapa-astral" component={MapaAstral} />
        <Route exact path="/constelacao-familiar" component={Constelacao} />
        <Route exact path="/meditacao" component={Meditacao} />
        <Route exact path="/tarot-terapeutico" component={TarotTerapeutico} />

        <Route exact path="/team/camilla" component={Camilla} />
        <Route exact path="/team/lunder" component={Lunder} />
        <Route exact path="/team/simone" component={Simone} />
        <Route exact path="/team/tatyana" component={Tatyana} />

        <Route component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
