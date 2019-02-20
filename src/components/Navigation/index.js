import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Image, Card } from 'semantic-ui-react';


const Navigation = ({ tags }) => (
  <div id="navigation">
    <h1>Les catégories les plus populaires</h1>
    <Grid>
      <Grid.Row columns={3} only="mobile tablet">
        {tags.map(tag => (
          <Grid.Column key={tag.slug}>
            <Segment>
              <NavLink exact to={`/annonces/${tag.id}`}>
                <Card>
                  <Image src="" />
                  <Card.Content>
                    <Card.Header className="title">{tag.name}</Card.Header>
                  </Card.Content>
                </Card>
              </NavLink>
            </Segment>
          </Grid.Column>
        ))}
      </Grid.Row>

      <Grid.Row columns={6} only="computer">
        {tags.map(tag => (
          <Grid.Column key={tag.slug}>
            <Segment>
              <Grid.Column>
                <Segment>
                  <NavLink exact to={`/annonces/${tag.id}`}>
                    <Card>
                      <Image src="" />
                      <Card.Content>
                        <Card.Header className="title">{tag.name}</Card.Header>
                      </Card.Content>
                    </Card>
                  </NavLink>
                </Segment>
              </Grid.Column>
            </Segment>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </div>
);

Navigation.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Navigation;

