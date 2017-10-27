import React from 'react';

import { QueryRenderer, graphql } from 'react-relay';

import environment from '../Environment';

import App from './App';

const AppQuery = graphql`
  query AppContainerQuery {
    viewer {
      id
      allCats(last: 3) @connection(key: "AppContainerQuery_allCats") {
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
        return <App list={props.viewer.allCats} viewerId={props.viewer.id} />;
      }
      return <div>Loading</div>;
    }}
  />
);

export default AppContainer;
