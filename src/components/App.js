import React from 'react';

import CatList from './CatList';
import CreateFormContainer from './CreateFormContainer';

const App = ({ list, viewerId }) => (
  <div className="mw6 center mt5">
    <h1 className="mw6 ">Cat Hotel Manager</h1>
    <h3 className="mt5">Current residents</h3>
    <CatList list={list} />
    <CreateFormContainer viewerId={viewerId} />
  </div>
);

export default App;
