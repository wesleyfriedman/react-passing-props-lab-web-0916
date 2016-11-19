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

// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(res => res.json())
//       .then(fruit => this.setState({ items: fruit}));
//   }
//
//   render() {
//     const list = !this.props.filter ? this.state.items :
//       this.state.items.filter(i => i.fruit_type == this.props.filter);
//
//     return (

//     );
//   }
// }

module.exports = FilteredFruitList;
