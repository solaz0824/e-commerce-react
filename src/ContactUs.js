import React, {useState} from 'react'
import { Button, Form, Grid, Header, Segment, TextArea } from 'semantic-ui-react'
import Axios from 'axios'
import {url} from './config'

const ContactUs = () => {

const [form, setValues] =  useState({
    firstName: '',
    lastName: '',
    email: '',
    subject:'',
    content:''
})

const handleChange = e => setValues({ ...form, [e.target.name]: e.target.value })


const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await Axios.post(`${url}/email/contact`, form)
    }
    catch(error) {
        console.log(error)
    }
}

return <div>
    <Grid style={{width:'50%', margin: '5% 25%'}}>
      <Grid.Column >
        <Header color='black' textAlign='center'>
         <h3>Contact us</h3>
        
        </Header>
        <Form size='large' onChange={handleChange} onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input name='firstName' placeholder='First name' onChange={handleChange} required/>
            <Form.Input name='lastName' placeholder='Last name' onChange={handleChange} required/>
            <Form.Input name='email' fluid icon='user' iconPosition='left' placeholder='Email address' onChange={handleChange} required/>
            <Form.Input name='subject' placeholder='subject' onChange={handleChange}/>
            <TextArea name='content' style={{height:'200px', marginBottom:'2%'}} onChange={handleChange} required></TextArea>
            <Button color='black' fluid size='large'>
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    </div>
}


export default ContactUs



