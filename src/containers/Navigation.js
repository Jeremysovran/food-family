import { connect } from 'react-redux';
import Navigation from 'src/components/Navigation';

const mapStateToProps = state => ({
  tags: state.home.tags,
});

const mapDipatchToProps = {};

const NavigationContainer = connect(mapStateToProps, mapDipatchToProps)(Navigation);

// withRouter utile pour la navigation pour passer la classe active partout car redux transforme
// les components en pure
export default NavigationContainer;
