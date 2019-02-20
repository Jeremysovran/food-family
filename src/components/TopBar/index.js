import React from 'react';
import { GiGingerbreadMan } from 'react-icons/gi';
import { Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import TopBarNavigation from 'src/containers/TopBarNavigation';


import './style.scss';

const TopBar = () => (
  <div id="topbar">
  <Grid>
    <Grid.Row columns={1} only="computer">
      <TopBarNavigation />
    </Grid.Row>
    <Grid.Row columns={1} only="mobile tablet">
      <TopBarNavigation />
    </Grid.Row>
  </Grid>
  </div>
);

export default TopBar;
