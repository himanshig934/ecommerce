import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import ProductsItems from '../components/ProductsItems'
import axios from 'axios';


export default function Home() {
  
        // Category Api............................
        const [finalcategory, setFinalCategory] = useState([]);
    
        let getcategory = () => {
            axios.get('https://dummyjson.com/products/category-list')
            .then((res) => res.data)
            .then((finares) => {
            setFinalCategory(finares);
            })
        }
        
        useEffect(() => {
            getcategory();
            
        }, [])



        // product Api.............................
        
        const [Finalproduct, setfinalproduct] = useState([]);
        
        useEffect(() => {
          
        let productitem = () => {
        
        axios.get('https://dummyjson.com/products')
        .then((res) => res.data)
        .then((finalres) => {
          setfinalproduct(finalres.products);
        })
        
        }
                
        productitem();

        }, [])


        // showing categories products....................
        
        const [selectedCategory, setSelectedCategory] = useState('');

          useEffect(() => {
           if (selectedCategory !== '') {
            axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
            .then((res) => res.data)
            .then((finalres) => {
            setfinalproduct(finalres.products);
        })
            
        }
           }, [selectedCategory]);
        


  return (
    <>
        
        <div className="container h-[100vh] py-10">
         <div className="container max-w-[1450px] justify-center m-auto">


           {/* Product heading */}
            <div className="product-heading px-4 py-2">
                <h2 className='text-[22px] font-[500]'>Our Products</h2>
            </div>
          <div className="grid lg:grid-cols-[1fr_3fr] gap-2">
            
            {/* left sidebar */}
           <div className="box1 px-2 py-4 h-[50vh]">

            <div className="heading bg-orange-600 text-white py-2 px-4">
                <h2 className='text-[20px] font-[500]'>Product Category</h2>
            </div>

            <div className="category px-6 bg-[#eeeeee] py-6 cursor-pointer">
            
               <Category finalcategory={finalcategory} setSelectedCategory={setSelectedCategory}/>
            </div>
           </div>


           {/* Right Sidebar */}
           <div className="box1 px-2 py-4">

            <div className="products px-2 grid lg:grid-cols-3 gap-4">
               <ProductsItems Finalproduct={Finalproduct} />               
            </div>

           </div>

          </div>
         </div>
        </div>
      
    </>
  )
}
