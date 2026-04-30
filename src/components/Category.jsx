import React from 'react'

export default function Category({finalcategory, setSelectedCategory}) {
  

  let cat = finalcategory.map((item,i)=>{
   return(
     <li onClick={() => setSelectedCategory(item)} key={i} className='pb-2'>{item}</li>
   )
});

  return (
    <div className='text-[18px]'>
        <ul>
             {cat}
        </ul>
    </div>
  )
}
