import React, { Component } from 'react';
import { SayButton } from 'react-say';

class Images extends Component {
  selector(voices) {
    var english = voices.find(v => v.name==="english");
    console.log(voices);
  	return english;
  }
  render() {
  	return (
  	  <div className="images">
  	  {this.props.images.map((image, index) =>
  	  	 <div className ="card" key={index}>
  	  	   {(image.hasOwnProperty("caption") &&
            <div className="card-body">
    			  <SayButton
    			    onClick={ event => console.log(event) }
    			    text={image.caption.text}
    			    voice={this.selector}
              pitch={1.0} >
      	  	   		<img src={image.url} className="card-img-top" />
    			  </SayButton>
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
