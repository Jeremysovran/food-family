import { connect } from 'react-redux';
import ConfirmationNoParticipation from 'src/components/ConfirmationNoParticipation';
import { confirmationFormSubmit, modalClose } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  confirmationFormSubmit: () => {
    dispatch(confirmationFormSubmit());
  },
  modalClose: () => {
    dispatch(modalClose());
  },
});

const ConfirmationNoContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmationNoParticipation);

export default ConfirmationNoContainer;
