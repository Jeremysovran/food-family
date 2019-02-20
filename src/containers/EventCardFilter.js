import { connect } from 'react-redux';
import EventCardFilter from 'src/components/EventCardFilter';

const mapStateToProps = state => ({
  cookingWorkshops: state.home.cookingWorkshops,
});

const mapDipatchToProps = {};

const EventCardFilterContainer = connect(mapStateToProps, mapDipatchToProps)(EventCardFilter);

// withRouter utile pour la navigation pour passer la classe active partout car redux transforme
// les components en pure
export default EventCardFilterContainer;
