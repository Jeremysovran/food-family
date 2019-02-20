import React from 'react';
import PropTypes from 'prop-types';
import Login from 'src/containers/Login';
import CreateEvent from 'src/containers/CreateEvent';
import ConfirmationParticipation from 'src/containers/ConfirmationParticipation';
import ConfirmationNoParticipation from 'src/containers/ConfirmationNoParticipation';
import Register from 'src/containers/Register';
import { Modal } from 'semantic-ui-react';
import ConfirmationDeleteUser from 'src/containers/ConfirmationDeleteUser';
import ConfirmationDeleteEvent from 'src/containers/ConfirmationDeleteEvent';

const ModalModel = ({
  modalClose, modalOpened, activeComponent,
}) => {
  const handleClose = () => {
    modalClose();
  };

  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={handleClose}
        closeIcon
      >
        {(activeComponent === 'register') ? <Register /> : ''}
        {(activeComponent === 'login') ? <Login /> : ''}
        {(activeComponent === 'confirmation') ? <ConfirmationParticipation /> : ''}
        {(activeComponent === 'noconfirmation') ? <ConfirmationNoParticipation /> : ''}
        {(activeComponent === 'createEvent') ? <CreateEvent /> : ''}
        {(activeComponent === 'deleteUser') ? <ConfirmationDeleteUser /> : ''}
        {(activeComponent === 'deleteEvent') ? <ConfirmationDeleteEvent /> : ''}
      </Modal>
    </div>
  );
};

ModalModel.propTypes = {
  modalClose: PropTypes.func.isRequired,
  modalOpened: PropTypes.bool.isRequired,
  activeComponent: PropTypes.string.isRequired,
};

export default ModalModel;
