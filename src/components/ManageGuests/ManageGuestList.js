import React from 'react';

const GuestList = (props) => {
  return(
    <div key={props.guestKey}>
      <p>{props.name}</p>
      <p>{props.lastname}</p>
      <p>{props.address}</p>
      <p>{props.email}</p>
      <p>{props.city}</p>
    </div>
  )
}

export default GuestList;