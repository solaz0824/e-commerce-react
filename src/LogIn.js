import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import Axios from 'axios'
import {url} from './config.js'


const LogIn = (props) => {
    const [form, setValues] = useState({
        email: '',
        password: ''
    })
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('token'))
     if(token !== null) { props.history.push('/')}
    })
    const handleChange = e => 
                            setValues({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await Axios.post(`${url}/users/login`, {
                email: form.email, password: form.password
            })
            if(!response.data.ok) {
                alert(response.data.message)
            }
            else {
                localStorage.setItem('token', JSON.stringify(response.data.token))
                props.checkUser()
                alert(response.data.message)
                props.history.push('/')
            }
            
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <div style={{ padding: '28px', textAlign: 'center', width: '50%' }}><h2>Log In </h2>
            <div className='LogIn' style={LogInStyle}>
                <div>
                    <Grid textAlign='center' style={{ height: '40vh', width: '100%'}} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header color='black' textAlign='center'>
                                <h2>Log-in to your account</h2>
            </Header>
                            <Form size='large' onSubmit={handleSubmit}
                                            onChange={handleChange}>
                                <Segment stacked>
                                    <Form.Input name='email'
                                                required 
                                                fluid icon='user' 
                                                iconPosition='left' 
                                                placeholder='E-mail address' 
                                                onChange={handleChange} />
                                    <Form.Input
                                        name='password'
                                        fluid
                                        required
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        onChange={handleChange}
                                    />
                                    <Button style={{marginBottom:'5%'}} color='black' fluid size='large'>
                                        Login
                </Button>
                <h6 style={{marginBottom:'5%'}} textDecoration = 'underline'>Forgot your password?</h6> 
                <Button color='blue' fluid size='large' onClick={()=>props.history.push('/register')}>
                                       Register
                </Button>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid></div>
            </div>
        </div>
    )
}

export default LogIn

const LogInStyle = {
    width:'100%',
    margin:'0 50% 10% 50%',
    justifyContent: 'baseline'
}

