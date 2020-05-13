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
      joke: '',
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

    getJoke = () => {
      const { chosenOption, chosenCategory, joke } = this.state;
      if (chosenOption === options.categories) {
        apiCall(`https://api.chucknorris.io/jokes/random?category=${chosenCategory}`).then(
          (data) => {
            this.setState(
              {
                joke: data,
              },
              () => console.log(joke),
            );
          },
        );
      } else if (chosenOption === options.random) {
        apiCall(`https://api.chucknorris.io/jokes/random`).then((data) => {
          this.setState(
            {
              joke: data,
            },
            () => console.log(joke),
          );
        });
      }
    };

    render() {
      const { chosenOption, chosenCategory, joke } = this.state;
      return (
        <WrappedComponent
          setType={this.setType}
          setCategory={this.setCategory}
          chosenOption={chosenOption}
          chosenCategory={chosenCategory}
          getJoke={this.getJoke}
          joke={joke}
          {...this.props}
        />
      );
    }
  };
};

export { withBoard };
