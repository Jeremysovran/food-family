import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, Button, Form } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import "./style.scss";

class SettingInfoUser extends React.Component {

  componentDidMount() {
    const { userData } = this.props;
    const { id } = this.props.match.params;
    userData(id);
  }

  render() {
    const {
      userInfoInputChange, userInfoFormSubmit, isAuthenticated, modalOpenLogin,
      modalOpenConfirmationDeleteUser, firstname, lastname, username, email, address, postalCode,
      city, birthdate, credit, experience, picture, id, inputFirstname, inputLastname,
      inputUsername, inputEmail, inputAddress, inputPostalCode, inputCity,
    } = this.props;

    var date = new Date(birthdate);
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    const handleChange = (event) => {
      const { name, value } = event.target;
      const modif = {
        [name]: value,
      };

      userInfoInputChange(modif);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      userInfoFormSubmit(id, inputFirstname, inputLastname, inputUsername, inputEmail, inputAddress, inputPostalCode, inputCity);
    };

    const handleOpenConfirmationDeleteUser = () => {
      console.log('delete');
      modalOpenConfirmationDeleteUser();
    };



    return (
      <div id="settingInfoUser">
        <div id="avatar"><img src={picture} height="200" width="150" /></div>

        <h1>{username}</h1>

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

        <Form onSubmit={handleSubmit}>
          
          <div className="infos">
            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Prénom</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <Form.Input
                  type="text"
                  name="inputFirstname"
                  placeholder={firstname}
                  value={inputFirstname}
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Nom</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <Form.Input
                  type="text"
                  name="inputLastname"
                  placeholder={lastname}
                  value={inputLastname}
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Pseudo</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <Form.Input
                  type="text"
                  name="inputUsername"
                  placeholder={username}
                  value={inputUsername}
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Email</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <Form.Input
                  type="text"
                  name="inputEmail"
                  placeholder={email}
                  value={inputEmail}
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Adresse</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <Form.Input
                  type="text"
                  name="inputAddress"
                  placeholder={address}
                  value={inputAddress}
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Ville</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <Form.Input
                  type="text"
                  name="inputPostalCode"
                  placeholder={postalCode}
                  value={inputPostalCode}
                  onChange={handleChange}
                /> - <Form.Input
                  type="text"
                  name="inputCity"
                  placeholder={city}
                  value={inputCity}
                  onChange={handleChange}
                />
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Date de naissance</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <p>{day}/{month}/{year}</p>
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-detail">
              <Grid.Column textAlign="left">
                <p className="infos-title">Cookies</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <p>{credit}</p>
              </Grid.Column>
            </Grid>

            <Grid columns={2} stackable className="infos-last">
              <Grid.Column textAlign="left">
                <p className="infos-title">Experience</p>
              </Grid.Column>

              <Grid.Column textAlign="left">
                <p>{experience}</p>
              </Grid.Column>
            </Grid>
          </div>
          <div id="button-profil">
          <Button type="submit">Modifier</Button>

          <Button className="delete-user" onClick={handleOpenConfirmationDeleteUser}>Supprimer mon compte</Button>
          </div>
        </Form>
      </div>
    );
  }
}

SettingInfoUser.propTypes = {
  // infoUserInputChange: PropTypes.func.isRequired,
  // infoUserFormSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // modalOpenLogin: PropTypes.func.isRequired,
  // modalOpenConfirmation: PropTypes.func.isRequired,
};

export default SettingInfoUser;
