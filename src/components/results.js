import React from 'react';
import Images from './images.js';

const Results = ({ results }) => {
  if ( Array.isArray(results) && results.length > 1 ) {
    function handleClick(event) {
      console.log(event.currentTarget.href)
      event.preventDefault();
      fetch(event.currentTarget.href)
      .then(res => res.json())
      .then((data) => {
        var images = data.items;
        console.log(images);
      })
      .catch(console.log)
    }
    return (
      <div>
        <center><h1>Results</h1></center>
          {results[1].map((result, index) => (
            <div className="card" key={"result-" + index}>
              <div className="card-body">
                <a href={"https://en.wikipedia.org/api/rest_v1/page/media-list/" + result} key={"result-link-" + index} onClick={handleClick}>
                  <h5 className="card-title">{result}</h5>
                  </a>
              </div>
            </div>
          ))}
      </div>
    )
  } else {
    return null;
  }
};

export default Results