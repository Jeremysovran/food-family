import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { Grid, Segment, Image, Card } from 'semantic-ui-react';
import { IoIosBody } from 'react-icons/io';
import { FaCookieBite } from 'react-icons/fa';

const EventCardLastest = ({ lastCookingWorkshops }) => {


  return(
  <div id="eventCardLastest">
    <h1>Les derniers ateliers publiés</h1>
    <Grid>
      <Grid.Row columns={2} only="mobile tablet">
        {lastCookingWorkshops.map(cooking => (
          <Grid.Column key={cooking.slug}>
            <Segment>
            <NavLink exact to={`/atelier/${cooking.id}`}>
              <Card fluid className="card">
                <Card.Description className="cost"><span>{cooking.cost}</span><FaCookieBite /></Card.Description>
                <Image src={cooking.picture} />
                <Card.Content className="content">
                  <div className="date">
                    <span>{cooking.month}</span>
                    <span>{cooking.day}</span>
                  </div>
                  <div>
                    <Card.Header>{cooking.title}</Card.Header>
                    <Card.Meta>{cooking.tags.name}</Card.Meta>
                    <Card.Description>{cooking.nbParticipant}/{cooking.nbPlace}<IoIosBody /></Card.Description>
                  </div>
                </Card.Content>
              </Card>
              </NavLink>
            </Segment>
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row columns={4} only="computer">
        {lastCookingWorkshops.map(cooking => (
          <Grid.Column key={cooking.slug}>
            <Segment>
            <NavLink exact to={`/atelier/${cooking.id}`}>
              <Card fluid className="card">
                <Card.Description className="cost"><span>{cooking.cost}</span><FaCookieBite /></Card.Description>
                <Image src={cooking.picture} />
                <Card.Content className="content">
                  <div className="date">
                    <span>{cooking.month}</span>
                    <span>{cooking.day}</span>
                  </div>
                  <div>
                    <Card.Header>{cooking.title}</Card.Header>
                    <Card.Meta>{cooking.tags.name}</Card.Meta>
                    <Card.Description>{cooking.nbParticipant}/{cooking.nbPlace}<IoIosBody /></Card.Description>
                  </div>
                    <Card.Description>{cooking.city}</Card.Description>
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
};

EventCardLastest.propTypes = {
  lastCookingWorkshops: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      nbParticipant: PropTypes.number.isRequired,
      nbPlace: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default EventCardLastest;
