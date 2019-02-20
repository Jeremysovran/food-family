import React from 'react';
import PropTypes from 'prop-types';
import TopBar from 'src/components/TopBar';
import TopBarVisitor from 'src/containers/TopBarVisitor';


const TopBarDisplay = ({ isAuthenticated }) => (
  isAuthenticated ? <TopBar /> : <TopBarVisitor />
);

TopBarDisplay.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default TopBarDisplay;
