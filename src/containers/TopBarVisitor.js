import { connect } from 'react-redux';
import TopBarVisitor from 'src/components/TopBarVisitor';
import {
  modalOpenLogin, modalOpenRegister,
} from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  modalOpened: state.menu.modalOpened,
  activeComponent: state.menu.activeComponent,

});

const mapDispatchToProps = dispatch => ({
  modalOpenLogin: () => {
    dispatch(modalOpenLogin());
  },
  modalOpenRegister: () => {
    dispatch(modalOpenRegister());
  },
});

const TopBarVisitorFormContainer = connect(mapStateToProps, mapDispatchToProps)(TopBarVisitor);

export default TopBarVisitorFormContainer;
