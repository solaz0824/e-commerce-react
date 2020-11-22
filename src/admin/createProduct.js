import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import Axios from 'axios'
import {url} from '../config.js'
import checkAdmin from './checkAdmin.js'
import widgetStyle from './widgetStyle'

const CreateProduct = (props) => {
    const [categories, setCategories] = useState([])
    const [form, setValues] = useState({})
    const [images, setImages] = useState([])
    
    

    useEffect(() => {
        getCategories()
        const result = async () => {
        const admin = await checkAdmin()
        if(!admin) {
            props.history.push('/')
        }
    }
    result()
    })


    const getCategories = async() => {
        try { 
            const response = await Axios.get(`${url}/category/display`)
            setCategories(response.data.allCategories)
        }
       
        catch(error){
            console.log(error)
        }
    }
   
    const handleChange = e => {
            setValues({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault() 
        if (images.length === 0) return alert('please insert an image')
        
        const copyOfForm = form
        
        copyOfForm.price = Number(copyOfForm.price)
        copyOfForm.stock = Number(copyOfForm.stock)
        copyOfForm.bestSeller = copyOfForm.bestSeller === 'true' 
                                ? copyOfForm.bestSeller = true 
                                : copyOfForm.bestSeller = false 
        copyOfForm.onSale = copyOfForm.onSale === 'true' 
                                ? copyOfForm.onSale = true 
                                : copyOfForm.onSale = false   
        copyOfForm.images =  images                                             

        try {
            await Axios.post(`${url}/products/create`,copyOfForm)
            props.getProducts()   
            setValues({
                     bestSeller: false,
                     category: "",
                     description: "",
                     onSale: false,
                     price: 0,
                     product: "",
                     stock: 0,
                     category_id: "",
                })
                setImages([])
         }
         catch(error) {
           console.log(error)
         }
    }

    const uploadWidget = () => {
        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'di8ic7quk', 
        	upload_preset: 'pgwji7sv', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
                if(error){
					alert('error! try again')
                }else{
                    const temp = images 
                    temp.push({
                        secure_url: result[0].secure_url,
                        public_id: result[0].public_id
                    })
                    setImages(temp)
                }
            });
    }


   




    return <div>
        
        <div style={styles.imgRow}>
     <div style={styles.formLabel}>Image</div> <div> <Button color='purple' size='small' style={{padding:'8%'}} onClick={()=>uploadWidget()}>upload</Button></div>
    
 </div>
        
        
        <form onSubmit={handleSubmit} 
                 onChange={handleChange} style={styles.formContainer}>
        
        <div style={styles.formRow}>
            <div style={styles.formLabel}>Product</div>
            <input style={styles.formInput}
                name='product'
                placeholder='product' />
        </div>

    

        <div style={styles.formRow}>
            <div style={styles.formLabel}>Price</div>
            <input style={styles.formInput}
                name='price'
                type='number'
                placeholder='price' />
        </div>

        <div style={styles.formTextarea}>
            <div style={styles.formLabel}>Description</div>
            <textarea style={{width:'60%', height: '10vh'}}
                name='description'>description</textarea>
        </div>

        <div style={styles.formRow}>
            <div style={styles.formLabel}>Stock</div>
            <input style={styles.formInput}
                name='stock'
                placeholder='stock'
                type='number' />
        </div>
        <div style={styles.formRow}>
            <div style={styles.formLabel}>Best Seller</div>
            <select style={styles.formInput}
                    name='bestSeller'>
                <option value='no select'>select</option>
                <option>true</option>
                <option>false</option>
                </select>
        </div>

        <div style={styles.formRow}>
            <div style={styles.formLabel}>on Sale</div>
            <select
                name='onSale'
                style={styles.formInput} >
                <option value='no select'>select</option>
                <option >true</option>
                <option>false</option>
                </select>
                
        </div>
        <div style={styles.formRow}>
            <div style={styles.formLabel}>Category</div>
            <select style={styles.formInput} name='category_id'>
                <option selected value='no select'>select</option>
                {   
                    categories.map((ele)=>{
                      return  <option value={ele._id}>{ele.category}</option>
                    })
                }
</select>
        </div>
        <div style={{margin:'1% 40%'}}>
            <Button color='blue' size='large' >apply</Button>
            </div>
    </form>
    
 </div>
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
    imgRow:{
        width: '50%',
        height: '50px',
        display: 'flex',
        flexDirection: "row",
        border: '1px dotted grey',
        alignItems: 'center',
        padding: '1em',
        backgroundColor: 'whiteSmoke',
        fontFamily: 'serif',
        margin: '5% 0 0 25% '
    },
    formContainer: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 25% 5% 25%'
    },
    formInput: {
        width: '60%',
        height:'4vh'
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


export default CreateProduct


