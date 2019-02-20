import { connect } from 'react-redux';
import EventCardLastest from 'src/components/EventCardLastest';

const mapStateToProps = state => ({
  lastCookingWorkshops: state.home.lastCookingWorkshops,
});

const mapDipatchToProps = {};

const EventCardLastestContainer = connect(mapStateToProps, mapDipatchToProps)(EventCardLastest);

// withRouter utile pour la navigation pour passer la classe active partout car redux transforme
// les components en pure
export default EventCardLastestContainer;
