import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Segment, Image, Card,
} from 'semantic-ui-react';
import { FaCookieBite } from 'react-icons/fa';
import { IoIosBody } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './style.scss';

const EventCardFilter = ({ cookingWorkshops }) => (
  <div id="eventCardFilter">
    <h1>Cette semaine</h1>
    <Grid>
      <Grid.Row columns={2} only="mobile tablet">
        {cookingWorkshops.map(workshop => (
          <Grid.Column key={workshop.slug}>
            <Segment>
              <NavLink exact to={`/atelier/${cookingWorkshops.id}`}>
                <Card fluid className="card">
                  <Card.Description className="cost"><span>{workshop.cost}</span><FaCookieBite /></Card.Description>
                  <Image src={workshop.picture} />
                  <Card.Content className="content">
                    <div className="date">
                      <span>{workshop.month}</span>
                      <span>{workshop.day}</span>
                    </div>
                    <div>
                      <Card.Header>{workshop.title}</Card.Header>
                      <Card.Description>
                        {workshop.nbParticipant}/{workshop.nbPlace}
                        <IoIosBody />
                      </Card.Description>
                    </div>
                  </Card.Content>
                </Card>
              </NavLink>
            </Segment>
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row columns={4} only="computer">
        {cookingWorkshops.map(workshop => (
          <Grid.Column key={workshop.slug}>
            <Segment>
              <NavLink exact to={`/atelier/${workshop.id}`}>
                <Card fluid className="card">
                  <Card.Description className="cost"><span>{workshop.cost}</span><FaCookieBite /></Card.Description>
                  <Image src={workshop.picture} />
                  <Card.Content className="content">
                    <div className="date">
                      <span>{workshop.month}</span>
                      <span>{workshop.day}</span>
                    </div>
                    <div>
                      <Card.Header>{workshop.title}</Card.Header>
                      <Card.Description>
                        {workshop.nbParticipant}/{workshop.nbPlace}
                        <IoIosBody />
                      </Card.Description>
                    </div>
                    <Card.Description>{workshop.city}</Card.Description>
                  </Card.Content>
                </Card>
              </NavLink>
            </Segment>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </div>
);

EventCardFilter.propTypes = {
  cookingWorkshops: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      nbParticipant: PropTypes.number.isRequired,
      nbPlace: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default EventCardFilter;
