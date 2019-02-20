import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const BannerEvent = ({ modalOpenEvent, modalOpenLogin, isAuthenticated }) => {
  const handleOpenEvent = () => {
    modalOpenEvent();
  };
  const handleOpenLogin = () => {
    modalOpenLogin();
  };
  return (
    <div id="banner">
      <h2>Créer un atelier</h2>
      <p>
Passionnés de cuisine à travers les ages et sans frontière, nous vous permettons d’organiser des ateliers cuinaires et bien plus encore!
      </p>
      {isAuthenticated ? (
        <Button onClick={handleOpenEvent} className="bounce">
        Créer Annonce
        </Button>
      ) : (
        <Button onClick={handleOpenLogin}>Se connecter pour créer une annonce
        </Button>
      )}
    </div>
  );
};


BannerEvent.propTypes = {
  modalOpenEvent: PropTypes.func.isRequired,
  modalOpenLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default BannerEvent;
