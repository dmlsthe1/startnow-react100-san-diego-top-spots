import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topspots: []
    }
  }

  render() {
    return (
      <div className='App'>
        <div className="py-5">
          <div className="container transpar">
            <div className="row">
              <div className="col-md-12">
                <div className="card border border-dark">
                  <div className="card-body">
                    <h4>San Diego Top Spots</h4>
                    <p className="py-1">A list of the top 30 places to see in San Diego, California.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
