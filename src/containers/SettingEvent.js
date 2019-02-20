import { connect } from 'react-redux';
import SettingEvent from 'src/components/SettingEvent';
import { modalOpenConfirmationDeleteEvent } from 'src/store/reducers/menu-reducer';
import { userEvent } from 'src/store/reducers/event-reducer';

const mapStateToProps = state => ({
  isAuthenticated: state.menu.isAuthenticated,
  modalOpened: state.menu.modalOpened,
  nbOrganizedCookingWorkshops: state.event.nbOrganizedCookingWorkshops,
  organizedCookingWorkshops: state.event.organizedCookingWorkshops,
  id: state.event.id,
});

const mapDispatchToProps = dispatch => ({
  userEvent: (id) => {
    dispatch(userEvent(id));
  },
  modalOpenConfirmationDeleteEvent: (modif) => {
    dispatch(modalOpenConfirmationDeleteEvent(modif));
  },
});

const SettingEventContainer = connect(mapStateToProps, mapDispatchToProps)(SettingEvent);

export default SettingEventContainer;
