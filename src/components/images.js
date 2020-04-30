import React, { Component } from 'react';
import Speech from 'react-speech';

class Images extends Component {
  displayText(imageurl) {
    return <img src={imageurl} className="card-img-top" />
  }
  render() {
  	return (
  	  <div className="images">
  	  {this.props.images.map((image, index) =>
  	  	 <div className ="card" key={index}>
          
  	  	   {(image.hasOwnProperty("caption") &&
            <div className="card-body">
    			  <Speech
              pitch="1.5"
              lang ="en-US"
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
