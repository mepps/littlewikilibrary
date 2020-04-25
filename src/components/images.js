import React, {Component} from 'react';

class Images extends Component {
  render() {
  	return (
  	  <div className="images">
  	  {this.props.images.map((image) =>
  	  	 (image.caption &&
	  	  <p key={image.section_id}>{image.caption.text}</p>
	  	)
  	  )}
  	  </div>
  	)
  }
}


export default Images;



