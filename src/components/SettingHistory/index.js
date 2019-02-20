import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Grid, Divider, Segment } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

import './style.scss';

class SettingHistory extends React.Component {

  componentDidMount() {
    const { userHistory } = this.props;
    const { id } = this.props.match.params;
    userHistory(id);
  }

  render() {
    const {
      isAuthenticated, modalOpenLogin, modalOpenConfirmation, nbParticipatedCw, participatedCw, id,
    } = this.props;

    return (
      <div id="settingHistory">
        <h1>Mon Historique</h1>

        <p>Vous avez participé à {nbParticipatedCw} ateliers, bravo !!</p>

        <Divider/>

        <Grid columns={3} stackable className="liens">
          <Grid.Column textAlign="center">
            <h3><NavLink exact to={`/infos-perso/${id}`}>Mes informations</NavLink></h3>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <h3><NavLink exact to={`/ateliers-crees/${id}`}>Mes ateliers créés</NavLink></h3>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <h3><NavLink exact to={`/ateliers-rejoints/${id}`}>Mes participations</NavLink></h3>
          </Grid.Column>
        </Grid>

        <Grid columns={2} unstackable>
          
        {typeof participatedCw !== 'undefined'
          ? participatedCw.map(cw => (
          <Grid.Row verticalAlign="middle" className="annonce">
            <Grid.Column textAlign="left">{cw.title}</Grid.Column>
            <Grid.Column textAlign="right">
              <Button basic ><NavLink exact to={`/atelier/${cw.id}`}>Voir</NavLink></Button>
            </Grid.Column>
          </Grid.Row>
        )) : ''}
          

        </Grid>

        <Divider />
      </div>
    );
  }
}

export default SettingHistory;
