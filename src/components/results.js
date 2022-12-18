import React, {Component} from 'react';

class Results extends Component {
  

  render() {
    if ( Array.isArray(this.props.results) && this.props.results.length > 1 ) {
      return (
        <div className="container">
          <center><h1>Results</h1></center>
            {this.props.results[1].map((result, index) => (
              <div className="card" key={"result-" + index}>
                <div className="card-body">
                  <a href="" onClick={(e) => this.props.handleClick(result, e)}>
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
    }
  }


export default Results;