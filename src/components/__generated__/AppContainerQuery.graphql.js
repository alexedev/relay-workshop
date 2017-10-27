/**
 * @flow
 * @relayHash 8fd85634a1b848268ba63179b9e8f117
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppContainerQueryResponse = {|
  +viewer: {|
    +id: string;
    +allCats: {| |};
  |};
|};
*/


/*
query AppContainerQuery {
  viewer {
    id
    allCats(last: 3) {
      ...CatList_list
    }
  }
}

fragment CatList_list on CatConnection {
  edges {
    cursor
    node {
      ...CatContainer_cat
      id
    }
  }
}

fragment CatContainer_cat on Cat {
  id
  fullName
  imageUrl
  nickname
  isShwifty
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
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
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 3,
                "type": "Int"
              }
            ],
            "concreteType": "CatConnection",
            "name": "allCats",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CatList_list",
                "args": null
              }
            ],
            "storageKey": "allCats{\"last\":3}"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
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
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 3,
                "type": "Int"
              }
            ],
            "concreteType": "CatConnection",
            "name": "allCats",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "CatConnection",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "CatEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Cat",
                        "name": "node",
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
                            "kind": "InlineFragment",
                            "type": "Cat",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "fullName",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "imageUrl",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "nickname",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "isShwifty",
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "allCats{\"last\":3}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppContainerQuery {\n  viewer {\n    id\n    allCats(last: 3) {\n      ...CatList_list\n    }\n  }\n}\n\nfragment CatList_list on CatConnection {\n  edges {\n    cursor\n    node {\n      ...CatContainer_cat\n      id\n    }\n  }\n}\n\nfragment CatContainer_cat on Cat {\n  id\n  fullName\n  imageUrl\n  nickname\n  isShwifty\n}\n"
};

module.exports = batch;
