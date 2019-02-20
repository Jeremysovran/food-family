
import { connect } from 'react-redux';
import HomePage from 'src/components/HomePage';
import { loadHomeData } from 'src/store/reducers/home-reducer';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  loadHomeData: () => {
    dispatch(loadHomeData());
  },
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;
