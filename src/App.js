import React, {Component, useEffect} from 'react';
import Images from './components/images.js';
import Results from './components/results.js';
import Search from './components/search.js';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { results: [], query: "", images: [], headerStyle: {}, showImages: false, result: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeImages = this.closeImages.bind(this);
  }

  handleParameters() {
    this.queryParameters = new URLSearchParams(window.location.hash.substring(1));
    const result = this.queryParameters.get("result");
    const query = this.queryParameters.get("query");
    if (result && result.length > 0) {
      this.getImages(result);
    }
    if (query && query.length > 0) {
      this.state.query = query;
      this.searchWiki();
    }
  }

  handleChange(event) {
    this.setState( { query: event.target.value, showImages: false } );
    this.searchWiki();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.searchWiki();
    this.setState({headerStyle: {display: "none"}});
  }

 handleClick(result, e) {
    e.preventDefault();
    this.getImages(result);
  }


  getImages(result) {
    this.setState({headerStyle: {display: "none"}});
    let url = "https://en.wikipedia.org/api/rest_v1/page/media-list/" + result;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      for (var index in data.items) {
          this.getImageUrl(data.items[index], index);
        }
      this.setState({images: data.items, showImages: true, result: result})
      this.queryParameters.set("result", this.state.result);
      window.location.hash = this.queryParameters.toString();
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

  closeImages() {
    this.setState({showImages: false});
    this.queryParameters.set("result", "");
    window.location.hash = this.queryParameters.toString();
  }

  searchWiki() {
    fetch("https://simple.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + this.state.query + "&limit=10&namespace=0&format=json")
    .then(res => res.json())
    .then((data) => {
      this.setState({ results: data });
      console.log(this.state.query);
      this.queryParameters.set("query", this.state.query);
      window.location.hash = this.queryParameters.toString();
    })
    .catch(console.log)
  }
  
  componentDidMount() {
    this.handleParameters();    
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <div className="container-sm">
              <img src={logo} className="App-logo" alt="logo" style={this.state.headerStyle} />
              <h1>Lil Wiki</h1>
              <h2 style={this.state.headerStyle}>Search for Wikipedia images and hear the captions</h2>
              <h2 style={this.state.headerStyle}>Made for fun</h2>
            </div>
          </header>
        </div>
        <Search query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        { !this.state.showImages &&
          <Results results={this.state.results}  handleClick={this.handleClick} />
        }
        { this.state.showImages && 
          <Images close={this.closeImages} result={this.state.result} images={this.state.images} />
       }
      </React.Fragment>
    );
  }
}

export default App;
