const axios = require("axios");
import TopSpot from "./topspot.jsx";
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topspots: [],
    }
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  componentWillMount(){
    axios.get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({topspots}));
  }

  componentDidMount(){
    axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=1234,5678&key=AIzaSyBHQCbrnxTUiD8R53sCZ-SzR1M5OACf1-w`)
      .then(response => response.data)
  }

  handleMouseOver(e){
    let id = e.target.id;
    this.setState({
      [id]: "block"
    })
  }

  handleMouseOut(e){
    let id = e.target.id;
    this.setState({
      [id]: "none"
    })
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
              index={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
              id={this.state[topspot.id]}
              handleMouseOver={this.handleMouseOver}
              handleMouseOut={this.handleMouseOut}
            />)}
      </div>
    );
  }
}

export default App;
