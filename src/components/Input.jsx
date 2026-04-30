import React from 'react'

export default function Input(props) {
  return (

    <>
      <label><h6>{props.label}</h6></label>&nbsp;
      <input type='text' placeholder='enter username' required='required' value={props.name}
      onChange={(e) => props.setName(e.target.value)}/>
      <p></p>
    </>

  )
}
