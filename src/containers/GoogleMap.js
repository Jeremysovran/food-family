import { connect } from 'react-redux';
import GoogleMap from 'src/components/GoogleMap';

const mapStateToProps = state => ({
  longitude: state.event.longitude,
  latitude: state.event.latitude,
});

const mapDispatchToProps = dispatch => ({
});

const GoogleMapFormContainer = connect(mapStateToProps, mapDispatchToProps)(GoogleMap);

export default GoogleMapFormContainer;
