import React from 'react';
import { RadialChart } from 'react-vis';
import dataFormatter from '../utils/utils';


const CrimezChart = (props) => {
  const myData = dataFormatter(props.data);
  return (
    <div>
      <RadialChart
        data={myData}
        width={400}
        height={400}
        showLabels={true}
      />
    </div>
  );
};

export default CrimezChart;