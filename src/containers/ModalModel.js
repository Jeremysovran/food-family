import { connect } from 'react-redux';
import ModalModel from 'src/components/ModalModel';
import {
  modalClose,
} from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  modalLoginOpen: state.menu.modalLoginOpen,
  modalRegisterOpen: state.menu.modalRegisterOpen,
  modalOpened: state.menu.modalOpened,
  activeComponent: state.menu.activeComponent,

});

const mapDispatchToProps = dispatch => ({

  modalClose: () => {
    dispatch(modalClose());
  },
});

const ModalFormContainer = connect(mapStateToProps, mapDispatchToProps)(ModalModel);

export default ModalFormContainer;
