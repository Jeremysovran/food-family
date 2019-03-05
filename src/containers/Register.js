import { connect } from 'react-redux';
import Register from 'src/components/TopBarVisitor/Register';
import {
  registerInputChange, registerFormSubmit,
} from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  username: state.menu.username,
  password: state.menu.password,
  confirmPassword: state.menu.confirmPassword,
  firstname: state.menu.firstname,
  lastname: state.menu.lastname,
  email: state.menu.email,
  day: state.menu.day,
  month: state.menu.month,
  year: state.menu.year,
  adress: state.menu.adress,
  city: state.menu.city,
  postalCode: state.menu.postalCode,
  picture: state.menu.picture,
  modalRegisterOpen: state.menu.modalRegisterOpen,
});

const mapDispatchToProps = dispatch => ({
  registerInputChange: (modif) => {
    dispatch(registerInputChange(modif));
  },
  registerFormSubmit: (username, password, firstname, lastname, email, birthdate, adress, city, confirmPassword, postalCode, picture, year) => {
    dispatch(registerFormSubmit(username, password, firstname, lastname, email, birthdate, adress, city, confirmPassword, picture, postalCode, year));
  },
});

const RegisterFormContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterFormContainer;
