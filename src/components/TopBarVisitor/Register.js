import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Header, Modal, Form, Select,
} from 'semantic-ui-react';

import './style.scss';

const Register = ({
  registerInputChange, registerFormSubmit, username, password, email,
  adress, city, firstname, lastname, postalCode, year, confirmPassword, picture,
}) => {
  const handleChange = (e, { name, value }) => {
    // const { name, value } = event.target;
    const modif = {
      [name]: value,
    };
    registerInputChange(modif);
  };


  const month = [
    { text: 'Janvier', value: '01' },
    { text: 'Fevrier', value: '02' },
    { text: 'Mars', value: '03' },
    { text: 'Avril', value: '04' },
    { text: 'Mai', value: '05' },
    { text: 'Juin', value: '06' },
    { text: 'Juillet', value: '07' },
    { text: 'Aout', value: '08' },
    { text: 'Septembre', value: '09' },
    { text: 'Octobre', value: '10' },
    { text: 'Novembre', value: '11' },
    { text: 'Décembre', value: '12' },
  ];
  const day = [
    { text: '1', value: '01' },
    { text: '2', value: '02' },
    { text: '3', value: '03' },
    { text: '4', value: '04' },
    { text: '5', value: '05' },
    { text: '6', value: '06' },
    { text: '7', value: '07' },
    { text: '8', value: '08' },
    { text: '9', value: '09' },
    { text: '10', value: '10' },
    { text: '11', value: '11' },
    { text: '12', value: '12' },
    { text: '13', value: '13' },
    { text: '14', value: '14' },
    { text: '15', value: '15' },
    { text: '16', value: '16' },
    { text: '17', value: '17' },
    { text: '18', value: '18' },
    { text: '19', value: '19' },
    { text: '20', value: '20' },
    { text: '21', value: '21' },
    { text: '22', value: '22' },
    { text: '23', value: '23' },
    { text: '24', value: '24' },
    { text: '25', value: '25' },
    { text: '26', value: '26' },
    { text: '27', value: '27' },
    { text: '28', value: '28' },
    { text: '29', value: '29' },
    { text: '30', value: '30' },
    { text: '31', value: '31' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(confirmPassword);
    const birthdate = year + "-" + month.value + "-" + day.value;
    registerFormSubmit(username, password, firstname, lastname, email,
      adress, city, postalCode, picture, confirmPassword);
  };


  return (
    <div className="content">
      <Header icon="edit outline" content="Inscription" />
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={firstname}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            name="lastname"
            placeholder="Nom de famille"
            value={lastname}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            name="username"
            placeholder="pseudo"
            value={username}
            onChange={handleChange}
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Entrez votre password"
            value={password}
            onChange={handleChange}
          />
          <Form.Input
            type="password"
            name="confirmPassword"
            placeholder="confirmez votre password"
            value={confirmPassword}
            onChange={handleChange}
          />
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              options={month}
              selection
              name="month"
              onChange={handleChange}
              placeholder="Mois"
            />
            <Form.Field
              control={Select}
              options={day}
              name="day"
              placeholder="Jour"
              onChange={handleChange}
            />
            <Form.Input
              type="number"
              name="year"
              placeholder="Année"
              value={year}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Input
            type="text"
            name="adress"
            placeholder="adresse"
            value={adress}
            onChange={handleChange}
          />
          <Form.Input
            type="text"
            name="city"
            placeholder="ville"
            value={city}
            onChange={handleChange}
          />
          <Form.Input
            type="number"
            name="postalCode"
            placeholder="code postal"
            value={postalCode}
            onChange={handleChange}
          />
          <Modal.Actions>
            <Button type="submit">S'inscrire</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </div>
  );
};

Register.propTypes = {
  registerInputChange: PropTypes.func.isRequired,
  registerFormSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Register;
