import React, { PureComponent } from 'react';

import CatContainer from './CatContainer';

import get from 'lodash/get';

class CatList extends PureComponent {
  loadMore = () => {
    // we will add pagination callback here
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

export default CatList;
