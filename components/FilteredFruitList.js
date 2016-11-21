const React = require('react');
const { Component } = require('react');


const FilteredFruitList = ({
  fruit,
  filter
}) => {

  const newFruitList = !filter ? fruit : fruit.filter(loneFruit => loneFruit.fruit_type == filter)

  return (
    <ul className="fruit-list">
      {newFruitList.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  currentFilter: null,
  filter: []
}

module.exports = FilteredFruitList;
