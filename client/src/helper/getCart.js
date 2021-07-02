import Axios from 'axios'
import {url} from '../config.js'


const getCart = async(localCart) => {
try {

    const products =  await Axios.post(`${url}/products/getCart`, {
        cart: localCart
    }) 
   localCart.forEach((ele) => { 
      const index = products.data.products.findIndex(ele2 => ele2._id === ele._id) 
      products.data.products[index].qty = ele.qty
      
     }) 
     return products.data.products
}
catch(error) {
    console.log(error)
}

}

 export default getCart