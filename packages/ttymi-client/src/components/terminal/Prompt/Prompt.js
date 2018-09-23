// @flow
import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import styles from './Prompt.css';

const Prompt = ({ formState: { host, username, password }, handleChange, handleSubmit }) => (
  <div className={styles['form-wrap']}>
    <div className={styles['form-cell']}>
      <form className={styles['form-content']} onSubmit={handleSubmit}>
        <h1 className={styles['form-heading']}>Connect to your server.</h1>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>HOST NAME</label>
          <input
            className={styles['form-input']}
            placeholder="Enter your host name"
            autoFocus={true}
            tabIndex={0}
            type="text"
            name="host"
            value={host}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>USER NAME</label>
          <input
            className={styles['form-input']}
            placeholder="Enter your name"
            tabIndex={1}
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>PASSWORD</label>
          <input
            className={styles['form-input']}
            placeholder="Enter your password"
            tabIndex={2}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-footer']}>
          <button className={styles['form-button']} type={'submit'}>
            CONNECT
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default compose(
  withState('formState', 'setFormState', ({ host = '', username = '', password = '' }) => ({
    host,
    username,
    password,
  })),
  withHandlers({
    handleChange: ({ setFormState }) => evt => {
      const { name, value } = evt.target;
      setFormState(formState => ({
        ...formState,
        [name]: value,
      }));
    },
    handleSubmit: ({ onSubmit, formState }) => evt => {
      evt.preventDefault();
      onSubmit(formState);
    },
  }),
)(Prompt);
