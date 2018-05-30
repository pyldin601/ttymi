// @flow

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const Prompt = ({ host, username, password, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        Host:
        <input type="text" name="host" value={host} onChange={handleChange} />
      </label>
    </div>
    <div>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={handleChange} />
      </label>
    </div>
    <div>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
    </div>
    <button type={"submit"}>Connect</button>
  </form>
);

export default compose(
  withState('formState', 'setFormState', {
    host: '',
    username: '',
    password: '',
  }),
  withHandlers({
    handleChange: ({ setFormState }) => evt => {
      const { name, value } = evt.target;
      setFormState(formState => ({
        ...formState,
        [name]: value,
      }))
    },
    handleSubmit: ({ onSubmit, formState }) => evt => {
      evt.preventDefault();
      onSubmit(formState);
    },
  })
)(Prompt);
