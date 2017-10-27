import React from 'react';

import { QueryRenderer, graphql } from 'react-relay';

import environment from '../Environment';

import App from './App';

const AppQuery = graphql`
  query AppContainerQuery {
    viewer {
      id
      allCats(last: 3) {
        ...CatList_list
      }
    }
  }
`;

const AppContainer = () => (
  <QueryRenderer
    environment={environment}
    query={AppQuery}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <App list={props.viewer.allCats} />;
      }
      return <div>Loading</div>;
    }}
  />
);

export default AppContainer;
