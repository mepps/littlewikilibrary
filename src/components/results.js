import React from 'react'

const Results = ({ results }) => {
  return (
    <div>
      <center><h1>Results</h1></center>
      {results.map((result) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{result.name}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Results