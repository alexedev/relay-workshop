import React from 'react';

import CatList from './CatList';
import CreateFormContainer from './CreateFormContainer';

// data structure corresponds to expected graphql response
const viewer = {
  id: 'abcd',
  allCats: {
    edges: [
      {
        cursor: 'cursor1',
        node: {
          id: '1',
          imageUrl: 'http://tachyons.io/img/avatar_1.jpg',
          fullName: 'Cat 1',
          nickname: 'cat1',
          isShwifty: true
        }
      },
      {
        cursor: 'cursor2',
        node: {
          id: '2',
          imageUrl: 'http://tachyons.io/img/avatar_1.jpg',
          fullName: 'Cat 2',
          nickname: 'cat2',
          isShwifty: false
        }
      },
      {
        cursor: 'cursor3',
        node: {
          id: '3',
          imageUrl: 'http://tachyons.io/img/avatar_1.jpg',
          fullName: 'Cat 3',
          nickname: 'cat3',
          isShwifty: true
        }
      }
    ]
  }
};

const App = () => (
  <div className="mw6 center mt5">
    <h1 className="mw6 ">Cat Hotel Manager</h1>
    <h3 className="mt5">Current residents</h3>
    <CatList viewer={viewer} />
    <CreateFormContainer />
  </div>
);

export default App;
