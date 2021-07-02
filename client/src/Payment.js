import React from 'react'
import { Step, Button } from 'semantic-ui-react'
import Checkout from './Checkout'

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
    active: true,
    icon: 'payment',
    title: 'Payment',
    description: 'Enter Payment information',
  },
  { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
]


const Payment = (props) => {
  return <div style={{ padding: '28px' }} >
    <Step.Group items={steps} />
    <div className='groupingPayment' style={{ margin: '0 30% 0 30%' }}>
      <h1 style={{ padding: '0' }}>Payment</h1>
      {/* <Tab menu={{ attached: false }} panes={panes} style={{width: '40%'}}/> */}
      <div style={{ padding: '10%', border:'dotted lightGrey' }}>
        <h3>{`${props.location.state.street},  ${props.location.state.house}, ${props.location.state.entrance}`} </h3>
        <h3>{`${props.location.state.city}, ${props.location.state.postalCode}`}</h3>
        <h3>{`+${props.location.state.countryCode} ${props.location.state.phoneNumber}`} </h3>
        <h3>{`${props.location.state.name}, ${props.location.state.lastName}`} </h3>
        <h3 style={{textAlign:'end'}}>Total: {props.location.state.total}€</h3></div>
      <div style={{textAlign:'end', marginTop:'5%'}}>
        <Checkout label={'pay with your credit card'}
          description={''}
          name={`${props.location.state.name} ${props.location.state.lastName}`}
          amount={props.location.state.total}
          billingData={props.location.state}
          {...props}
        />
      </div>
    </div>
    <Button type="cancel" color='red' size='medium' onClick={() => props.history.push('/cart')}>
      Go back to your cart
                </Button>

  </div>
}


export default Payment