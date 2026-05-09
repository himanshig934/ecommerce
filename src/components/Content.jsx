import React, { useContext, useEffect, useState } from 'react'
import Box from './Box';
import axios from 'axios';
import Input from './Input';
import Timer from './Timer';
import { counterContext } from '../context/CounterContext';

export default function Content() {

// const[count, setCount] = useState(0); 

const {count, setCount } = useContext(counterContext);

// function btnhandle(){
//     setCount(count+1);
// }

// function decbtn(){

//     if(count != 0){
//         setCount(count - 1);
//     }else{
//         console.log('error');
//     }

// }

// user api
const [user, setUsers] = useState([]);

useEffect(() => {

   const userapi = 'https://dummyjson.com/users';
   const newapi = async() => {

    try {
        
        let data = await fetch(userapi);
        let res = await data.json();
        setUsers(res.users);

    } catch (error) {
        console.log('error');
        
    }
   };

   newapi();

}, []);


const [name, setName] = useState('');


function clickcountbtn(){
  setCount(count+1);
}

function resetbutton(){
  setCount(0);
}


  return (
    <>

    {/* <div className='max-w-7xl justify-center m-auto mt-10 py-2'>
        <p>count : {count}</p>
        <button className='bg-red-700 text-white px-8 py-2 rounded-[4px]' onClick={btnhandle}>Increase button</button>
        <button className='bg-green-700 text-white px-8 py-2 rounded-[4px]' onClick={decbtn}>Decrease button</button>
    </div> */}


    {/* card component */}
    {/* <div className='max-w-7xl gap-4 justify-center m-auto mt-4 grid grid-cols-4 text-center !pb-[50px]'>
      {user.map((item, i) => (
        <Box key={i} item={item} />
      ))}
    </div> */}
   

   {/* input field */}

   <div className='max-w-7xl justify-center m-auto pt-4 pb-8'>
     <Input label ='Username1' name={name}  setName={setName} />
     <Input label ='Username2' name={name}  setName={setName} />
   </div>


    {/* Timer component  */}
    <Timer/>

    {/* counter buttom */}

    
   <div className='flex justify-center'>
    <button className='bg-pink-800 px-4 py-2 text-white mr-4' onClick={clickcountbtn} >Counter button</button>
    <button className='bg-red-600 px-4 py-2 text-white' onClick={resetbutton} >Reset</button>
   </div>

    </>
  )
}




