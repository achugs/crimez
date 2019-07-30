import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import CrimeCardz from './CrimeCardz';
import CrimezChart from './CrimezChart';
import '../App.css';

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
        <button onClick={this.handleClick}>default</button>
        {this.state.Loading && <h3>Loading...</h3>}
        <section className="crimez">
          {!this.state.Loading && <CrimezChart data={this.state.data} />}
          {!this.state.Loading && <CrimeCardz data={this.state.data} />}
        </section>
      </main>
    );
  }

  handleClick = () => {
    this.setState({
      data: [
        {
          "category": "burglary",
          "location_type": "Force",
          "location": {
            "latitude": "53.479532",
            "street": {
              "id": 726074,
              "name": "On or near Hardman Street"
            },
            "longitude": "-2.250133"
          },
          "context": "",
          "outcome_status": {
            "category": "Investigation complete; no suspect identified",
            "date": "2017-02"
          },
          "persistent_id": "7e9a71e8f324ce20407c8bb6c85a60094a063debc1e178f3f962bc0a484bceb0",
          "id": 54963219,
          "location_subtype": "",
          "month": "2017-02"
        },
        {
          "category": "burglary",
          "location_type": "Force",
          "location": {
            "latitude": "53.479532",
            "street": {
              "id": 726074,
              "name": "On or near Hardman Street"
            },
            "longitude": "-2.250133"
          },
          "context": "",
          "outcome_status": {
            "category": "Investigation complete; no suspect identified",
            "date": "2017-04"
          },
          "persistent_id": "dc62eae71017a3d94ccdc0a257781761c4b6f9f29c865a9e6af517e867c13028",
          "id": 54971807,
          "location_subtype": "",
          "month": "2017-02"
        },
        {
          "category": "theft-from-the-person",
          "location_type": "Force",
          "location": {
            "latitude": "53.479532",
            "street": {
              "id": 726074,
              "name": "On or near Hardman Street"
            },
            "longitude": "-2.250133"
          },
          "context": "",
          "outcome_status": {
            "category": "Investigation complete; no suspect identified",
            "date": "2017-03"
          },
          "persistent_id": "6772898f5d8c046c10514dec8f47fcf07b9349c7061c480a19cdae6653626ab3",
          "id": 54957725,
          "location_subtype": "",
          "month": "2017-02"
        },
        {
          "category": "vehicle-crime",
          "location_type": "Force",
          "location": {
            "latitude": "53.479532",
            "street": {
              "id": 726074,
              "name": "On or near Hardman Street"
            },
            "longitude": "-2.250133"
          },
          "context": "",
          "outcome_status": {
            "category": "Investigation complete; no suspect identified",
            "date": "2017-03"
          },
          "persistent_id": "5927c442c6b5aeb625974361689bf6e388edf96ec9ea5614742f243053afe919",
          "id": 54952698,
          "location_subtype": "",
          "month": "2017-02"
        },
        {
          "category": "vehicle-crime",
          "location_type": "Force",
          "location": {
            "latitude": "53.479532",
            "street": {
              "id": 726074,
              "name": "On or near Hardman Street"
            },
            "longitude": "-2.250133"
          },
          "context": "",
          "outcome_status": {
            "category": "Investigation complete; no suspect identified",
            "date": "2017-03"
          },
          "persistent_id": "12b29e31fefe7d9c6b5f5fff9de9f9ccde059e0a8fc650caa6b9b1314f385cec",
          "id": 54961484,
          "location_subtype": "",
          "month": "2017-02"
        },
        {
          "category": "violent-crime",
          "location_type": "Force",
          "location": {
            "latitude": "53.479532",
            "street": {
              "id": 726074,
              "name": "On or near Hardman Street"
            },
            "longitude": "-2.250133"
          },
          "context": "",
          "outcome_status": {
            "category": "Offender given community sentence",
            "date": "2017-06"
          },
          "persistent_id": "2cd8b3d4ddc10c6ae1a40fb8d607ce94ab1aad71aa806b18c2d3c20eacb6d952",
          "id": 54945072,
          "location_subtype": "",
          "month": "2017-02"
        }
      ]
    });
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
