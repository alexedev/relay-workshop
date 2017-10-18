import React, { PureComponent } from 'react';

import CreateForm from './CreateForm';

class CreateFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { fullName: '', nickname: '', imageUrl: '' };
  }
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleCreate = e => {
    // here we will add our create mutation later
    this.setState({ fullName: '', nickname: '', imageUrl: '' });
    e.preventDefault();
  };
  render() {
    return (
      <CreateForm
        submit={this.handleCreate}
        handleInputChange={this.handleInputChange}
        imageUrl={this.state.imageUrl}
        nickname={this.state.nickname}
        fullName={this.state.fullName}
      />
    );
  }
}

export default CreateFormContainer;
