import React from 'react';
import {RadialChart} from 'react-vis';

const CrimezChart = () => {
  const myData = [{angle: 2, label: 'dogs'}, {angle: 5, label: 'Alt Label'}, {angle: 3, label: "est"}];
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