import React, {Component} from 'react';
import Images from './components/images.js';
import Results from './components/results.js';
import Search from './components/search.js';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState( { query: event.target.value } );
    this.searchWiki();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.searchWiki();
  }

  handleClick(event) {
    console.log(event.currentTarget.href)
    event.preventDefault();
    fetch(event.currentTarget.href)
    .then(res => res.json())
    .then((data) => {
      var images = data.items;
      console.log(images);
    })
    .catch(console.log)
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
            </div>
          </header>
        </div>
        <Search query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Results results={this.state.results} handleClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;
