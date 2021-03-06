import React, { Component } from 'react';
import Speech from 'react-speech';

class Images extends Component {
  displayText(imageurl) {
    return <img src={imageurl} className="card-img-top" />
  }
  render() {
  	return (
  	  <div className="images">
        <button class="btn btn-secondary" onClick={this.props.close}>← Back to results</button>
        <h1 class="text-center">{this.props.result}</h1>
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
  	  </div>
  	)
  }
}

export default Images;
