import React from 'react';

import CatList from './CatList';
import CreateFormContainer from './CreateFormContainer';

// data structure corresponds to expected graphql response

const App = ({ viewer }) => (
  <div className="mw6 center mt5">
    <h1 className="mw6 ">Cat Hotel Manager</h1>
    <h3 className="mt5">Current residents</h3>
    <CatList viewer={viewer} />
    <CreateFormContainer />
  </div>
);

export default App;
