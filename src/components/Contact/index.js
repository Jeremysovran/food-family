import React from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
import './style.scss';

const topicOptions = [
  { key: 'h', text: 'Help', value: 'aide' },
  { key: 'q', text: 'Question', value: 'question' },
];


const Contact = () => (
  <div id="contact">
    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Nom'
          placeholder='Nom'
        />
        <Form.Field
          id='form-input-control-title'
          control={Input}
          label='email'
          placeholder='email'
        />
        <Form.Field
          control={Select}
          options={topicOptions}
          label={{ children: 'Theme', htmlFor: 'form-select-control-topic' }}
          placeholder='Sujet'
          search
          searchInput={{ id: 'form-select-control-topic' }}
        />
      </Form.Group>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Description'
        placeholder='Description'
      />
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Envoyer'
      />
    </Form>
  </div>
);

export default Contact;
