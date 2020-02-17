import React from 'react';
import Axios from 'axios';
import {url} from './config.js';
import getCart from './helper/getCart.js';

import StripeCheckout from 'react-stripe-checkout';


const STRIPE_PUBLISHABLE = 'pk_test_0BDH13KlH5DPRTbJ4hMvPMXA00Cjqy8pli';

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const Checkout = ({ history,name, description, amount, label, billingData }) => {

const successPayment = async (data) => {
    try {
         await getCart(sendingCart)
       const order =  await Axios.post(`${url}/orders/create`,
            {
                userData: sendingData,
                cart: await getCart(sendingCart),
                total: sendingTotal
               
            })
         localStorage.removeItem('cart')   
         history.push({pathname:'/confirmorder',
                       state:  {data: order.data}    
                        })   
    }
    catch (error) {
        console.log(error, 'error')
    }
    alert('Payment Succesful');
};

const errorPayment = data => {
    alert('Payment Error');
};

const onToken = (amount, description, billingData) => token =>
    Axios.post(`${url}/payment`,
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromEuroToCent(amount)
        })
        .then(successPayment)
        .catch(errorPayment);

var sendingData
var sendingTotal
var sendingCart


    sendingData = billingData
    sendingTotal = amount
    sendingCart = JSON.parse(localStorage.getItem('cart'))
    return <StripeCheckout
        name={name}
        description={description}
        amount={fromEuroToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
        label={label}
    />
}
export default Checkout;