// write product card here
import React from 'react'
import Button from './button';

const productcard = () => {

    const productImage = "https://freightershop.in/cdn/shop/files/25.webp?v=1720604921&width=1445";
    const productName = "Breathing Teddy";
    const productPrice = "$11" ;
  return (
    <div className='productcard'>
        <img src={productImage} alt="Image" />
        <p>{productName}</p>
        <p>{productPrice}</p>
        <Button/>
      
    </div>
  )
}

export default productcard

