import { connect } from 'react-redux';
import BannerEvent from 'src/components/Banner/BannerEvent';
import {
  modalOpenEvent, modalOpenLogin,
} from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  modalOpened: state.menu.modalOpened,
  activeComponent: state.menu.activeComponent,
  isAuthenticated: state.menu.isAuthenticated,

});

const mapDispatchToProps = dispatch => ({
  modalOpenEvent: () => {
    dispatch(modalOpenEvent());
  },
  modalOpenLogin: () => {
    dispatch(modalOpenLogin());
  },
});

const TopBarVisitorFormContainer = connect(mapStateToProps, mapDispatchToProps)(BannerEvent);

export default TopBarVisitorFormContainer;
