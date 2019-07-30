import React from 'react';
import { RadialChart } from 'react-vis';
import dataFormatter from '../utils/utils';
import '../App.css';


const CrimezChart = (props) => {
  const myData = dataFormatter(props.data);
  return (
    <div >
      <RadialChart
        data={myData}
        width={400}
        height={400}
        showLabels={true}
        colorDomain={[0, 1, 2, 3]}
        colorRange={["#e6e6fa", "#e0ffff", "#FFFF40", "#FFb6c1"]}
        style={{mark:{stroke: 'black'}}}
      />
    </div>
  );
};

export default CrimezChart;