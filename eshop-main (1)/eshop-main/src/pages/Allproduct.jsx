import React from 'react'
import { useProductContext } from '../context/ProductContext';

const Allproduct = () => {

    const { isLoading, products } = useProductContext();

    console.log(products);

    if(isLoading){
      return <div className='loading'>Loading...</div>
    }

   return(
    <>
    <h2>All Products</h2>
    </>
  )
}

export default Allproduct
