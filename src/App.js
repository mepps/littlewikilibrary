import React, {Component} from 'react';
import Images from './components/images.js';
import Results from './components/results.js';
import Search from './components/search.js';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], query: "", images: [], headerStyle: {} };
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
    this.setState({headerStyle: {display: "none"}});
  }

  handleClick(event) {
    event.preventDefault();
    fetch(event.currentTarget.href)
    .then(res => res.json())
    .then((data) => {
      for (var index in data.items) {
          this.getImageUrl(data.items[index], index);
        }
        this.setState({images: data.items})

    })
    .catch(console.log)
  }

  getImageUrl(image, index) {
    fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=" + image.title + "&prop=imageinfo&iiprop=url&format=json")
      .then(res => res.json())
      .then((data) => {
        var url = "";
        var page = Object.values(data.query.pages)[0];
        if ("imageinfo" in page) {
          url = Object.values(data.query.pages)[0].imageinfo[0].url;
        }
        this.setState( prevState =>
            { let images = Object.assign({}, prevState.images);
              images[index].url = url;
              return images;
            }
          );
      })
      .catch(console.log) 
  }

  searchWiki() {
    fetch("https://simple.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + this.state.query + "&limit=10&namespace=0&format=json")
    .then(res => res.json())
    .then((data) => {
      this.setState({ results: data })
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
              <img src={logo} className="App-logo" alt="logo" style={this.state.headerStyle} />
              <h1>Lil Wiki Library</h1>
              <h2 style={this.state.headerStyle}>Search for Wikipedia images by page</h2>
              <h2 style={this.state.headerStyle}>Made for fun</h2>
            </div>
          </header>
        </div>
        <Search query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Results results={this.state.results} handleClick={this.handleClick} />
        <Images images={this.state.images} />
      </React.Fragment>
    );
  }
}

export default App;
