import React from 'react'



const Sale = (props) => {
    const renderSaleProducts = props.products.map((product, i) => {
        return product.onSale 
        ? <div key={i} className='sale'>
            {product.onSale}
            <img src={product.images[0].secure_url} onClick = {()=>props.history.push({pathname:`/product/${product.product}`,
                                                                         state: {product}   })}alt="product.category" />
            <h4>{product.product}</h4>
            <p>{product.price}€</p>
          </div>
         : null })

 return <div style={{padding: '28px'}}>
    <h2>Sale</h2>
    <div className='grid3'>{renderSaleProducts}</div>
    </div>

}





export default Sale 