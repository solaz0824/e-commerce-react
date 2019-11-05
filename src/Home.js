import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const Home = (props) => {
      const renderAllProducts = props.products.map((product, i) => {
        return <div key={i} >
    
          {product.onSale ? <p className='display'><span className='blinking'>on sale</span></p> : <p className='displayNot'>on sale</p>}
          <img src={product.images[0].secure_url} onClick = {()=>props.history.push({
                                                        pathname : `/product/${product.product}`,
                                                        state    : {product}
                                                  })
                                             } alt={product.product} 
                                                        />
          <h4>{product.product}</h4>
          <p>{product.price}€</p>
    
        </div>
    })

          const renderBestsellers = props.products.map((product, i) => {
            return product.bestSeller
              ? <div key={i} className='bestSeller'>
                {product.onSale ? <p className='display'><span className='blinking'>on sale</span></p> : <p className='displayNot'>on sale</p>}
                <img src={product.images[0].secure_url} onClick = {()=>props.history.push({pathname:`/product/${product.product}`,
                                                                             state: {product}   })}alt="product.category" />
                <h4>{product.product}</h4>
                <p>{product.price}€</p>
        
              </div>
              : null
        
         })

         
    return <div style={{padding: '28px'}}>
    <Dropdown text='sort' multiple icon='filter' style={{float:'right', padding:0}} >
    <Dropdown.Menu direction='left' style={{paddingRight:'1em'}}>
      <Dropdown.Menu scrolling>
       
          <Dropdown.Item text= 'Price low to high'  circular = 'true' onClick={()=>props.sortProducts(1)}/>
          <Dropdown.Item text= 'Price high to low'  circular = 'true' onClick={()=>props.sortProducts(-1)}/>

      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
                <h2>{props.categoryTitle}</h2>
                <div className='grid3'>{renderAllProducts}</div>
                {
                 props.categoryTitle === 'All Products'
                  ? <div>
                  <h2 style={{margin: '10% 0 0 '}}>Best Seller</h2>
                  <div className='grid3'>{renderBestsellers}</div>
                  </div>
                 : null  
                  }
               
            </div>
    }
    
    export default Home
    
   
