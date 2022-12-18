import React, { Component } from 'react';
import Speech from 'react-speech';

class Images extends Component {
  displayText(imageurl) {
    return <img src={imageurl} className="card-img-top" />
  }
  backButton(display) {
    if (display){
      return <button class="btn btn-secondary" onClick={this.props.close}>← Back to results</button>
    }      
  }
  render() {
    let display = this.props.images.length > 0;
  	return (
  	  <div className="images container">
      <h1 class="text-center">{this.props.result}</h1>
      {this.backButton(display)}
  	  {this.props.images.map((image, index) =>
  	  	 <div className ="card" key={index}>
  	  	   {(image.hasOwnProperty("caption") &&
            <div className="card-body">
    			  <Speech
              pitch="2.0"
              textAsButton="true"
              displayText={this.displayText(image.url)}
    			    text={image.caption.text} />
            <p className="card-text">{image.caption.text}</p>
    			  </div>
	  	   )}
      	 </div>
  	  )}
      {this.backButton(true)}
  	  </div>
  	)
  }
}

export default Images;
