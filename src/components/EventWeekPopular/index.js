import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Segment, Image, Card, Progress, Button, Responsive,
} from 'semantic-ui-react';
import { IoIosBody } from 'react-icons/io';
import { FaCookieBite } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './style.scss';

const EventWeekPopular = ({ cookingWorkshopHasard }) => {
  const debutant = cookingWorkshopHasard.level === 1 ? 'debutant' : '';
  const moyen = cookingWorkshopHasard.level === 2 ? 'moyen' : '';
  const confirme = cookingWorkshopHasard.level === 3 ? 'confirmé' : '';
  const topChef = cookingWorkshopHasard.level === 4 ? 'TopChef' : '';

  return (
    <div id="eventWeekPopular">
      <h1>Atelier à la une</h1>
      <Grid>
        <Grid.Row columns={1} only="mobile" className="mobile">
          <Grid.Column>
            <Segment>
              <NavLink exact to={`/atelier/${cookingWorkshopHasard.id}`}>
                <Card fluid className="card">
                  <Image src={cookingWorkshopHasard.picture} />
                  <Card.Content className="content">
                    <div className="date">
                      <h3>
                        {cookingWorkshopHasard.month}
                        <br />
                        {cookingWorkshopHasard.day}
                      </h3>
                    </div>
                    <div className="infoevent">
                      {typeof cookingWorkshopHasard.tags !== 'undefined'
                        ? cookingWorkshopHasard.tags.map(tag => (
                          <span key={tag.id}>{tag.name}, </span>
                        ))
                        : ''}
                      <h2>{cookingWorkshopHasard.title}</h2>
                      <Card.Description>
                        <span>
                          {typeof cookingWorkshopHasard.organizer !== 'undefined'
                            ? cookingWorkshopHasard.organizer.username
                            : ''}
                        </span>
                      </Card.Description>
                    </div>
                    <div className="people">
                      <Card.Meta>Participants</Card.Meta>
                      <Card.Description>
                        <span>
                          {cookingWorkshopHasard.nbParticipant}/
                          {cookingWorkshopHasard.nbPlace}
                        </span>
                      </Card.Description>
                    </div>
                    <IoIosBody className="icon" />
                  </Card.Content>
                </Card>
              </NavLink>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} only="computer tablet">
          <Grid.Column>
            <Segment>
              <NavLink exact to={`/atelier/${cookingWorkshopHasard.id}`}>
                <Card fluid className="card">
                  <Image
                    className="imageComputer"
                    src={cookingWorkshopHasard.picture}
                  />
                  <div className="cost">
                    <span id="nb">{cookingWorkshopHasard.cost}</span>
                    <FaCookieBite />
                  </div>
                </Card>
              </NavLink>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Card className="card-computer">
                <div className="date-infoevent">
                  <Card.Header>
                    <h3 className="date bold">
                      {cookingWorkshopHasard.day}
                      {'\u00A0'}
                      {cookingWorkshopHasard.month}
                      {'\u00A0'}
                      {'\u00A0'}
                      {'\u00A0'}
                    </h3>
                    <h2 className="title">{cookingWorkshopHasard.title}</h2>
                  </Card.Header>
                </div>

                <Responsive
                  as={Progress}
                  minWidth={900}
                  value={cookingWorkshopHasard.nbParticipant}
                  total={cookingWorkshopHasard.nbPlace}
                  color="yellow"
                  progress="ratio"
                  active
                  label="Nombre de places pour cet atelier"
                />
                <div id="contenu">
                  <Segment.Group horizontal>
                    <Segment>
                      <span>
                        {' '}
                        <span className="bold">créé par </span>
                        <br />
                        {typeof cookingWorkshopHasard.organizer !== 'undefined'
                          ? cookingWorkshopHasard.organizer.username
                          : ''}
                      </span>
                    </Segment>
                    <Segment>
                      <span className="bold">Thématiques: </span>
                      <br />
                      {typeof cookingWorkshopHasard.tags !== 'undefined'
                        ? cookingWorkshopHasard.tags.map(tag => (
                          <span key={tag.id} className="inline">
                            {tag.name},{' '}
                          </span>
                        ))
                        : ''}
                    </Segment>
                  </Segment.Group>

                  <Card.Meta />
                  <div />
                  <div>
                    <Card.Meta />

                    <Card.Description>
                      <Segment.Group horizontal>
                        <Segment>
                          <span>
                            <MdPlace />
                            {cookingWorkshopHasard.city}{' '}
                            {cookingWorkshopHasard.postalCode}
                          </span>
                        </Segment>
                        <Segment>
                          <span>
                            difficulté de l'atelier: {debutant}
                            {moyen}
                            {confirme}
                            {topChef}
                          </span>
                        </Segment>
                      </Segment.Group>
                    </Card.Description>
                    <Card.Description />
                  </div>
                  <NavLink exact to={`/atelier/${cookingWorkshopHasard.id}`}>
                    <div className="button-weekpopular">
                      <Button className="btn">
                        <span id="desktop-btn">plus d'infos sur l'atelier</span>
                      </Button>
                    </div>
                  </NavLink>
                </div>
              </Card>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

EventWeekPopular.propTypes = {
  cookingWorkshopHasard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    postalCode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    organizer: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    nbParticipant: PropTypes.number.isRequired,
    nbPlace: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventWeekPopular;
