import React from 'react'
import { Step, Segment, Header, Divider, Grid, Button } from 'semantic-ui-react'


const steps = [
    {
      key: 'Billing',
      icon: 'edit',
      title: 'Billing',
      description: 'Fill your billing infomation',
    },
    {
      key: 'Payment',
      icon: 'payment',
      title: 'Payment',
      description: 'Enter Payment information',
    },
    { key: 'confirm', 
      icon: 'info', 
      title: 'Confirm Order',
      active: true, 
      description: 'Check your order details'
    }
  ]
const ConfirmOrder = (props) => {
    
    const order = props.location.state.data
    return <div style={style}>
     <Step.Group items={steps} />
     <Segment style={{width: '50%', margin:'5% 25%'}}>
    <Header as='h2' floated='right'>
    Your Order Details
    </Header>

    <Divider clearing />
   <div style={{marginBottom:'3em'}}><h3>Thank you! {order.name}</h3>
            <h3> Your order number: {order._id} </h3>
            <h4> Email: {order.email}</h4></div> 
            { order.cart.map((ele) => {
                 return <Grid>
                 <Grid.Column width={7}>
                 <img src = {ele.images[0].secure_url} alt={ele.product} className='orderImg'/> 
                 </Grid.Column> 
                 <Grid.Column width={5} textAlign='end'>
                 <div style={{marginLeft:'5%'}}><h3>{ele.product}</h3> 
                <h4>Price: {ele.price}€</h4> 
                <h4>Quantity: {ele.qty}</h4> 
                </div>
                </Grid.Column>
                </Grid>
                })
            };
           
            <h3 style={{textAlign:'end'}}>Total:{order.total}€</h3>

            <Button style={{margin:'0 45%'}} size='medium' onClick={()=>props.history.push({pathname:'/'})}>OK</Button>
  </Segment>
  
           

       
    </div>
}


export default ConfirmOrder 


const style = {
    padding: '2em',
    height: '100%',
    fontFamily:'Cutive Mono'
}