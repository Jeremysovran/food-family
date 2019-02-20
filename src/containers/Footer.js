import { connect } from 'react-redux';
import Footer from 'src/components/Footer';
import { modalOpenEvent, modalOpenLogin } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  modalOpened: state.menu.modalOpened,
  activeComponent: state.menu.activeComponent,
  isAuthenticated: state.menu.isAuthenticated,
  user: state.home.user,
});

const mapDispatchToProps = dispatch => ({
  modalOpenEvent: () => {
    dispatch(modalOpenEvent());
  },
  modalOpenLogin: () => {
    dispatch(modalOpenLogin());
  },
});

const FooterFormContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterFormContainer;
