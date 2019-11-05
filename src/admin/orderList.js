import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {url} from '../config.js'
import checkAdmin from './checkAdmin'


const OrderList = (props) => {
    useEffect(()=>{
        const result = async () => {
            const admin = await checkAdmin()
            if(!admin) {
                props.history.push('/')
            }
        }
        result()
        findOrders()
    })
    const [orders, setOrders] = useState([])
    const findOrders = async() =>{
        try {
           const response = await Axios.get(`${url}/orders/display`)
            setOrders(response.data.display)
        }
        catch(error){
            console.log(error)
        }
    } 

return <div>
        { 
            orders.map((ele, i)=><div>{ele._id}</div>
            )
        
        }
</div> 

}

export default OrderList