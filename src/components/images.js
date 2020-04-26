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
  	  	 <div key={index}>
  	  	   {(image.hasOwnProperty("caption") &&
  	  	   	<div>
	  	     <p>{image.caption.text}</p>
			  <SayButton
			    onClick={ event => console.log(event) }
			    text={image.caption.text}
			    voice={this.selector}
          pitch="5" >
  	  	   		<img src={image.url} height="100px" width="100px" />
			  </SayButton>	  
			  </div>	   
	  	   )}
	  </div>
  	  )}
  	  </div>
  	)
  }
}

export default Images;
