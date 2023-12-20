import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import './AllProducts.css'

function But({children}) {
  return <button className='Buy' >{children}</button>
}

function AllProducts() {

  const [products , SetProducts] = useState([ ]);

  async function getData(){
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data , 'responce data ')
      SetProducts(response.data)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  } , [])


  return (
    <div id='MainDiv'>
      <h1>AllProducts</h1>

    {products.length?
      <div id='ProductsList'>
        {products.map((element)=>(
          <div id='ProductsDiv'>
          <div><img className='imgcenter'  src={element.image} alt="" /></div>
          <div><h5>{element.title}</h5></div>
          <div><strong>{element.price} $ </strong><But>Buy</But></div>
          <div><p>{element.description}</p></div>
          </div>
        ))}
      </div>
      :<div>Loading........</div>}
    </div>
  )
}

export default AllProducts