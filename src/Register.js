import React, {useState, useEffect} from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {url} from './config.js'
import Axios from 'axios';




const Register = (props) => {
    const [form, setValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password: '',
        password2: ''
    }) 
    useEffect(()=>{
      const token = JSON.parse(localStorage.getItem('token'))
   if(token !== null) { props.history.push('/')}
  })
  
    const handleChange = e => setValues({...form,[e.target.name]:e.target.value })
    const handleSubmit = async(e) => {
        e.preventDefault()
       try {
          const response = await Axios.post(`${url}/users/register`,{
            email: form.email,
            password: form.password,
            password2: form.password2,
            firstName: form.firstName,
            lastName: form.lastName
          })
          if(!response.data.ok) {
            alert(response.data.message)
          }
          else {
            alert(response.data.message)
            props.history.push('/login')
          }
       }
       catch(error) {
         console.log(error)
       }
    }

    return <div>
    <Grid style={{width:'50%', margin: '5% 25%'}}>
      <Grid.Column >
        <Header color='black' textAlign='center'>
         <h2>Create your account </h2>
         <h6>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</h6>
        </Header>
        <Form size='large' onSubmit={handleSubmit}
                          onChange={handleChange}>
          <Segment stacked>
            <Form.Input name='firstName' placeholder='First name'/>
            <Form.Input name='lastName' placeholder='Last name'/>
            <Form.Input name='email' fluid icon='user' iconPosition='left' placeholder='Email address'/>
            <Form.Input
              name='password'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={handleChange}
            />
            <Form.Input
              name='password2'
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              onChange={handleChange}
            />
            <Button color='black' fluid size='large' style={{fontFamily: 'Mansalva'}}>
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    </div>
}


export default Register

