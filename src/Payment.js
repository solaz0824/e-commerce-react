import React from 'react'
import { Tab, Step, Button } from 'semantic-ui-react'
import Checkout from './Checkout'

const steps = [
  {
    key: 'Billing',
    icon: 'edit',
    active: true,
    title: 'Billing',
    description: 'Fill your billing infomation',
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
const panes = [
    { menuItem: 'Credit Card', render: () => <Tab.Pane attached={false}>
   
   </Tab.Pane> },
    { menuItem: 'Bank Transfer', render: () => <Tab.Pane attached={false}>Your bank account</Tab.Pane> },
    { menuItem: 'PayPal', render: () => <Tab.Pane attached={false}>PayPal account</Tab.Pane> },
  ]

const Payment = (props) => {
    return <div style={{padding: '28px'}} >
    <Step.Group items={steps} />
    <div className='groupingPayment'style={{margin: '0 30% 0 30%', width: '90%'}}>
    <h1 style={{padding:'0'}}>Payment</h1>
    <Tab menu={{ attached: false }} panes={panes} style={{width: '40%'}}/>
    <div>Total: {props.location.state.total}€</div>
    <Checkout label={'pay'}
              description={''}
              name={`${props.location.state.name} ${props.location.state.lastName}`}
              amount={props.location.state.total}
              billingData={props.location.state}
              {...props}
    />
    </div>
    <Button type="cancel" color='red' size='medium' onClick={()=>props.history.push('/cart')}>
                Go back to your cart
                </Button>
                
    </div>
}


export default Payment