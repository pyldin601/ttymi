import React from 'react';
import * as styles from './Sidebar.css';
import OpenConnections from '../OpenConnections/OpenConnections';

const Sidebar = () => {
  return <div className={styles.sidebar}>
    <OpenConnections />
  </div>;
};

export default Sidebar;
