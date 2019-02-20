import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, Form, Header,
} from 'semantic-ui-react';


const ConfirmationNoParticipation = ({ confirmationFormSubmit, modalClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    confirmationFormSubmit();
  };

  const handleClose = () => {
    modalClose();
  };
  return (
    <div className="content">
      <Header>Se désinscrire de l'atelier</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <p>Confirmez-vous vous désinscrire de l atelier?</p>
          <Modal.Actions>
            <Button onClick={handleClose} negative>annuler</Button>
            <Button type="submit" positive icon="checkmark" labelPosition="right" content="Oui" />
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </div>
  );
};

ConfirmationNoParticipation.propTypes = {
  confirmationFormSubmit: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default ConfirmationNoParticipation;
