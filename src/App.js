import React, {Component} from 'react';
import Results from './components/results.js';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState( { query: event.target.value } );
    this.searchWiki();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.searchWiki();
  }

  searchWiki() {
    fetch("https://simple.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + this.state.query + "&limit=10&namespace=0&format=json")
    .then(res => res.json())
    .then((data) => {
      this.setState({ results: data })
      console.log(data)
    })
    .catch(console.log)
  }

  componentDidMount() {
    this.searchWiki()
  }

  render() {
    return (
      <React.Fragment>
      <div className="App">
        <header className="App-header">
          <div className="container-sm">
            <img src={logo} className="App-logo" alt="logo" />
            <form onSubmit={this.handleSubmit} className="">
              <label htmlFor="query" hidden>Search Wikipedia</label>
              <input type="text" name="query" className="App-search-wiki form-control" onChange={this.handleChange} value={this.state.query} />
              <input type="submit" onSubmit={this.handleSubmit} className="App-search-submit btn" value="Search" />
            </form>
          </div>
        </header>
      </div>
        <Results results={this.state.results} />
      </React.Fragment>
    );
  }
}

export default App;
