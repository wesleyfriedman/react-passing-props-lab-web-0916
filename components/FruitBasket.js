const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');


const FruitBasket = ({
  fruit,
  filters,
  currentFilter,
  onUpdateFilter
}) => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={onUpdateFilter}
      />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter}
      />
    </div>
  );
}

FruitBasket.defaultProps= {
  fruit: [],
  currentFilter: null,
  filters: [],
  updateFilterCallback: () => {}
}

module.exports = FruitBasket;
