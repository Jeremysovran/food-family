import React from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Grid, Divider, Segment } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

import "./style.scss";

class SettingEvent extends React.Component {

  componentDidMount() {
    const { userEvent } = this.props;
    const { id } = this.props.match.params;
    userEvent(id);
  }

  render() {
    const {
      modalOpenConfirmationDeleteEvent, nbOrganizedCw, organizedCw, id,
    } = this.props;


    const handleOpenConfirmationDeleteEvent = (event) => {
      const { name, value } = event.target;
      const modif = {
        [name]: value,
      };
      console.log('modif', modif);
      modalOpenConfirmationDeleteEvent(modif);
    };

    // const handleOpenConfirmationDeleteEvent = (event) => {
    //   const { id } = parseInt(event.target.getAttribute("cw-id"));
    //   console.log(id);
    //   // modalOpenConfirmationDeleteEvent();
    // };



    return (
      <div id="settingEvent">
        <h1>Mes Ateliers</h1>
        <p>Vous avez créé {nbOrganizedCw} ateliers, bravo !!</p>

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

        <Grid columns={4} unstackable>

          {typeof organizedCw !== 'undefined'
            ? organizedCw.map(cw => (
              <Grid.Row verticalAlign="middle" className="annonce">

                <Grid.Column textAlign="left">{cw.title}</Grid.Column>

                <Grid.Column textAlign="left" only="tablet computer">
                  <Segment.Group horizontal>
                    <Segment textAlign="center">{cw.day}/{cw.month}/{cw.year}</Segment>
                    <Segment textAlign="center">{cw.nbParticipant}/{cw.nbPlace} Inscriptions</Segment>
                  </Segment.Group>
                </Grid.Column>

                <Grid.Column textAlign="left" only="mobile">
                  <Segment.Group horizontal>
                    <Segment textAlign="center">{cw.day}/{cw.month}/{cw.year}</Segment>
                  </Segment.Group>
                </Grid.Column>

                <Grid.Column textAlign="right">
                  <Button cw-id={cw.id} onClick={handleOpenConfirmationDeleteEvent} name="idAtelier" value={cw.id} color="red" inverted>Supprimer</Button>
                </Grid.Column>
              </Grid.Row>
            )) : ''}
        </Grid>
      </div>
    );
  }
}

SettingEvent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  // modalOpenLogin: PropTypes.func.isRequired,
  // modalOpenConfirmation: PropTypes.func.isRequired,
};

export default SettingEvent;
