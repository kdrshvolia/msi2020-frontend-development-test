import React from 'react';

const withSearchInput = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      inputText: '',
    };

    handleChange = (e) => {
      this.setState({
        inputText: e.target.value,
      });
    };

    render() {
      return <WrappedComponent placeholder={this.props.placeholder} onChange={this.handleChange} />;
    }
  };
};

export { withSearchInput };
