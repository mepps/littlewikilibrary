import React, { Component } from 'react';
import { SayButton } from 'react-say';

class Images extends Component {
  selector(voices) {
  	return voices.find(v => v.lang==="en-US")
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
			    voice={this.selector} >
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
