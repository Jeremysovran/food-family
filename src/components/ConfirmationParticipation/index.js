import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, Form, Header,
} from 'semantic-ui-react';


import './style.scss';

const ConfirmationParticipation = ({
  confirmationFormSubmit, cost, modalClose,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    confirmationFormSubmit();
  };

  const handleClose = () => {
    modalClose();
  };

  return (
    <div className="content">
      <Header>Participation</Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <p>Souhaitez-vous valider votre participation ? Cet atelier consommera {cost} cookies</p>
          <Modal.Actions>
            <Button onClick={handleClose} negative>annuler</Button>
            <Button type="submit" positive icon="checkmark" labelPosition="right" content="Oui" />
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </div>
  );
};

ConfirmationParticipation.propTypes = {
  confirmationFormSubmit: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  cost: PropTypes.number.isRequired,
};

export default ConfirmationParticipation;
