import React, { useEffect, useState } from 'react'
import '../App.css'
import checkAdmin from './checkAdmin'
import RemoveModal from '../components/removeModal'

const ProductList = (props) => {
  const [open, setModal] = useState(false)
  const [id,setId] = useState('')
  
  const handleClose = () => {
    setModal(false)
}

  useEffect(()=>{
    const result = async () => {
      const admin = await checkAdmin()
      if(!admin) {
          props.history.push('/')
      }
  }
  result()
  })  
  const products = props.products.map((product, i) => {

    return <div key={i} style={{
      display: 'grid',
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomStyle: 'double',
      padding: '1.5em',
      alignItems: 'center'
    }}>
      <div>
        {product.onSale ? <p className='display' style={{margin: '13px'}}><span className='blinking'>on sale</span></p> : <p className='displayNot'>on sale</p>}
        <img src={product.images[0].secure_url} alt="product.category" />
      </div>
      <div><p>{product._id}</p></div>
      <div> <h4>{product.product}</h4></div>
      <div><p>{product.price}€</p></div>
      <div><p>Stock: {product.stock}</p></div>
      <div className='grid2'>
        <div onClick={() => props.history.push({
          pathname: `/admin/edit/${product._id}`,
          state: { product }
        })}>
          <img src='https://image.flaticon.com/icons/svg/61/61456.svg' alt = 'edit icon'
            style={{ width: '13%' }} />Edit</div>
       <div>
 
       <div onClick={() => { setModal(true);setId(product._id)}}>
        <img src='https://image.flaticon.com/icons/svg/49/49854.svg' 
        alt = 'remove icon' 
        style={{ width: '13%' }} /> Delete 
        </div>
        </div>
        
      
      </div>
    </div>
  })

  return <div className='grid4'>
            {products}
            <RemoveModal 
                     _id={id}
                     open={open}
                     handleClose={handleClose}
                     handleRemove={props.handleRemove}/>
         </div>
}



export default ProductList



