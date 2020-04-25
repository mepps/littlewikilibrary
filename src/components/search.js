import React, {Component} from 'react';

class Search extends Component {
  render() {
  	return (
  	  <div className="container containter-sm text-center">
	      <form onSubmit={this.props.handleSubmit} >
	        <label htmlFor="query" hidden>Search Wikipedia</label>
	        <input type="text" name="query" className="search-wiki form-control" onChange={this.props.handleChange} value={this.props.query} />
	        <input type="submit" onSubmit={this.handleSubmit} className="App-search-submit btn center" value="Search" />
	      </form>
	  </div>
  	)
  }
}


export default Search;



