import React from 'react'

function Person(props) {
  return (
    <div>
      <p>{props.name} </p>
      <p>last name : smith</p>
      <p>age : 30</p>
    </div>
  );
}

export default Person
