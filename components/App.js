const React = require('react');
const FruitBasket = require('./FruitBasket');
const { Component } =require('react');

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

    this.updateFilter = this.updateFilter.bind(this)
    this.fetchFilters = this.fetchFilters.bind(this)

  }

  updateFilter(element) {
    this.setState({currentFilter: element.target.value})
  }

  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({fruit: fruit}));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  render() {
    return( <FruitBasket
      fruit = {this.state.fruit}
      filters = {this.state.filters}
      currentFilter = {this.state.currentFilter}
      updateFilterCallback = {this.state.updateFilter}
    />
    );
  }
}

module.exports = App;
