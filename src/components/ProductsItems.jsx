import axios from 'axios';

export default function ProductsItems({Finalproduct}) {


return (
<>

{Finalproduct.map((item,i)=>{

return(

<div key={i} className="product-card cursor-pointer">

<div className="shadow-lg">

<img src={item.thumbnail} alt=""/>

<div className="details py-6 px-4 mt-2 mb-6">
<span className='bg-green-600 text-white px-6 py-[2px] text-[12px] rounded-[4px]'>{item.category}</span>
<h1 className="text-[18px] mt-2">{item.title}</h1>
<p>{item.price}</p>

<button className="bg-orange-600 px-4 py-2 text-white rounded-[4px] mt-4">
Add to Cart
</button>

</div>

</div>

</div>

)

})}

</>

)

}
