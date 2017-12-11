const axios = require("axios");
import TopSpot from "./topspot.jsx";
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topspots: []
    }
  }

  componentWillMount(){
    axios.get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({topspots}));
  }

  render() {
    return (
      <div className='App container'>
          <div className="jumbotron">
            <h1 className="display-3">San Diego Top Spots</h1>
            <p className="lead">A list of the top 30 places to see in San Diego, California.</p> 
          </div>
          {this.state.topspots.map(topspot =>
            <TopSpot 
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
              handleClick={this.handleClick}
            />)}
      </div>
    );
  }
}

export default App;
