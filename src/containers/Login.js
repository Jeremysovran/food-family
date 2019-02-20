import { connect } from 'react-redux';
import Login from 'src/components/TopBarVisitor/Login';
import {
  loginInputChange, loginFormSubmit,
} from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  username: state.menu.username,
  password: state.menu.password,
  modalLoginOpen: state.menu.modalLoginOpen,

});

const mapDispatchToProps = dispatch => ({
  loginInputChange: (modif) => {
    dispatch(loginInputChange(modif));
  },
  loginFormSubmit: (username, password) => {
    dispatch(loginFormSubmit(username, password));
  },
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginFormContainer;
