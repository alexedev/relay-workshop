/**
 * @flow
 * @relayHash 7f206c7713a6b87133ecadccb69877be
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateCatMutationVariables = {|
  input: {
    fullName?: ?string;
    id: string;
    imageUrl?: ?string;
    isShwifty?: ?boolean;
    nickname?: ?string;
    clientMutationId: string;
  };
|};
export type updateCatMutationResponse = {|
  +updateCat: ?{|
    +clientMutationId: string;
    +cat: ?{|
      +id: string;
      +isShwifty: ?boolean;
    |};
  |};
|};
*/


/*
mutation updateCatMutation(
  $input: UpdateCatInput!
) {
  updateCat(input: $input) {
    clientMutationId
    cat {
      id
      isShwifty
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateCatInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateCatMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateCatInput!"
          }
        ],
        "concreteType": "UpdateCatPayload",
        "name": "updateCat",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cat",
            "name": "cat",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "isShwifty",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "updateCatMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateCatInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateCatMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateCatInput!"
          }
        ],
        "concreteType": "UpdateCatPayload",
        "name": "updateCat",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cat",
            "name": "cat",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "isShwifty",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation updateCatMutation(\n  $input: UpdateCatInput!\n) {\n  updateCat(input: $input) {\n    clientMutationId\n    cat {\n      id\n      isShwifty\n    }\n  }\n}\n"
};

module.exports = batch;
