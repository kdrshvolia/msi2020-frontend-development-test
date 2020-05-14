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
      jokes: [],
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
      const { chosenOption, chosenCategory, jokes } = this.state;
      if (chosenOption === options.categories) {
        apiCall(`https://api.chucknorris.io/jokes/random?category=${chosenCategory}`).then(
          (data) => {
            this.setState(
              {
                jokes: [...jokes, data],
              },
              () => console.log(this.state.jokes),
            );
          },
        );
      } else if (chosenOption === options.random) {
        apiCall(`https://api.chucknorris.io/jokes/random`).then((data) => {
          this.setState(
            {
              jokes: [...jokes, data],
            },
            () => console.log(this.state.jokes),
          );
        });
      } else if (chosenOption === options.search) {
        const { inputText } = this.state;
        apiCall(`https://api.chucknorris.io/jokes/search?query=${inputText}`).then((data) => {
          this.setState(
            {
              jokes: [...jokes, ...data.result],
            },
            () => console.log(data),
          );
        });
      }
    };

    render() {
      const { chosenOption, chosenCategory, jokes } = this.state;
      return (
        <WrappedComponent
          setInputText={this.setInputText}
          options={options}
          setType={this.setType}
          setCategory={this.setCategory}
          chosenOption={chosenOption}
          chosenCategory={chosenCategory}
          getJoke={this.getJoke}
          jokes={jokes}
        />
      );
    }
  };
};

export { withBoard };
