import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import ModalBasic from './components/productModal.js'


const Product = (props) => {
    const [qty, setQuantity] = useState(1)
    const [open, setModal] = useState(false)

    const handleQuantity = (action) => {
        return action === '+'
            ? setQuantity(qty + 1)
            : qty > 1 ? setQuantity(qty - 1) : null
    }
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        let index = cart.findIndex(ele => props.location.state.product._id === ele._id)
        index === -1 ? cart.push({
            qty,
            _id: props.location.state.product._id
        })
            : cart[index].qty = qty + cart[index].qty
        localStorage.setItem('cart', JSON.stringify(cart))
        
    }
    const handleClose = () => {
        setModal(false)
    }


    return <div style={{ padding: '28px' }}>
        <h2>Product detail</h2>
        <div className='productDetail' style={stlyes}>
            <div className='detail' style={detailStyles}>
                <img src={props.location.state.product.images[0].secure_url} alt='product detail' style={imgStyles} />
            </div>
            <div className='detailGrid' style={detailGridStyles}>
                <div>
                    <p>{props.location.state.product.product}</p>
                    <p>{props.location.state.product.price}€</p>
                </div>
                <div className='quantityButtons' style={quantityStyle}>
                    <div>
                        <button onClick={() => handleQuantity('-')}>-</button>
                    </div>
                    <div><p>{qty}</p></div>
                    {/* <input type='number' value={qty}></input> */}
                    <div>
                        <button onClick={() => handleQuantity('+')}>+</button>
                    </div>
                </div>
                <div className='addToCartButton'>
                    <ModalBasic addToCart={addToCart}
                        {...props}
                        open={open}
                        handleClose={handleClose} />
                    <Button onClick={() => { setModal(true); addToCart() }}>Add to Cart</Button>











                </div>
            </div>
        </div>
    </div>
}

export default Product

const stlyes = {
    display: 'flex',
    flexDirection: 'row'
}
const detailStyles = {
    width: '50%',
    fontSize: 'x-large'
}
const detailGridStyles = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    alignItems: 'center',
    textAlign: 'center',
    width: '50%',
    padding:'8%'
}

const imgStyles = {
    width: '100%',
    padding: '5em'
}

const quantityStyle = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
}
