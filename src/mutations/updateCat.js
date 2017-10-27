import { commitMutation, graphql } from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation updateCatMutation($input: UpdateCatInput!) {
    updateCat(input: $input) {
      clientMutationId
      cat {
        id
        isShwifty
      }
    }
  }
`;

const updateCat = (id, isShwifty) => {
  const variables = {
    input: {
      id,
      clientMutationId: 'sadfsdf',
      isShwifty
    }
  };

  return commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log(response, errors);
    },
    onError: err => console.error(err)
  });
};

export default updateCat;
