import React from 'react';
import './style.scss';

import Navigation from 'src/containers/Navigation';
import Banner from 'src/components/Banner';
import BannerEvent from 'src/containers/BannerEvent';
import EventCardFilter from 'src/containers/EventCardFilter';
import EventCardLastest from 'src/containers/EventCardLastest';
import EventWeekPopular from 'src/containers/EventWeekPopular';


class HomePage extends React.Component {
  componentDidMount() {
    const { loadHomeData } = this.props;
    loadHomeData();
  }

  render() {
    return (
      <div id="home">
        <Banner />
        <EventWeekPopular />
        <BannerEvent />
        <EventCardFilter />
        <EventCardLastest />
      </div>
    );
  }
}

export default HomePage;
