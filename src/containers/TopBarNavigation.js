
import { connect } from 'react-redux';
import TopBarNavigation from 'src/components/TopBar/TopBarNavigation';
import { loadHomeData } from 'src/store/reducers/home-reducer';
import { modalOpenEvent, modalOpenLogin, logoutSubmit } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  user: state.home.user,
  isAuthenticated: state.menu.isAuthenticated,
  userConfirm: state.event.userConfirm,
  username: state.menu.username,
  password: state.menu.password,
});

const mapDispatchToProps = dispatch => ({
  loadHomeData: () => {
    dispatch(loadHomeData());
  },
  modalOpenEvent: () => {
    dispatch(modalOpenEvent());
  },
  modalOpenLogin: () => {
    dispatch(modalOpenLogin());
  },
  logoutSubmit: () => {
    dispatch(logoutSubmit());
  },
});

const TopBarDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(TopBarNavigation);

export default TopBarDisplayContainer;
