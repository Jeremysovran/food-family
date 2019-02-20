/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import HomePage from 'src/containers/HomePage';
import NotFound from 'src/components/NotFound';
import FaqPage from 'src/components/FaqPage';
import MentionsLegales from 'src/components/MentionsLegales';
import Contact from 'src/components/Contact';
import CreateEvent from 'src/components/CreateEvent';
import EventResultItem from 'src/components/EventResultItem';
import EventProductPage from 'src/containers/EventProductPage';
import TopBarDisplay from 'src/containers/TopBarDisplay';
import Footer from 'src/containers/Footer';
import ModalModel from 'src/containers/ModalModel';
import SettingInfoUser from 'src/containers/SettingInfoUser';
import SettingEvent from 'src/containers/SettingEvent';
import SettingHistory from 'src/containers/SettingHistory';
import { Route, Switch } from 'react-router-dom';


import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <TopBarDisplay />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/create-event" component={CreateEvent} />
      <Route exact path="/annonces/:id?" component={EventResultItem} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/mentions-legales" component={MentionsLegales} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/infos-perso/:id" component={SettingInfoUser} />
      <Route exact path="/ateliers-crees/:id" component={SettingEvent} />
      <Route exact path="/ateliers-rejoints/:id" component={SettingHistory} />
      <Route exact path="/atelier/:id" component={EventProductPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
    <ModalModel />
  </div>
);

/**
 * Export
 */
export default App;

