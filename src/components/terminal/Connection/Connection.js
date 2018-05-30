// @flow

import React from 'react';

const Connection = ({ host, username, password }) => <div>
  <h1>Terminal Connection</h1>
  {JSON.stringify({ host, username, password })}
</div>;

export default Connection;
