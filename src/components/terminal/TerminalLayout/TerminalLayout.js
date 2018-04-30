import React from 'react';
import * as PropTypes from 'prop-types'
import styles from './TerminalLayout.css';

const TerminalLayout = ({ sidebar, body }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

TerminalLayout.propTypes = {
  sidebar: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default TerminalLayout;
