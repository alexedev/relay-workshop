import React from 'react';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';
import App from './App';

const AppContainer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AppContainerQuery($count: Int!) {
        viewer {
          id
          ...CatList_viewer
        }
      }
    `}
    variables={{ count: 2 }}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        console.log(props);
        return <App viewer={props.viewer} />;
      }
      return <div>Loading</div>;
    }}
  />
);

export default AppContainer;
