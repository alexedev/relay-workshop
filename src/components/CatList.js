import React, { PureComponent } from 'react';

import { createPaginationContainer, graphql } from 'react-relay';

import CatContainer from './CatContainer';

import get from 'lodash/get';

class CatList extends PureComponent {
  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    this.props.relay.loadMore(1);
  };
  render() {
    return (
      <div>
        {get(this.props, 'viewer.allCats.edges', []).map(({ cursor, node }) => (
          <CatContainer key={cursor} cat={node} />
        ))}

        <button
          className={'f6 bg-purple ba b--black-10 dim pointer pv1 white mv2 '}
          onClick={() => this.loadMore()}
        >
          Show me what you cat
        </button>
      </div>
    );
  }
}

export default createPaginationContainer(
  CatList,
  graphql`
    fragment CatList_viewer on Viewer {
      allCats(first: $count, after: $cursor)
        @connection(key: "CatList_allCats") {
        edges {
          cursor
          node {
            ...CatContainer_cat
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.allCats;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query CatListPaginationQuery($count: Int!, $cursor: String) {
        viewer {
          id
          ...CatList_viewer
        }
      }
    `
  }
);
