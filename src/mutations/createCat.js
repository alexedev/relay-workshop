import { commitMutation, graphql } from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation createCatMutation($input: CreateCatInput!) {
    createCat(input: $input) {
      edge {
        cursor
        node {
          id
          fullName
          nickname
          imageUrl
          isShwifty
        }
      }
      clientMutationId
    }
  }
`;

const createCat = (viewerId, { nickname, fullName, imageUrl }) => {
  const variables = {
    input: {
      clientMutationId: '12345',
      imageUrl,
      nickname,
      fullName
    }
  };

  commitMutation(environment, {
    mutation,
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: viewerId,
        connectionInfo: [
          {
            key: 'CatList_allCats',
            rangeBehavior: 'append'
          }
        ],
        edgeName: 'edge'
      }
    ],
    variables,
    onCompleted: (response, errors) => {
      console.log(response);
    },
    onError: err => console.error(err)
  });
};

export default createCat;
