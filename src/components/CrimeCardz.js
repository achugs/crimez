import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';
import * as proj from 'ol/proj';

const CrimeCardz = ({ data }) => {
  const mapArray = data.map(crime => {
    return new Map({
      target: 'map',
      view: new View({
        center: proj.fromLonLat([crime.location.latitude, crime.location.longitude]),
        zoom: 2
      })
    });
  })
  console.log(mapArray)
  return (
    <section>
      {data.map(({ category, location: { street }, outcome_status, id }, i) => {
        return (
          <article key={id}>
            <div>{mapArray}</div>
            <ul>
              <li>crime type: {category ? category : "unknown"}</li>
              <li>location: {street.name ? street.name : "unknown"}</li>
              <li>outcome status: {outcome_status ? outcome_status.category : "unknown"}</li>
            </ul>
          </article>
        )
      })}
    </section>
  )
};

export default CrimeCardz;