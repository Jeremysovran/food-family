import { connect } from 'react-redux';
import ConfirmationParticipation from 'src/components/ConfirmationParticipation';
import { confirmationFormSubmit, modalClose } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  cost: state.event.cost,
});

const mapDispatchToProps = dispatch => ({
  confirmationFormSubmit: () => {
    dispatch(confirmationFormSubmit());
  },
  modalClose: () => {
    dispatch(modalClose());
  },
});

const ConfirmationFormContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmationParticipation);

export default ConfirmationFormContainer;
