import React from 'react'

export default function Localstorage() {

const user = {
  username: 'himanshi',
  age: 24,
  city: 'Ranibagh'
};

localStorage.setItem('user', JSON.stringify(user));

  return (

    <div>      
    </div>

  )
}





