import { connect } from 'react-redux';
import EventWeekPopular from 'src/components/EventWeekPopular';
import { modalOpenConfirmation, modalOpenNoConfirmation } from 'src/store/reducers/menu-reducer';

const mapStateToProps = state => ({
  cookingWorkshopHasard: state.home.cookingWorkshopHasard,

});

const mapDispatchToProps = dispatch => ({
});
const EventWeekPopularContainer = connect(mapStateToProps, mapDispatchToProps)(EventWeekPopular);

// withRouter utile pour la navigation pour passer la classe active partout car redux transforme
// les components en pure
export default EventWeekPopularContainer;
