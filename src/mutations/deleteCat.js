import { commitMutation, graphql } from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation deleteCatMutation($input: DeleteCatInput!) {
    deleteCat(input: $input) {
      deletedId
      clientMutationId
    }
  }
`;

const deleteCat = id => {
  const variables = {
    input: {
      id,
      clientMutationId: 'abcde'
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    configs: [
      {
        type: 'NODE_DELETE',
        deletedIDFieldName: 'deletedId'
      }
    ],
    onCompleted: (response, errors) => {
      console.log(response);
    },
    onError: err => console.error(err)
  });
};

export default deleteCat;
