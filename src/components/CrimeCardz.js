import React from 'react';
import '../App.css';

const CrimeCardz = ({ data }) => {
  return (
    <section>
      {data.map(({ category, location: { street }, outcome_status, id }, i) => {
        return (
          <article key={id} >
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