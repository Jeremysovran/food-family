import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';


import {
  Button, Header, Modal, Form, Select, Label, Checkbox,
} from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import { FaFileUpload } from 'react-icons/fa';


const CreateEvent = ({
  eventInputChange, eventFormSubmit, dateInputChange, fileUpload,
  inputAdress, inputCity, inputZip, inputDescription, inputTitle, startDate,
}) => {
  const handleChange = (e, { name, value, checked }) => {
    // const { name, value } = event.target;
    const modif = {
      [name]: value || checked,
    };
    console.log(modif);
    eventInputChange(modif);
  };

  const handleChangeFile = (e) => {
  const file = e.target.files[0];
  fileUpload(file);
  };

  const handleSelect = (date) => {
    // const { name, value } = event.target;
    const modif = {
      startDate: date,
    };
    dateInputChange(modif);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    eventFormSubmit(inputAdress, inputCity, inputZip, inputDescription, inputTitle, startDate);
  };

  const participant = [
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
    { text: '4', value: 4 },
    { text: '5', value: 5 },
    { text: '6', value: 6 },
    { text: '7', value: 7 },
    { text: '8', value: 8 },
    { text: '9', value: 9 },
    { text: '10', value: 10 },
  ];

  const cookie = [
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
    { text: '4', value: 4 },
    { text: '5', value: 5 },
  ];
  const difficulty = [
    { text: 'débutant', value: 1 },
    { text: 'moyen', value: 2 },
    { text: 'confirmé', value: 3 },
    { text: 'top chef', value: 4 },
  ];

  const checkboxes = [
    { name: 'sushis', value: '49', label: 'Sushis et makis' },
    { name: 'cocktail', value: '50', label: 'cocktail' },
    { name: 'pizza', value: '51', label: 'Pizza' },
    { name: 'cuisineBistrot', value: '52', label: 'Cuisine de bistrot' },
    { name: 'enfant', value: '53', label: 'Enfant ' },
    { name: 'cuisineAsiatique', value: '54', label: 'Cuisine asiatique' },
    { name: 'cuisineMarche', value: '55', label: 'Cuisine du marché' },
    { name: 'cuisineDuMonde', value: '56', label: 'Cuisine du monde' },
    { name: 'cuisineItalienne', value: '57', label: 'Cuisine italienne' },
    { name: 'patisserie', value: '58', label: 'Patisserie' },
    { name: 'barbecue', value: '59', label: 'Barbecue' },
    { name: 'tapas', value: '60', label: 'Tapas et apéritifs' },
  ];

  return (
    <div className="content">
      <Header icon="edit outline" content="Créer un atelier" />
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Label>nom de l'atelier</Label>
            <Form.Input
              type="text"
              name="inputTitle"
              placeholder="le titre de l'atelier"
              value={inputTitle}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <Label>categorie</Label>
              <Form.Field>
                {checkboxes.map(item => (
                  <Checkbox key={item.name} onChange={handleChange} name={item.name} label={item.label} />
                ))}
              </Form.Field>
            </Form.Field>
            <Form.Field>
              <Label>photo de l'atelier</Label>
              <input
                onChange={handleChangeFile}
                className="border-none"
                type="file"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Label>adresse</Label>
              <Form.Input
                type="text"
                name="inputAdress"
                placeholder="lieu"
                value={inputAdress}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>code postal</Label>
              <Form.Input
                type="number"
                name="inputZip"
                placeholder="code postal"
                value={inputZip}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Label>ville</Label>
              <Form.Input
                type="text"
                name="inputCity"
                placeholder="ville"
                value={inputCity}
                onChange={handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <Label>Description</Label>
            <Form.Input
              type="text"
              name="inputDescription"
              placeholder="description de l'evenement"
              value={inputDescription}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <Label>nombre de participant</Label>
              <Form.Field
                control={Select}
                selection
                options={participant}
                name="inputParticipant"
                onChange={handleChange}
                placeholder="nombre de participant"
              />
            </Form.Field>
            <Form.Field>
              <Label>Nombre de cookie pour participer</Label>
              <Form.Field
                control={Select}
                options={cookie}
                name="inputCookie"
                placeholder="cookie"
                onChange={handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Label className="display-flex">Date</Label>
              <DatePicker
                onChange={handleSelect}
                selected={startDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd/MM/yyyy h:mm aa"
                timeCaption="time"
              />
            </Form.Field>
            <Form.Field>
              <Label>Niveau</Label>
              <Form.Field
                control={Select}
                selection
                options={difficulty}
                name="inputDifficulty"
                onChange={handleChange}
                placeholder="niveau"
              />
            </Form.Field>
          </Form.Group>
          <Modal.Actions>
            <Button type="submit">Publier l'atelier</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </div>
  );
};

CreateEvent.propTypes = {
  eventInputChange: PropTypes.func.isRequired,
  eventFormSubmit: PropTypes.func.isRequired,
  dateInputChange: PropTypes.func.isRequired,
  inputAdress: PropTypes.string.isRequired,
  inputCity: PropTypes.string.isRequired,
  inputZip: PropTypes.string.isRequired,
  inputDescription: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
};

export default CreateEvent;
