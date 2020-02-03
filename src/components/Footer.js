import React from 'react'
import { NavLink } from 'react-router-dom'



const Footer = () => {
    return <div style={footerStyle}>
        <div style={footerText}>
            Subscribe now and get 10% discount</div>
        <div>
            <div>
                <input type="email" placeholder="Enter email" style={{ width: '20em', height: '3.5vh', fontSize: 'large' }} />
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <button style={{ height: '3.5vh', fontFamily: 'Mansalva'}}>submit</button>
            </div>
        </div>
        <div style={footerText}>
            <div style={footerComponents}>
                <ul>
                    <h4>Services</h4>
                    <li> <NavLink
                        exact
                        style={styles.default}
                        activeStyle={styles.active}
                        to={'/contactus'} >
                        Contact us
        </NavLink></li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <h4>Legal</h4>
                    <li>Legal statement</li>
                    <li>Private policy</li>

                </ul>
                <ul>
                    <h4>Infomation</h4>
                    <li>Payment methods</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
        </div>
    </div>
}

const footerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'whitesmoke',
    height: '50vh',
    alignItems: 'center',
    fontFamily: 'Mansalva'
}

const footerText = {
    width: '50%',
    textAlign: 'center',
    padding: '2em'

}

const footerComponents = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export default Footer



const styles = {
    active: {
        color: "gray"
    },
    default: {
        textDecoration: "none",
        color: "whitesmoke"
    }

}
