import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Button } from 'semantic-ui-react';


const Banner = () => (
  <div id="faq-banner">
    <h2>Bienvenue dans la famille!</h2>
    <p>Bienvenue chez The Food Family,<br/>
    De nombreux ateliers n'attendent que vous!
    <br/></p>
    <Button><NavLink exact to="/annonces">Voir la liste des annonces</NavLink> </Button>

  </div>
);

export default Banner;
