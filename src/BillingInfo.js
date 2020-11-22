import React, { useState } from 'react'
import { Step, Button } from 'semantic-ui-react'


const steps = [
    {
        key: 'Billing',
        icon: 'edit',
        active: true,
        title: 'Billing',
        description: 'Fill your billing information',
    },
    {
        key: 'Payment',
        icon: 'payment',
        title: 'Payment',
        description: 'Enter Payment information',
    },
    { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
]

const Billing = (props) => {
    const [form, setValues] = useState({
        name: 'mario',
        lastName: 'rossi',
        email: 'eunyoungk0824@gmail.com',
        city: 'barcelona',
        street: 'una',
        house: '12',
        entrance: '2',
        postalCode: '23456',
        countryCode: '736353',
        phoneNumber: '3837373',
        note: 'uhuhuuuh'
    })
    const handleChange = (e) => setValues({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push({
            pathname: "/payment",
            state: {
                name: form.name,
                lastName: form.lastName,
                email: form.email,
                city: form.city,
                street: form.street,
                house: form.house,
                entrance: form.entrance,
                postalCode: form.postalCode,
                countryCode: form.countryCode,
                phoneNumber: form.phoneNumber,
                note: form.note,
                total: props.location.state.total
            }
        })

    }

    return <div style={main}>
        <Step.Group items={steps} />

        <form className='billing' onSubmit={handleSubmit} style={formStyle}>

            <h1 style={{ padding: 0 }}>Billing information</h1>
            <div style={flexStyle}>
                <div style={inFlex}>
            <div style={flexStyle}>
                <div style={{ width: '45%' }}>
                    <p >Name</p>
                    <input name='name' onChange={handleChange} className='billingInfo' style={{ width: '95%' }} placeholder='Name'></input>
                </div>
                <div style={{ width: '45%' }}>
                    <p>Last name</p>
                    <input name='lastName' onChange={handleChange} className='billingInfo' style={{ width: '100%' }} placeholder='Last name'></input>
                </div>
            </div>
            <p>Email</p>
            <input name='email' onChange={handleChange} className='billingInfo' style={{ width: '90%' }} placeholder='Email address'></input>
            <p>City</p>
            <input name='city' onChange={handleChange} className='billingInfo' style={{ width: '90%' }} placeholder='City'></input>
            <p>Street</p>
            <input name='street' onChange={handleChange} className='billingInfo' style={{ width: '90%' }} placeholder='Street'></input>
            </div>
            <div style={inFlex}>
            <div style={flexStyle}>
                <div style={{ width: '45%' }}>
                    <p>House</p>
                    <input name='house' onChange={handleChange} className='billingInfo' style={{ width: '95%' }} placeholder='House'></input>
                </div>
                <div style={{ width: '45%' }}>
                    <p>Entrance</p>
                    <input name='entrance' onChange={handleChange} className='billingInfo' style={{ width: '100%' }} placeholder='Entrance'></input>
                </div>

            </div>
            <div style={flexStyle}>
                <div style={{ width: '30%' }}>
                    <p>Postal Code</p>
                    <input name='postalCode' onChange={handleChange} className='billingInfo' placeholder='Postal Code'></input>
                </div>
                <div style={{ width: '60%' }}>
                    <p>Phone Number</p>
                    <div style={flexStyle}>
                        <input name='countryCode' onChange={handleChange} className='billingInfo' style={{ width: '20%' }} placeholder='+'></input>
                        <input name='phoneNumber' onChange={handleChange} className='billingInfo' placeholder='Phone Number' style={{ width: '100%' }}></input>
                    </div>
                </div>
            </div>

            <p>Note</p>
            <textarea style={{height:'33%'}} name='note' onChange={handleChange} placeholder='Note'></textarea>
            <div>
                <div style={{ fontSize: '20px', padding: '5% 11%', textAlign:'end' }}>Total: {props.location.state.total} €</div>
                
               
            </div>
            </div>
            </div> 
            <Button color='teal' style={{ width: "30%", margin: '2% 30%' }}>Go to pay</Button>
        </form>
    </div>
}


export default Billing

const main = {
    padding: '28px',

}

const formStyle = {
    width: '100%',
    margin: '0 10%',
    display: 'flex',
    flexDirection: 'column',
}

const flexStyle = {
    display: 'flex',
    flexDirection: 'row',
}

const inFlex = {
    width: '45%'
}
