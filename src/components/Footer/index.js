import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = ({ modalOpenEvent, isAuthenticated, modalOpenLogin, user }) => {
  const handleOpenEvent = () => {
    modalOpenEvent();
  };
  const handleOpenLogin = () => {
    modalOpenLogin();
  };

  return(
    <div id="footer">
      <NavLink exact to="/">
      <Image src='http://217.70.190.71/assets/tff-typo.png' size='medium' />
      </NavLink>
      <Grid id="">
        <Grid.Row columns={3}>
          <Grid.Column>
            <ul className="mainCategories">
              <li><NavLink exact to="/annonces">Voir la liste des annonces</NavLink></li>
              {isAuthenticated ?
              typeof user !== "undefined" ?
              <li><NavLink exact to={`/infos-perso/${user.id}`}>Mon profil</NavLink></li>
                : ''
                :''}
              <li>{isAuthenticated ? (
                <Button onClick={handleOpenEvent}>
                Créer Annonce
                </Button>
              ) : (
                <Button onClick={handleOpenLogin}>Se connecter pour créer un annonce
                </Button>
              )}
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <ul>
              <li><NavLink exact to="/mentions-legales">Mentions Légales</NavLink></li>
              <li><NavLink exact to="/faq">FAQ</NavLink></li>
              <li><NavLink exact to="/contact">Contact</NavLink></li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <ul>
              <li><a href="">Instagram</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Facebook</a></li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

    );
  };

Footer.propTypes = {
  modalOpenEvent: PropTypes.func.isRequired,
  modalOpenLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Footer;

