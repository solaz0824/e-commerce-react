import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import {url} from './config.js'
import { Tab } from 'semantic-ui-react'




const UserPage = (props) => {
    console.log(props,'userpage props')
    const [ profile, setProfile ] = useState({
      email: '',
      name:'',
      lastName:'',
      _id:''
    })

    const panes = [
        { menuItem: 'Profile', render: () => <Tab.Pane>
          
           <h3>{profile.name} {profile.lastName}</h3> 
           <h3>{profile.email}</h3>
          
          
          </Tab.Pane> },
        { menuItem: 'Order History', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      ]
      
    const token = JSON.parse(localStorage.getItem('token'))
     useEffect(()=>{
      const verify_token = async() => {
        try {
          const response = await Axios.post(`${url}/users/verify_token`, {token})
          console.log(response, '----------------->response')
          const orders = await Axios.get(`${url}/orders/displaybyusers/${response.data.email}`)
          console.log(orders, 'orders')
          
          return response.data.ok 
        ? setProfile({
          email: response.data.email,
          name:response.data.name,
          lastName: response.data.lastName,
          _id: response.data._id
        })
        : props.history.push('/')
        }
        catch(error) {
            console.log(error)
        }
    } 
            verify_token()
     },[props.history,token])

     return  <div style={userpage}> <h1>This is the user page</h1> 
      <Tab style={tabstyle}menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
     </div>
 }


 export default UserPage

 const userpage = {
   height: '300px',
   padding: '28px'
 }

 const tabstyle ={
   width: '50%',
   margin: '5% 25%'
 }