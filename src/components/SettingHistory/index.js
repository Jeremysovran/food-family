import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Divider,
} from 'semantic-ui-react';
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
      nbParticipatedCw, participatedCookingWorkshops, id,
    } = this.props;

    return (
      <div id="settingHistory">
        <h1>Mon Historique</h1>

        <p>Vous avez participé à {nbParticipatedCw} ateliers, bravo !!</p>

        <Divider />

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

        <Grid columns={2} unstackable="true">
          {typeof participatedCookingWorkshops !== 'undefined'
            ? participatedCookingWorkshops.map(cw => (
              <Grid.Row key={cw.id} verticalAlign="middle" className="annonce">
                <Grid.Column textAlign="left">{cw.title}</Grid.Column>
                <Grid.Column textAlign="right">
                  <Button basic><NavLink exact to={`/atelier/${cw.id}`}>Voir</NavLink></Button>
                </Grid.Column>
              </Grid.Row>
            )) : ''}
        </Grid>

        <Divider />
      </div>
    );
  }
}

SettingHistory.propTypes = {
  participatedCookingWorkshops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  nbParticipatedCw: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  userHistory: PropTypes.func.isRequired,
};

export default SettingHistory;
