import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Image, Item, Button, Segment, Form, Select, Sticky, Rail,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import GoogleMapEvent from 'src/containers/GoogleMapEvent';
import './style.scss';


class EventResultList extends React.Component {

  state = {};

  
  componentDidMount() {
    const { listData, tagListData } = this.props;
    listData();
    // const { id } = this.props.match.params;
    // console.log(id);
    // tagListData(id);
  }
  
  handleContextRef = contextRef => this.setState({ contextRef });
  
  render() {
    const { cookingWorkshops, user, listInputChange, listFormSubmit, inputCity } = this.props;

    const handleChange = (e, { name, value, checked }) => {
      // const { name, value } = event.target;
      const modif = {
        [name]: value || checked,
      };
      console.log(modif);
      listInputChange(modif);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      listFormSubmit();
    };
    
    const { contextRef } = this.state;
    const tags = [
      { value: '49', text: 'Sushis et makis' },
      { value: '50', text: 'cocktail' },
      { value: '51', text: 'Pizza' },
      { value: '52', text: 'Cuisine de bistrot' },
      { value: '53', text: 'Enfant ' },
      { value: '54', text: 'Cuisine asiatique' },
      { value: '55', text: 'Cuisine du marché' },
      { value: '56', text: 'Cuisine du monde' },
      { value: '57', text: 'Cuisine italienne' },
      { value: '58', text: 'Patisserie' },
      { value: '59', text: 'Barbecue' },
      { value: '60', text: 'Tapas et apéritifs' },
    ];

    const city = [
      { text: 'Paris', value: 'paris' },
      { text: 'Marseille', value: 'marseille' },
      { text: 'Lyon', value: 'lyon' },
      { text: 'Rennes', value: 'rennes' },
      { text: 'Nantes', value: 'nantes' },
      { text: 'Montpellier', value: 'montpellier' },
      { text: 'Strasbourg', value: 'strasbourg' },
      { text: 'Bordeaux', value: 'bordeaux' },
      { text: 'Lille', value: 'lille' },
    ];

    const level = [
      { text: 'débutant', value: 1 },
      { text: 'moyen', value: 2 },
      { text: 'confirmé', value: 3 },
      { text: 'top chef', value: 4 },
    ];

    return (
  <div id="eventResultList">
    <div id="filters">
    <Form onSubmit={handleSubmit}>
      <span>recherche par:</span>
      <Form.Group widths="equal">
        <Form.Field>
          <Form.Field
            control={Select}
            selection
            options={city}
            name="inputCity"
            placeholder="ville"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Field
            control={Select}
            options={tags}
            name="inputTags"
            placeholder="catégorie"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Field
            control={Select}
            options={level}
            name="inputLevel"
            placeholder="niveau"
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">filtrer par </Button>
      </Form.Group>
    </Form>
    </div>
    <span>filtre:</span>
    
    {inputCity !== ''
    ? <span>{inputCity}</span>
    :  typeof user !== 'undefined'
    ? <span>{user.city}</span>
    : ''}
    <Grid stackable >
      <Grid.Column mobile={16} tablet={16} computer={8}>
      <div ref={this.handleContextRef}>
        <Item.Group>
          {
        cookingWorkshops.map(item => (

          <Item key={item.id}>
              <Item.Content>
              <NavLink exact to={`/atelier/${item.id}`}>
                  <Grid id="grille" className="event">
                    <Grid.Column width={4} only="tablet computer">
                    <Segment>
                    <div className="id-map">{item.id}</div>
                    <Image src={item.picture} size="massive"/>
                    </Segment>
                    </Grid.Column>

                    <Grid.Column mobile={5} tablet={3} computer={3}>
                      <Item.Header>
                        <h3 className="centered month">{item.month}</h3>
                        <h1 className="centered day">{item.day}</h1>
                      </Item.Header>
                      <Item.Extra className="cost">
                      <span>{item.cost}<Image src='http://217.70.190.71/assets/tff-picto-cookie.png' inline size="mini" /></span>
                      </Item.Extra>
                    </Grid.Column>

                    <Grid.Column mobile={11} tablet={9} computer={9} className="atelier">
                      <Item.Header>
                        <h3 className="category">
                          {typeof item.tags !== 'undefined'
                            ? item.tags.map(tag => (
                              <span key={tag.id}>{tag.name}, </span>
                            )) : ''}
                        </h3>
                        <h1 className="title">{item.title}</h1>
                      </Item.Header>
                      <Item.Meta className="dispo">{item.nbParticipant} participant(s) sur {item.nbPlace}</Item.Meta>
                      <Item.Extra
                        className="adress"
                        content={item.city + ' ' + item.postalCode} />
                                              <Item.Extra
                        className="adress"
                        content={'organisé par ' + item.organizer.username} />
                    </Grid.Column>
                  </Grid>
              </NavLink>
              </Item.Content>
          </Item>
        ))}

        </Item.Group>
        </div>
      <Rail position='right' id="width-sticky">
      <Sticky context={contextRef}>
      <div id="position-map">
      <GoogleMapEvent />
      </div>
      </Sticky>
      </Rail>
      </Grid.Column>
    </Grid>


  </div>

 );
}
}


export default EventResultList;





  