
import { connect } from 'react-redux';
import TopBarDisplay from 'src/components/TopBarDisplay';

const mapStateToProps = state => ({
  isAuthenticated: state.menu.isAuthenticated,
});

const mapDispatchToProps = {};

const TopBarDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(TopBarDisplay);

export default TopBarDisplayContainer;
