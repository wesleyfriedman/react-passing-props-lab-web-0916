const React = require('react');

const Filter = ({
  filters,
  handleChange
}) => {
  return (<select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>)
}

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
}


// class Filter extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: []
//     };
//
//     this.fetchFilters = this.fetchFilters.bind(this);
//   }
//
//   componentWillMount() {
//     this.fetchFilters();
//   }
//

//
//   render() {
    // return (

  //   );
  // }
// }

module.exports = Filter;
