// @flow

import React from 'react';
import TerminalLayout from './terminal/TerminalLayout/TerminalLayout';
import Sidebar from './terminal/Sidebar/Sidebar';
import Content from './terminal/Content/Content';
import connect from '../store/connect';

const mapStateToProps = () => ({});

@connect(mapStateToProps)
export default class App extends React.Component {
  render() {
    return <TerminalLayout sidebar={<Sidebar />} content={<Content />} />;
  }
}
