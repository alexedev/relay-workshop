/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type CatList_viewer = {|
  +allCats: {|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string;
      +node: {| |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CatList_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count",
          "type": "Int"
        }
      ],
      "concreteType": "CatConnection",
      "name": "allCats",
      "plural": false,
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
                  "kind": "FragmentSpread",
                  "name": "CatContainer_cat",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
