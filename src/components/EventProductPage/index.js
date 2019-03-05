import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FormEvent from 'src/containers/FormEvent';
import GoogleMap from 'src/containers/GoogleMap';
import {
  Grid, Segment, Image, Card, Button, Responsive,
} from 'semantic-ui-react';
import {
  FaRegClock, FaCookieBite, FaCheck, FaTimes, FaFire, FaRegUserCircle, FaUsers,
} from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import './style.scss';

class EventProductPage extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    const { id } = this.props.match.params;
    fetchData(id);
  }

  render() {
    const {
      isAuthenticated, modalOpenLogin, modalOpenConfirmation, city, title, handleReaction, commentResponseFormSubmit,
      date, description, postalCode, cost, level, nbPlace, nbParticipant, isFull, commentResponseInputChange,
      tags, organizer, day, month, feelings, questionsCookingWorkshop, answersCookingWorkshop, id, inputResponse, newQuestion,
      picture, modalOpenNoConfirmation,participate,
    } = this.props;

    const handleReactionButton = event => {
      const { value } = event.target;
      // console.log(value, id);
      handleReaction(value, id);
    };

    const handleOpenLogin = () => {
      modalOpenLogin();
    };
    const handleOpenConfirmation = () => {
      modalOpenConfirmation();
    };

    const handleOpenNoConfirmation = () => {
      modalOpenNoConfirmation();
    };
    /*
    const handleChange = event => {
      const { name, value } = event.target;
      const modif = {
        [name]: value
      };
      console.log(modif);
      commentResponseInputChange(modif);
    };

const handleChangeResponse = (questionId) => {
      
      return function (event){
        const responseText = event.target.value;
        // Récupérer event.target.value
        // Un props pour dispatcher une action reponseCreate
        // Une question, c'est un objet
        // Cet objet possède un tableau qui contient les réponses
        // Dans toutes les questions de l'atelier de trouver LA question 
        // concernée par la réponse
        // Trouver dans toutes les questions la bonne, pour modifier sa propriété "réponses"
        // et ajouter la nouvelle réponse dedans
        reponseCreate(questionId, responseText);
        // Pour trouver dans un array un objet qui t'interesse
        // var questionATraiter = array.find( question => question.id == questionID );
        // questionATraiter.responses.push()
     // }
    //}


    const handleSubmit = event => {
      event.preventDefault();
      commentResponseFormSubmit();
    };
*/
    const dateTime = new Date(date);
    const hour = dateTime.getHours();
    const min = dateTime.getMinutes();
    const hourEvent = hour + "h" + min;

    const debutant = level === 1 ? "debutant" : "";
    const moyen = level === 2 ? "moyen" : "";
    const confirme = level === 3 ? "confirmé" : "";
    const topChef = level === 4 ? "TopChef" : "";

    return (
      <div id="eventProductPage">
        <Grid>
          <Grid.Row columns={1} only="mobile tablet">
            <Grid.Column>
              <Segment className="card fluid">
                <Image className="imageMobile" src={picture} />
                <Card.Content className="content">
                  <div className="date">
                    <span>{month}</span>
                    <span className="date-bold">{day}</span>
                  </div>
                  <div className="infoEvent">
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>Categories</Card.Meta>
                    {typeof tags !== 'undefined'
                      ? tags.map(tag => <span key={tag.id}>{tag.name}, </span>)
                      : ''}
                  </div>
                </Card.Content>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="description">
                <div className="description-user">
                  <FaRegUserCircle />
                  <span>
                    Organisé par
                    {typeof organizer !== 'undefined' ? organizer.username : ''}
                  </span>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="datePlace">
                <div className="datePlace-space">
                  <FaRegClock />
                  <span className="datePlace-icon">
                    Début de l'atelier à {hourEvent}
                  </span>
                </div>
                <div>
                  <MdPlace />
                  <span className="datePlace-icon">Le lieu: {city}</span>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="description">
                <div className="description-participe">
                  <div>
                    <div className="description-cost">
                      <div id="cout" className="description-price">
                        <span>coût {cost}</span>
                        <FaCookieBite />
                      </div>
                      {!participate ? (
                        <Button
                          className="description-sub"
                          onClick={handleOpenConfirmation}
                        >
                          participe <FaCheck />
                        </Button>
                      ) : (
                        <Button
                          className="description-sub"
                          onClick={handleOpenNoConfirmation}
                        >
                          se désinscrire <FaTimes />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="description-reaction">
                    {typeof feelings !== "undefined"
                      ? feelings.map(feeling => (
                          <div className="blockReaction" key={feeling.id}>
                            <button
                              onClick={handleReactionButton}
                              type="submit"
                              name={feeling.name}
                              value={feeling.id}
                            >
                              {feeling.name}
                            </button>
                            <div className="number">{feeling.count}</div>
                          </div>
                        ))
                      : ''}
                  </div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="description">
                <div className="titleDesc">{title}</div>
                <p>{description}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} only="computer">
            <Grid.Column>
              <Segment className="card fluid">
                <Image className="imageComputer" src={picture} />
                <Card.Content className="contenu">
                  <div className="entete">
                    <h2>
                      {day}
                      {month}
                    </h2>
                    <h1>{title}</h1>
                    {typeof tags !== 'undefined'
                      ? tags.map(tag => <h3 key={tag.id}>{tag.name}, </h3>)
                      : ''}
                  </div>
                </Card.Content>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} className="contentArea" only="computer">
            <Grid.Column className="no-padding">
              <Segment className="descriptionDesktop">
                <div className="description-user description-space">
                  <FaRegUserCircle />
                  <span>
                    Organisé par
                    {typeof organizer !== 'undefined' ? organizer.username : ''}
                  </span>
                </div>
                <div className="description-space">
                  <FaRegClock />
                  <span> Début de l'atelier à {hourEvent}</span>
                </div>
                <div className="description-space">
                  <FaUsers /> {nbParticipant} participants sur {nbPlace} places
                  au total
                </div>
                <div className="description-space">
                  <MdPlace />
                  <span>
                    <span className="bold">Lieu: </span>
                    {city}
                  </span>
                  <span>{postalCode}</span>
                  <span className="description-space">
                    <Responsive
                      className="level"
                      as={Segment}
                      minWidth={1250}
                    >
                      <span>
                        <FaFire /> <span className="bold">Difficulté:</span> {debutant}
                        {moyen}
                        {confirme}
                        {topChef}
                      </span>
                    </Responsive>
                  </span>
                </div>

                <div id="boutons" className="description-participe">
                  <div id="cout" className="description-price">
                    <span>
                      coût {cost}
                      <Image src="http://217.70.190.71/assets/tff-picto-cookie.png" />
                    </span>
                  </div>
                  {typeof tags !== 'undefined' ? (
                    isAuthenticated ? (
                      !participate ? (
                        <Button
                          className="description-sub"
                          onClick={handleOpenConfirmation}
                        >
                          participe <FaCheck />
                        </Button>
                      ) : (
                        <Button
                          className="description-sub"
                          onClick={handleOpenNoConfirmation}
                        >
                          se désinscrire
                          <FaTimes />
                        </Button>
                      )
                    ) : (
                      ''
                    )
                  ) : (
                    ''
                  )}
                </div>
                <div className="description-reaction">
                  {typeof feelings !== 'undefined'
                    ? feelings.map(feeling => (
                      <div
                        className={classnames({
                          blockReaction: true,
                          jello: isAuthenticated,
                        })}
                        key={feeling.id}
                      >
                        <button
                          onClick={handleReactionButton}
                          type="submit"
                          name={feeling.name}
                          value={feeling.id}
                          className={feeling.name}
                        />
                        <div className="number">{feeling.count}</div>
                      </div>
                    ))
                    : ''}
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column className="no-padding">
              <Segment className="blockMap">
                <div className="blockMap-map">
                  <GoogleMap />
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="contentArea-bis" columns={1} only="computer">
            <Grid.Column>
              <Segment>
                <div className="titleDesc">{title}</div>
                <p>{description}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {isAuthenticated ? (
          <FormEvent />
        ) : (
          <Grid.Column className="formEventComputer">
            <div>pour commenter veuillez vous connecter</div>
            <Button onClick={handleOpenLogin}>se connecter</Button>
          </Grid.Column>
        )}
        <Grid>
          <Grid.Row
            className="contentArea-listMessage"
            columns={1}
            only="computer"
          >
            <Grid.Column>
              {typeof questionsCookingWorkshop !== 'undefined'
                ? questionsCookingWorkshop.map(question => (
                  <Segment key={question.id}>
                    <div>
                      <div className="author-question">
                        {question.author}
                        <span>{question.maj}</span>
                      </div>
                      <div>{question.description}</div>
                      {/*
                      <div className="answerCooking">
                        {question.answersCookingWorkshop.description}
                      </div>
                      <Segment>
                        <Form onSubmit={handleSubmit}>
                          <Form.Input
                            type="text"
                            name={"answer"}
                            placeholder="Exprimez-vous"
                            value={inputResponse}
                            // onChange={handleChangeResponse(question.id)}
                          />
                          <Button>Submit</Button>
                        </Form>
                      </Segment>
                      */}
                    </div>
                  </Segment>
                ))
                : ''}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only="tablet mobile">
            <Grid.Column>
              {typeof questionsCookingWorkshop !== 'undefined'
                ? questionsCookingWorkshop.map(question => (
                  <Segment key={question.id}>
                    <div id="formEventMessageList">
                      <div className="author-question">
                        {question.author} <span>{question.maj}</span>
                      </div>
                      <div>{question.description}</div>
                    </div>
                  </Segment>
                ))
                : ''}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

EventProductPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  modalOpenLogin: PropTypes.func.isRequired,
  modalOpenConfirmation: PropTypes.func.isRequired,
};

export default EventProductPage;
