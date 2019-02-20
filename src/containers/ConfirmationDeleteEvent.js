import { connect } from 'react-redux';
import ConfirmationDeleteEvent from 'src/components/ConfirmationDeleteEvent';
import { confirmationFormDeleteEventSubmit, modalClose } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  confirmationFormDeleteEventSubmit: () => {
    dispatch(confirmationFormDeleteEventSubmit());
  },
  modalClose: () => {
    dispatch(modalClose());
  },
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmationDeleteEvent);

export default LoginFormContainer;
