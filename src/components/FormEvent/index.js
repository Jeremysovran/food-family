import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Grid, Segment,
} from 'semantic-ui-react';
import './style.scss';

const FormEvent = ({ inputComment, commentInputChange, commentFormSubmit, id }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    const modif = {
      [name]: value,
    };
    commentInputChange(modif);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    commentFormSubmit(id, inputComment);
  };

  return (
    <Grid>
      <Grid.Row id="formEventComputer" columns={1} only="computer">
        <Grid.Column>
          <Segment>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                type="text"
                name="inputComment"
                label="Question sur l'atelier"
                placeholder="Exprimez-vous"
                value={inputComment}
                onChange={handleChange}
              />
              <Button>Envoyer</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row id="formEvent" columns={1} only="mobile tablet">
        <Grid.Column>
          <Segment>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                type="text"
                name="inputComment"
                label="Question sur l'atelier"
                placeholder="Exprimez-vous"
                value={inputComment}
                onChange={handleChange}
              />
              <Button>Envoyer</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

FormEvent.propTypes = {
  inputComment: PropTypes.string.isRequired,
  commentInputChange: PropTypes.func.isRequired,
  commentFormSubmit: PropTypes.func.isRequired,
};

export default FormEvent;
