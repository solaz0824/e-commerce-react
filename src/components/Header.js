import React from 'react'
import { withRouter } from 'react-router-dom'
//import { Dropdown } from 'semantic-ui-react'





const Header = (props) => {
  return <header style={{backgroundColor: 'seashell'}}>
    <div style={headerStyle}>
        {
          props.loggedIn === true
            ? <div >
              <img src='https://cdn0.iconfinder.com/data/icons/thin-files-documents/57/thin-083_file_document_cv_curriculum_vitae_profile_id-512.png' alt='user page icon' onClick={() => props.history.push('/userpage')} style={{ width: '30px', height:'26px', margin: '0 15px 104px' }} />

              <img src='https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-512.png' alt='log out icon' onClick={() => props.logOut()} style={{ width: '35px', marginBottom: '100px' }} />
            </div>
            : <img src='http://cdn.onlinewebfonts.com/svg/img_325769.png' alt = 'log in icon' style={{ width: '40px', paddingLeft: '1em', marginBottom: '100px', marginRight:'1em' }} onClick={() => props.history.push('/login')} />

        }
          <div style={{width:'6%'}}> 
         <img src='https://image.flaticon.com/icons/png/512/126/126083.png' alt='cart icon' onClick={() => props.history.push('/cart')}
          style={{ width: '30px', marginLeft:'8px'}} />
      </div>
       
    </div>
   <div style={{display: 'flex'}}>
    <div style={{width:'94%'}}>
      <h1 style={{ width: '20%' }} onClick={() => props.history.push('/')}>Style Ship</h1>
      </div>
    
      </div>
    
  </header>

}

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '2em 2em',
  height: '100px'
}

export default withRouter(Header)

