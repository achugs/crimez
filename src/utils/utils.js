const dataFormatter = (array) => {
  const tally = array.reduce((acc, curr) => {
    if (acc[curr.category]) acc[curr.category]++;
    else acc[curr.category] = 1;
    return acc;
  }, {})
  const arr = [];
  for (let prop in tally) {
    arr.push({ angle: tally[prop], label: prop })
  }
  console.log(arr)
  return arr;
}

export default dataFormatter;