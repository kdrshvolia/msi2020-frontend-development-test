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
      favoritedJokes: [],
      categories: [],
      showCategories: 4,
      inputText: '',
    };

    componentDidMount() {
      this.getCategories();
    }

    addToFav = (id) => {
      const { jokes, favoritedJokes } = this.state;
      const favJoke = jokes.find((joke) => joke.id === id);
      if (favoritedJokes.includes(favJoke)) {
        this.setState(
          {
            favoritedJokes: favoritedJokes.filter((joke) => joke.id !== favJoke.id),
          },
          () => console.log(this.state.favoritedJokes),
        );
      } else {
        this.setState(
          {
            favoritedJokes: [...this.state.favoritedJokes, favJoke],
          },
          () => console.log(this.state.favoritedJokes),
        );
      }
    };

    setType = (option) => {
      this.setState({
        chosenOption: option,
      });
    };

    setCategory = (category) => {
      this.setState(
        {
          chosenCategory: category,
        },
        () => console.log(this.state.chosenCategory),
      );
    };

    setInputText = (text) => {
      this.setState({
        inputText: text,
      });
    };

    getCategories = () => {
      const { categories, showCategories } = this.state;
      apiCall('https://api.chucknorris.io/jokes/categories').then((data) => {
        this.setState(
          {
            categories: [...categories, ...data.slice(0, showCategories)],
          },
          () =>
            this.setState({
              chosenCategory: this.state.categories[0],
            }),
        );
      });
    };

    getJoke = () => {
      const { chosenOption, chosenCategory, jokes } = this.state;
      if (chosenOption === options.categories) {
        apiCall(`https://api.chucknorris.io/jokes/random?category=${chosenCategory}`).then(
          (data) => {
            this.setState({
              jokes: [...jokes, data],
            });
          },
        );
      } else if (chosenOption === options.random) {
        apiCall(`https://api.chucknorris.io/jokes/random`).then((data) => {
          this.setState({
            jokes: [...jokes, data],
          });
        });
      } else if (chosenOption === options.search) {
        const { inputText } = this.state;
        apiCall(`https://api.chucknorris.io/jokes/search?query=${inputText}`).then((data) => {
          this.setState({
            jokes: [...jokes, ...data.result],
          });
        });
      }
    };

    render() {
      const { chosenOption, chosenCategory, categories, jokes } = this.state;
      return (
        <WrappedComponent
          addToFav={this.addToFav}
          setInputText={this.setInputText}
          options={options}
          setType={this.setType}
          setCategory={this.setCategory}
          chosenOption={chosenOption}
          chosenCategory={chosenCategory}
          getJoke={this.getJoke}
          jokes={jokes}
          categories={categories}
        />
      );
    }
  };
};

export { withBoard };
