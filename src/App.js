import React from 'react';
import TerminalLayout from './components/terminal/TerminalLayout/TerminalLayout';
import Sidebar from './components/terminal/Sidebar/Sidebar';
import Content from './components/terminal/Content/Content';

const App = () => {
  return <TerminalLayout sidebar={<Sidebar />} content={<Content />} />;
};

export default App;
