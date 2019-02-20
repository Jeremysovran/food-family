import React from 'react';
import PropTypes from 'prop-types';
import { GiGingerbreadMan } from 'react-icons/gi';
import { Grid, Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const TopBarVisitor = ({ modalOpenLogin, modalOpenRegister }) => {
  const handleOpenLogin = () => {
    modalOpenLogin();
  };
  const handleOpenRegister = () => {
    modalOpenRegister();
  };

  return (
    <Grid>
      <Grid.Row>
        <div id="topBar">
        <NavLink exact to="/">
          <Image src='http://217.70.190.71/assets/tff-logo.png' size='medium' />
        </NavLink>
          <div className="account">
            <Button onClick={handleOpenRegister}>Inscription</Button>
            <Button onClick={handleOpenLogin}>Connexion</Button>


          </div>
        </div>
      </Grid.Row>
    </Grid>
  );
};

TopBarVisitor.propTypes = {
  modalOpenLogin: PropTypes.func.isRequired,
  modalOpenRegister: PropTypes.func.isRequired,
};

export default TopBarVisitor;
