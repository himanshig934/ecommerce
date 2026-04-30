import React, { useEffect, useRef, useState } from 'react'

export default function Questions() {

  const [change, setChange] = useState('Hello');

  let changehandler = () => {
    if(change === 'Hello'){
       setChange('Welcome to React');
    }else{
        setChange('Hello');
    }
  }


  //   

  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  function submithandle(e){
    e.preventDefault();
    setSubmitted(text); 
    setText(""); 
  }

//   

const [mssg, setMssg] = useState('no message');

function btnchange(mssg){
setMssg(mssg);
}


useEffect(() => {
    console.log('component loading');
}, []);


// 

const [count, setCount] = useState(0);


let incount = ()=>{
    if(count != 10){
        setCount(count + 1); 
    }
}

let decrcount = () => {
    if(count > 0){
    setCount(count - 1);
    }
}


  return (

    // question 1
    <div>
      <div className="container max-w-7xl justify-center m-auto py-10">
      <div className="container max-w-5xl m-auto py-4">
         
       <p>{change}</p>
       <button className='bg-purple-800 px-8 py-2 rounded-[4px] text-white' onClick={changehandler}>Change Text</button>
       
       {/* question 2  */}

         <div className="container mt-4"> 
        <form action="" onSubmit={submithandle}>
        <input type="text" placeholder='name' id='username' value={text} onChange={(e)=>setText(e.target.value)} />
        <button className='bg-pink-800 px-8 py-2 rounded-[4px] text-white'>submit</button>

        <div className="box">
        {submitted}
        </div>

        </form>
         </div>

         {/* question 3 */}
        
        <div className='mt-10'>
        <p>{mssg}</p>
        <button className='bg-pink-800 px-8 py-2 rounded-[4px] text-white' onClick={()=>btnchange('hello from parent')}>submit</button><br></br>
        </div>
        
        {/* QUestion 3 */}
        <p className='mt-8'>count : {count}</p>
        <button className='bg-orange-800 px-8 py-2 rounded-[4px] text-white mr-2' onClick={incount}>Increase + </button>
        <button className='bg-green-800 px-8 py-2 rounded-[4px] text-white' onClick={decrcount}>Decrease -</button>


      </div>
      </div>
    </div>
  )
}
