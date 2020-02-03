import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import Axios from 'axios'
import { url } from '../config.js'
import checkAdmin from './checkAdmin'


const EditingProducts = (props) => {
    const [form, setValues] = useState({
        bestSeller: false,
        description: 'mnnnnn',
        image: '',
        onSale: false,
        price: 0,
        product: '',
        stock: 0
    })

    useEffect(() => {
        const result = async () => {
            const admin = await checkAdmin()
            if (!admin) {
                props.history.push('/')
            }
        }
        result()
        setValues({
            bestSeller: props.location.state.product.bestSeller,
            description: props.location.state.product.description,
            onSale: props.location.state.product.onSale,
            price: props.location.state.product.price,
            product: props.location.state.product.product,
            stock: props.location.state.product.stock
        })
    }, [ props.location.state.product.bestSeller, 
        props.location.state.product.description, 
        props.location.state.product.onSale, 
        props.location.state.product.price, 
        props.location.state.product.product, 
        props.location.state.product.stock, 
        props.history ])

    const handleChange = e => {
        setValues({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await Axios.post(`${url}/products/update`, {
                _id: props.location.state.product._id, form
            })
            if (response.data.ok === true) {
                props.getProducts()
                props.history.push('/admin/productlist')
                alert(response.data.message)
            }
        }
        catch (error) {
            console.log(error)
        }
        // props.handleUpdates(props.location.state.product._id, form)
    }
    return <form onSubmit={handleSubmit}
        onChange={handleChange} style={styles.formContainer}>

        <div style={styles.formRow}>
            <div style={styles.formLabel}>Product : {form.product}</div>
            <input style={styles.formInput}
                name='product'
                placeholder={form.product} />
        </div>



        <div style={styles.formRow}>
            <div style={styles.formLabel}>Price : {form.price}</div>
            <input style={styles.formInput}
                name='price'
                placeholder={form.price} />
        </div>

        <div style={styles.formTextarea}>
            <div style={styles.formLabel}>Description : {form.description.substring(0, 10)}</div>
            <textarea style={{ width: '60%', height: '10vh' }}
                name='description' value="">{form.description}</textarea>
        </div>

        <div style={styles.formRow}>
            <div style={styles.formLabel}>Stock : {form.stock}</div>
            <input style={styles.formInput}
                name='stock'
                placeholder={form.stock} />
        </div>
        <div style={styles.formRow}>
            <div style={styles.formLabel}>Best Seller : {form.bestSeller.toString()}</div>
            <input style={styles.formInput}
                name='bestSeller'
                placeholder={form.bestSeller.toString()} />
        </div>
        <div style={styles.formRow}>
            <div style={styles.formLabel}>on Sale : {form.onSale.toString()}</div>
            <input style={styles.formInput}
                name='onSale'
                placeholder={form.onSale.toString()} />
        </div>
        <div style={{ margin: '1% 40%' }}>
            <Button color='blue' size='large' >apply</Button>
        </div>
    </form>
}

const styles = {
    formRow: {
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: "row",
        border: '1px dotted grey',
        alignItems: 'center',
        padding: '1em',
        backgroundColor: 'whiteSmoke',
        fontFamily: 'serif'
    },
    formContainer: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '5% 25%'
    },
    formInput: {
        width: '60%',
        height: '4vh'
    },
    formLabel: {
        width: '40%',
        color: 'black',
    },
    formTextarea: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        border: '1px dotted grey',
        padding: '1em',
        backgroundColor: 'whiteSmoke',
        fontFamily: 'serif'
    }
}


export default EditingProducts





// bestSeller: true
// description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?""
// image: "https://semantic-ui.com/images/wireframe/image.png"
// onSale: false
// price: 20
// product: "product 123456"
// stock: 30
