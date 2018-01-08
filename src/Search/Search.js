import React, {Component} from 'react';

class Search extends Component {
  handleChange = ({currentTarget: {value}}) => {
    this.props.onChange(value);
  };

  render() {
    return <input type="text" onChange={this.handleChange} />;
  }
}

export default Search;
