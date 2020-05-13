import React from 'react';
import PropTypes from 'prop-types';
import apiCall from '../../apiCall';

const withCategoriesList = (WrappedComponent) => {
  return class EnhancedCategoriesList extends React.Component {
    state = {
      categories: [],
      showCategories: 4,
    };

    componentDidMount() {
      this.getCategories();
    }

    getCategories = () => {
      const { setCategory } = this.props;
      const { categories, showCategories } = this.state;
      apiCall('https://api.chucknorris.io/jokes/categories').then((data) => {
        this.setState(
          {
            categories: [...categories, ...data.slice(0, showCategories)],
          },
          () => {
            //setCategory(categories[0]);
            console.log(categories);
          },
        );
      });
    };

    setCategory = (e) => {
      const { setCategory } = this.props;
      setCategory(e.target.innerText);
      console.log(e.target.innerText);
    };

    render() {
      const { categories } = this.state;
      return <WrappedComponent categories={categories} setCategory={this.setCategory} />;
    }
  };
};

export { withCategoriesList };
