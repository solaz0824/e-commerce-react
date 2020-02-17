import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import Axios from 'axios'
import { url } from './config.js'
import getCart from './helper/getCart.js'



const Cart = (props) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const localCart = JSON.parse(localStorage.getItem('cart'))

    useEffect(() => {
        getCartProducts()
    }, [])
    const getCartProducts = async () => {
        setCart(await getCart(localCart))
    }

    useEffect(() => {
        getTotal()
    }, [])


    useEffect(() => {
        if (localCart !== null) {
            getCartProducts()
        } else {
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }, [])


    const handleQuantity = async (action, index, _id, value) => {
        const local_idIndex = localCart.findIndex(ele => _id === ele._id)
        if (action === '+') {
            localCart[local_idIndex].qty = localCart[local_idIndex].qty + 1
        }
        if (action === '-') {
            if (localCart[local_idIndex].qty > 1) {
                localCart[local_idIndex].qty = localCart[local_idIndex].qty - 1
            }
        }
        if (action === 'input') {
            localCart[local_idIndex].qty = Number(value)

        }
        localStorage.setItem('cart', JSON.stringify(localCart))
        await getCartProducts()
        getTotal()
    }

    const removeAll = () => {
        localStorage.setItem('cart', JSON.stringify([]))
        setCart([])
        setTotal(0)
    }

    const removeProduct = (index) => {
        localCart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(localCart))
        getTotal()
    }
    const getTotal = async () => {

        try {
            const products = await Axios.post(`${url}/products/getCart`, { cart: localCart })
            var temp = 0
            products.data.products.forEach((ele) => {
                localCart.forEach(ele2 => {
                    if (ele._id === ele2._id)
                        temp += ele2.qty * ele.price

                })
            })
            setTotal(temp)
            await getCartProducts()
        }
        catch (error) {
            console.log('error', error)
        }
    }
    return <div style={{ padding: '28px' }}>
        <h1>cart</h1>
        {cart.length < 1
            ? <h2 style={{ textAlign: 'center' }}>Your Cart is Empty</h2>
            : cart.map((ele, index) => {
                return <div key={index} style={cartGrid}>
                    <Button onClick={() => removeProduct(index)} size='small'>Remove</Button>
                    <div><img src={ele.images[0].secure_url} alt='product' style={{ width: '100px' }} /></div>
                    <div><h4>{ele.product}</h4></div>
                    <div><h4>{ele.price}€</h4></div>
                    <div><button onClick={() => handleQuantity('-', index, ele._id)}>-</button>
                        <input onChange={(e) => handleQuantity('input', index, ele._id, e.target.value)} type='number' value={ele.qty} style={{ width: '30%' }}></input>
                        <button onClick={() => handleQuantity('+', index, ele._id)}>+</button></div>

                </div>
            })
        }
        <div style={{ height: '10vh', margin: '3%' }}> <h3 style={{ textAlign: 'end', paddingRight: '2em' }}>TOTAL: {total} €</h3></div>
        <Button onClick={() => removeAll()} negative style={{ marginLeft: '3em' }}>Remove All</Button>
        <div className='buttonGrid' style={buttonGrid}>
            <div><Button color='olive' style={{ width: '200px' }} onClick={() => props.history.push({ pathname: '/' })}>Continue Shopping</Button></div>
            <div>{cart.length > 0
                ? <Button positive style={{ width: '200px' }} onClick={() => props.history.push({
                    pathname: '/billing',
                    state: {
                        total
                    }
                })}>NEXT</Button>
                : null
            }</div>
        </div>
    </div>
}


export default Cart

const cartGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 2fr 2fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    paddingTop: '2em'

}
const buttonGrid = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2em'
}