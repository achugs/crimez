import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class MainComponent extends Component {
  state = {
    date: null,
    data: null,
    Latitude: null,
    Longitude: null

  }

  render() {
    return (
      <main>
        <Form updateDate={this.updateDate} fetchData={this.fetchData} />


      </main>
    );
  }

  updateDate = (event) => {
    this.setState({ date: event.target.value })
  }

  setLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ Latitude: position.coords.latitude, Longitude: position.coords.longitude })
    })
  }

  componentDidMount() {
    this.setLocation()
  }
  fetchData = (event) => {
    event.preventDefault()
    console.log('there')
    axios.get(`https://data.police.uk/api/crimes-at-location?date=${this.state.date}&lat=${this.state.Latitude}&lng=${this.state.Longitude}`).then((res) => {
      console.log(res, 'here')
      this.setState({ data: res })
    })
  }

}

export default MainComponent;
