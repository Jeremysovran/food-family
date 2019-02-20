import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, Form, Header,
} from 'semantic-ui-react';


import './style.scss';

const ConfirmationDeleteUser = ({ confirmationFormDeleteSubmit, modalClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    confirmationFormDeleteSubmit();
  };
  const handleClose = () => {
    modalClose();
  };

  return (
    <div className="content">
      <Header>Suppression utilisateur</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <p>Etes-vous sûr de vouloir quitter notre famille ?</p>
          <Modal.Actions>
            <Button onClick={handleClose} negative>Annuler</Button>
            <Button type="submit" positive icon="checkmark" labelPosition="right" content="Oui" />
          </Modal.Actions>
        </Form>
      </Modal.Content>

    </div>
  );
};

ConfirmationDeleteUser.propTypes = {
  confirmationFormDeleteSubmit: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default ConfirmationDeleteUser;
