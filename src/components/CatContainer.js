import React, { PureComponent } from 'react';

import { createFragmentContainer, graphql } from 'react-relay';

import Cat from './Cat';

import updateCat from '../mutations/updateCat';
import deleteCat from '../mutations/deleteCat';

class CatContainer extends PureComponent {
  toggleShwifty = () => {
    updateCat(this.props.cat.id, !this.props.cat.isShwifty);
  };
  handleDelete = () => {
    deleteCat(this.props.cat.id);
  };
  render() {
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
      imageUrl
      isShwifty
    }
  `
);
