import React, { PureComponent } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import Cat from './Cat';

class CatContainer extends PureComponent {
  toggleShwifty = () => {
    // we will add update mutation here
  };
  handleDelete = () => {
    // we will add delete mutation here
  };
  render() {
    console.log(this.props.cat);
    return (
      <Cat
        cat={this.props.cat}
        onToggleShwifty={this.toggleShwifty}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default createFragmentContainer(
  CatContainer,
  graphql`
    fragment CatContainer_cat on Cat {
      id
      nickname
      fullName
      isShwifty
      imageUrl
    }
  `
);
