import React, {Component} from 'react';
import Results from './components/results.js';
import logo from './logo.png';
import './App.css';

class App extends Component {
  state = {
    results: [],
    query: ""
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState( { query: event.target.value } );
    this.callwiki();
  }

  callwiki() {
    fetch("https://simple.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + this.state.query + "&limit=10&namespace=0&format=json")
    .then(res => res.json())
    .then((data) => {
      this.setState({ results: data })
      console.log(data)
    })
    .catch(console.log)
  }

  componentDidMount() {
    this.callwiki()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" name="query" className="App-search-wiki" onChange={this.handleChange} value={this.state.query} />
          <input type="submit" className="App-search-submit btn" />
        </header>
      </div>
    );
  }
}

export default App;
