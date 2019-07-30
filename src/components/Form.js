import React from 'react';
import '../App.css';

const Form = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.fetchData}>
      <label>
        <input type="month" onChange={props.updateDate} required />
        <button type='submit'>Submit</button>
      </label>
    </form>
  );
}

export default Form;
