import { connect } from 'react-redux';
import SettingHistory from 'src/components/SettingHistory';
import { userHistory } from 'src/store/reducers/event-reducer';

const mapStateToProps = state => ({
  isAuthenticated: state.menu.isAuthenticated,
  modalOpened: state.menu.modalOpened,
  nbParticipatedCw: state.event.nbParticipatedCookingWorkshops,
  participatedCookingWorkshops: state.event.participatedCookingWorkshops,
  id: state.event.id,
});

const mapDispatchToProps = dispatch => ({
  userHistory: (id) => {
    dispatch(userHistory(id));
  },
});

const SettingHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(SettingHistory);

export default SettingHistoryContainer;
