import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import CrimeCardz from './CrimeCardz';
import CrimezChart from './CrimezChart';

class MainContent extends Component {
  state = {
    date: null,
    data: [],
    Latitude: null,
    Longitude: null,
    Loading: false
  }

  render() {
    return (
      <main>
        <Form updateDate={this.updateDate} fetchData={this.fetchData} />
        {this.state.Loading && <h3>Loading...</h3>}
        {!this.state.Loading && <CrimezChart data={this.state.data} />}
        {!this.state.Loading && <CrimeCardz data={this.state.data} />}
      </main>
    );
  }

  updateDate = (event) => {
    this.setState({ date: event.target.value })
  }

  setLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(typeof position.coords.latitude)
      this.setState({ Latitude: position.coords.latitude.toFixed(4), Longitude: position.coords.longitude.toFixed(4) })
    })
  }

  componentDidMount() {
    this.setLocation()
  }
  fetchData = (event) => {

    this.setState({ Loading: true });
    event.preventDefault()
    console.log('there')
    axios.get(`https://data.police.uk/api/crimes-at-location?date=${this.state.date}&lat=${this.state.Latitude}&lng=${this.state.Longitude}`).then((res) => {
      console.log(res, 'here')
      this.setState({ data: res.data, Loading: false })
    }).catch((err) => console.log(err, 'here'));
  }

}

export default MainContent;
