import { connect } from 'react-redux';
import SettingInfoUser from 'src/components/SettingInfoUser';
import { modalOpenConfirmationDeleteUser, userInfoInputChange, userInfoFormSubmit } from 'src/store/reducers/menu-reducer';
import { userData } from 'src/store/reducers/event-reducer';


const mapStateToProps = state => ({
  isAuthenticated: state.menu.isAuthenticated,
  modalOpened: state.menu.modalOpened,
  firstname: state.event.firstname,
  lastname: state.event.lastname,
  username: state.event.username,
  email: state.event.email,
  address: state.event.address,
  postalCode: state.event.postalCode,
  city: state.event.city,
  birthdate: state.event.birthdate,
  credit: state.event.credit,
  experience: state.event.experience,
  picture: state.event.picture,
  id: state.event.id,
  inputFirstname: state.menu.inputFirstname,
  inputLastname: state.menu.inputLastname,
  inputUsername: state.menu.inputUsername,
  inputEmail: state.menu.inputEmail,
  inputAddress: state.menu.inputAddress,
  inputPostalCode: state.menu.inputPostalCode,
  inputCity: state.menu.inputCity,
  // inputDay: state.menu.inputDay,
  // inputMonth: state.menu.inputMonth,
  // inputYear: state.menu.inputYear,
});

const mapDispatchToProps = dispatch => ({
  userInfoInputChange: (modif) => {
    dispatch(userInfoInputChange(modif));
  },
  userInfoFormSubmit: (id, inputFirstname, inputLastname, inputUsername, inputEmail, inputAdress, inputCity, inputPostalCode) => {
    dispatch(userInfoFormSubmit(id, inputFirstname, inputLastname, inputUsername, inputEmail, inputAdress, inputCity, inputPostalCode));
  },
  userData: (id) => {
    dispatch(userData(id));
  },
  modalOpenConfirmationDeleteUser: () => {
    dispatch(modalOpenConfirmationDeleteUser());
  },

});

const SettingInfoUserContainer = connect(mapStateToProps, mapDispatchToProps)(SettingInfoUser);

export default SettingInfoUserContainer;
