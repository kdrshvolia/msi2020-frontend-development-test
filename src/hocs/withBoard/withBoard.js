import React from 'react';
import apiCall from '../../apiCall';

const options = {
  random: 'random',
  categories: 'categories',
  search: 'search',
};

const withBoard = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      chosenOption: options.random,
      chosenCategory: '',
      joke: {},
      inputText: '',
    };

    setType = (option) => {
      this.setState({
        chosenOption: option,
      });
    };

    setCategory = (category) => {
      this.setState({
        chosenCategory: category,
      });
    };

    setInputText = (text) => {
      this.setState({
        inputText: text,
      });
    };

    getJoke = () => {
      const { chosenOption, chosenCategory, joke } = this.state;
      if (chosenOption === options.categories) {
        apiCall(`https://api.chucknorris.io/jokes/random?category=${chosenCategory}`).then(
          (data) => {
            this.setState(
              {
                joke: data,
              },
              () => console.log(this.state.joke),
            );
          },
        );
      } else if (chosenOption === options.random) {
        apiCall(`https://api.chucknorris.io/jokes/random`).then((data) => {
          this.setState(
            {
              joke: data,
            },
            () => console.log(this.state.joke),
          );
        });
      } else if (chosenOption === options.search) {
        const { inputText } = this.state;
        apiCall(`https://api.chucknorris.io/jokes/search?query=${inputText}`).then((data) => {
          this.setState(
            {
              joke: data,
            },
            () => console.log(this.state.joke),
          );
        });
      }
    };

    render() {
      const { chosenOption, chosenCategory, joke } = this.state;
      return (
        <WrappedComponent
          setInputText={this.setInputText}
          options={options}
          setType={this.setType}
          setCategory={this.setCategory}
          chosenOption={chosenOption}
          chosenCategory={chosenCategory}
          getJoke={this.getJoke}
          joke={joke}
        />
      );
    }
  };
};

export { withBoard };
