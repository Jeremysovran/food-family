import { connect } from 'react-redux';
import CreateEvent from 'src/components/CreateEvent';
import { eventInputChange, dateInputChange, fileUpload } from 'src/store/reducers/home-reducer';
import { eventFormSubmit } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  inputTitle: state.home.inputTitle,
  inputNameEvent: state.home.inputNameEvent,
  inputCategory: state.home.inputCategory,
  inputPhoto: state.home.inputPhoto,
  inputAdress: state.home.inputAdress,
  inputZip: state.home.inputZip,
  inputCity: state.home.inputCity,
  inputDescription: state.home.inputDescription,
  participant: state.home.participant,
  inputCookie: state.home.inputCookie,
  inputHour: state.home.inputHour,
  startDate: state.home.startDate,
  inputCost: state.home.inputCost,
  inputDifficulty: state.home.inputDifficulty,

});

const mapDispatchToProps = dispatch => ({
  eventInputChange: (modif) => {
    dispatch(eventInputChange(modif));
  },
  dateInputChange: (modif) => {
    dispatch(dateInputChange(modif));
  },
  fileUpload: (fileSelected) => {
    dispatch(fileUpload(fileSelected));
  },
  eventFormSubmit: (inputAdress, inputCity, inputZip, inputDescription, inputTitle, startDate, participant, fileSelected) => {
    dispatch(eventFormSubmit(inputAdress, inputCity, inputZip, inputDescription, inputTitle, startDate, participant, fileSelected));
  },
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

export default LoginFormContainer;
