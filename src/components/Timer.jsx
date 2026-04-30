import React, { useEffect, useState } from 'react'

export default function Timer() {

    
  const[seconds, SetSeconds] = useState(0);

  
useEffect(() => {
  const interval = setInterval(() => {
    SetSeconds(prevSeconds => prevSeconds + 1);
  }, 1000);

  return () => clearInterval(interval);

}, []);

  return (
    <div className='max-w-7xl justify-center m-auto pt-4 pb-8'>
      Seconds : {seconds}
    </div>
  )
}
