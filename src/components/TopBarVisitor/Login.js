import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Header, Modal, Form,
} from 'semantic-ui-react';

const Login = ({
  loginInputChange, loginFormSubmit, username, password,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const modif = {
      [name]: value,
    };
    if (password.length < 7) {
      // console.log('attention');
    }
    loginInputChange(modif);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginFormSubmit(username, password);
  };


  return (
    <div className="content">
      <Header icon="user" content="Connexion" />
      <Modal.Content>
        <Form onSubmit={handleSubmit} type="post">
          <Form.Input
            type="email"
            name="username"
            placeholder="Entre votre email"
            value={username}
            onChange={handleChange}
          />
          <Form.Input
            type="password"
            name="password"
            placeholder="Entre votre password"
            value={password}
            onChange={handleChange}
          />
          <Modal.Actions>
            <Button type="submit">Se Connecter</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </div>
  );
};

Login.propTypes = {
  loginInputChange: PropTypes.func.isRequired,
  loginFormSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
