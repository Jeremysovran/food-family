import { connect } from 'react-redux';
import ConfirmationDeleteUser from 'src/components/ConfirmationDeleteUser';
import { confirmationFormDeleteSubmit, modalClose } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  confirmationFormDeleteSubmit: () => {
    dispatch(confirmationFormDeleteSubmit());
  },
  modalClose: () => {
    dispatch(modalClose());
  },
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmationDeleteUser);

export default LoginFormContainer;
