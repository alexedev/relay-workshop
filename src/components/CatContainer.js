import React, { PureComponent } from 'react';

import Cat from './Cat';

class CatContainer extends PureComponent {
  toggleShwifty = () => {
    // we will add update mutation here
  };
  handleDelete = () => {
    // we will add delete mutation here
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

export default CatContainer;