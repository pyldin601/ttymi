import React from 'react';
import styles from './Content.css';
import NewConnection from '../../connection/NewConnection';

const Content = () => {
  return <div className={styles.content}>
    <NewConnection />
  </div>
};

export default Content;
