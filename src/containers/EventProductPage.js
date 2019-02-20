
import { connect } from 'react-redux';
import EventProductPage from 'src/components/EventProductPage';
import { modalOpenLogin, modalOpenConfirmation, modalOpenNoConfirmation } from 'src/store/reducers/menu-reducer';
import { fetchData, handleReaction, commentResponseInputChange, commentResponseFormSubmit } from 'src/store/reducers/event-reducer';

const mapStateToProps = state => ({
  isAuthenticated: state.menu.isAuthenticated,
  modalOpened: state.menu.modalOpened,
  city: state.event.city,
  title: state.event.title,
  date: state.event.date,
  description: state.event.description,
  postalCode: state.event.postalCode,
  cost: state.event.cost,
  level: state.event.level,
  nbPlace: state.event.nbPlace,
  nbParticipant: state.event.nbParticipant,
  isFull: state.event.isFull,
  tags: state.event.tags,
  organizer: state.event.organizer,
  day: state.event.day,
  month: state.event.month,
  feelings: state.event.feelings,
  questionsCookingWorkshop: state.event.questionsCookingWorkshop,
  answersCookingWorkshop: state.event.answersCookingWorkshop,
  id: state.event.id,
  inputResponse: state.event.inputResponse,
  newQuestion: state.event.newQuestion,
  participate: state.event.participate,
  picture: state.event.picture,
});

const mapDispatchToProps = dispatch => ({
  modalOpenLogin: () => {
    dispatch(modalOpenLogin());
  },
  modalOpenConfirmation: () => {
    dispatch(modalOpenConfirmation());
  },
  modalOpenNoConfirmation: () => {
    dispatch(modalOpenNoConfirmation());
  },
  fetchData: (id) => {
    dispatch(fetchData(id));
  },
  handleReaction: (value, id) => {
    dispatch(handleReaction(value, id));
  },
  commentResponseInputChange: (modif) => {
    dispatch(commentResponseInputChange(modif));
  },
  commentResponseFormSubmit: (id, inputResponse) => {
    dispatch(commentResponseFormSubmit(id, inputResponse));
  },
});

const EventProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(EventProductPage);

export default EventProductPageContainer;
