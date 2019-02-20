import React from 'react';
import './style.scss';

import TopBar from 'src/components/TopBar';
import FilterBar from 'src/components/FilterBar';
import EventResultList from 'src/components/EventResultList';
import GoogleMap from 'src/components/GoogleMap';
import Footer from 'src/components/Footer';

const EventPage = () => (
  <div id="eventPage">
    <TopBar />
    <FilterBar />
    <EventResultList />
    <GoogleMap />
    <Footer />

  </div>
);

export default EventPage;
