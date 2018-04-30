import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './TerminalLayout.css';

const TerminalLayout = ({ sidebar, content }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebarWrap}>{sidebar}</div>
      <div className={styles.contentWrap}>{content}</div>
    </div>
  );
};

TerminalLayout.propTypes = {
  sidebar: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default TerminalLayout;
