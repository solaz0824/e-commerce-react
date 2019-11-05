import React , {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {url} from './config.js'

//========= COMPONENTS ===========
import Home from './Home'
import Product from './Product'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './Cart'
import LogIn from './LogIn'
import Register from './Register'
import UserPage from './UserPage'
import Billing from './BillingInfo'
import Payment from './Payment'
import Sale from './Sale'
import ContactUs from './ContactUs.js'
import ConfirmOrder from './ConfirmOrder.js'

//============ADMIN===============

import ProductList from './admin/productList'
//import UserList from './admin/userList'
import EditingProducts from './admin/editingProducts.js'
import CreateProduct from './admin/createProduct.js'
import OrderList from './admin/orderList.js'
//=========== STYLES =============
import './App.css'
import Axios from 'axios';




function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [categoryTitle, setCategoryTitle] =useState('All Products')
  const [loggedIn, setLoggedIn] = useState(false)

 
  useEffect (()=>{
    getProducts()
  },[])

  useEffect (()=>{
    getCategories()
  },[])

  useEffect (()=>{
    checkUser()
  })


  const logOut = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }
  const checkUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'))
     if (token !== null) {
        const response = await Axios.post(`${url}/users/verify_token`,{token})
        response.data.ok ? setLoggedIn(true) : logOut()
      } 
    }
    catch(error){
      console.log(error)
    }

  }



  const getCategories = async () => {
    try {
      const categories = await Axios.get(`${url}/category/display`)
      setCategories(categories.data.allCategories)
    }
    catch(error){
      console.log(error)
    }
  }

  const getProductsByCategoryId = async (_id, category) => {
    try {
      const cateProducts = await Axios.get(`${url}/products/getbycategory/${_id}`)
      setProducts(cateProducts.data.category)
      setCategoryTitle(category)
    }
    catch(error){
      console.log(error)
    }
  }



  const getProducts = async () => {
      try {
        const products = await Axios.get(`${url}/products/display`) 
        setProducts(products.data.allProducts)
      }
      catch(error) {
        console.log('error = ',error)
      }
  } 

  
  const sortProducts = async (order) =>{
    try {
      const sort = await Axios.get(`${url}/products/sort/${order}`)
      setProducts(sort.data.allProducts)
    }
    catch(error) {
      console.log(error)
    }
  }



  const handleRemove = async(_id) => {
    try{ 
      await Axios.post(`${url}/products/remove`,{_id})
      getProducts()

   }
   catch(error){
     console.log(error)
   }
 }


 const search = async (e) =>{
  try{
    const response = await Axios.get(`${url}/products/search/${e.target.value}`)
    setProducts(response.data.products)
  }
  catch(error){
    console.log(error)
  }
}


  return <Router>
           <Header loggedIn={loggedIn}
                   logOut={logOut}/>
           <Navbar categories={categories}
                    getProductsByCategoryId={getProductsByCategoryId}
                    search={search}/>
          <Route exact path={'/'}  render={(props)=>{
                                         return <Home {...props} products={products}
                                                                 categoryTitle={categoryTitle}
                                                                 sortProducts={sortProducts}
                                                                />
                                    }}/>
           <Route path = {'/product/:product'} component = {Product}/>
           <Route path = {'/contactus'} component={ContactUs}/>
           <Route path = {'/cart'} component ={Cart}/>
           <Route path = {'/login'} render={(props)=>{
                                      return <LogIn {...props}
                                                    checkUser={checkUser}/>
           }}/>
           <Route path = {'/register'} component = {Register}/>
           <Route path = {'/userpage'} component = {UserPage}/>
           <Route path = {'/billing'} component = {Billing}/>
           <Route path = {'/payment'} component ={Payment}/>
           <Route path = {'/confirmorder'} component = {ConfirmOrder}/>
           <Route path = {'/admin/productlist'} render={(props)=>{
                                         return <ProductList {...props}
                                                             products={products}
                                                             handleRemove={handleRemove}/>
           }}/>
           <Route path={'/admin/createproduct'} render={(props)=>{
             return <CreateProduct {...props} 
                                    getProducts={getProducts}/>
           }}/>
           <Route path = {'/admin/edit/:_id'} render={(props)=>{
             return <EditingProducts {...props}
                                      getProducts={getProducts}/>
           }} /> 
           <Route path = {'/admin/orderlist'} component={OrderList} /> 
           <Route path = {'/sale'} render={(props)=>{
                                         return <Sale {...props} products={products}/>
           }}/>

       
           <Footer />
       </Router>
}





export default App;


