import Axios from 'axios'
import {url} from '../config'


const CheckAdmin = async() => {
    try{
     const token = JSON.parse(localStorage.getItem('token'))
     const response = await Axios.post(`${url}/users/verify_token`,{token})
     return response.data.admin
    }
    catch(error) {
        console.log(error)
    }
}



export default CheckAdmin



