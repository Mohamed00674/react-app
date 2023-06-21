import React from 'react'

function Person(props) {
  return (
    <div>
      <p> name : {props.name} </p>
          <p> lastName :  { props.lastname}</p>
          <p> age : { props.age}</p>
    </div>
  );
}

export default Person
