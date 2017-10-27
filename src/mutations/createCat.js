import { commitMutation, graphql } from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation createCatMutation($input: CreateCatInput!) {
    createCat(input: $input) {
      clientMutationId
      edge {
        cursor
        node {
          id
          fullName
          nickname
          imageUrl
        }
      }
    }
  }
`;

const createCat = (viewerId, { fullName, nickname, imageUrl }) => {
  const variables = {
    input: {
      fullName,
      nickname,
      imageUrl,
      clientMutationId: 'sadfsd'
    }
  };

  return commitMutation(environment, {
    mutation,
    variables,
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: viewerId,
        connectionInfo: [
          {
            key: 'AppContainerQuery_allCats',
            rangeBehavior: 'append'
          }
        ],
        edgeName: 'edge'
      }
    ],
    onCompleted: (response, errors) => {
      console.log(response, errors);
    },
    onError: err => console.error(err)
  });
};

export default createCat;
