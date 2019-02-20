import { connect } from 'react-redux';
import GoogleMapEvent from 'src/components/GoogleMapEvent';

const mapStateToProps = state => ({
  cookingWorkshops: state.list.cookingWorkshops,

});

const mapDispatchToProps = dispatch => ({
});

const GoogleMapEventFormContainer = connect(mapStateToProps, mapDispatchToProps)(GoogleMapEvent);

export default GoogleMapEventFormContainer;
