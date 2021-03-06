import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, Form, Header,
} from 'semantic-ui-react';


import './style.scss';

const ConfirmationDeleteEvent = ({ confirmationFormDeleteEventSubmit, modalClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    confirmationFormDeleteEventSubmit();
  };
  const handleClose = () => {
    modalClose();
  };

  return (
    <div className="content">
      <Header>Suppression Atelier</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <p>Etes-vous sûr de vouloir supprimer cet atelier ?</p>
          <Modal.Actions>
            <Button onClick={handleClose} negative>Annuler</Button>
            <Button type="submit" positive icon="checkmark" labelPosition="right" content="Oui" />
          </Modal.Actions>
        </Form>
      </Modal.Content>

    </div>
  );
};

ConfirmationDeleteEvent.propTypes = {
  confirmationFormDeleteEventSubmit: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default ConfirmationDeleteEvent;
