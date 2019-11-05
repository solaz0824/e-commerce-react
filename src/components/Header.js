import React from 'react'
import { withRouter } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]


const Header = (props) => {
  return <header>
    <div style={headerStyle}>
      <div>
        <Dropdown
          button
          className='icon'
          floating
          labeled
          icon='world'
          options={languageOptions}
          search
          text='Select Language' />
      </div>
      
        {
          props.loggedIn === true
            ? <div >
              <img src='https://cdn0.iconfinder.com/data/icons/thin-files-documents/57/thin-083_file_document_cv_curriculum_vitae_profile_id-512.png' alt='user page icon' onClick={() => props.history.push('/userpage')} style={{ width: '30px', height:'26px', margin: '0 15px 104px' }} />

              <img src='https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-512.png' alt='log out icon' onClick={() => props.logOut()} style={{ width: '35px', marginBottom: '100px' }} />
            </div>
            : <img src='http://cdn.onlinewebfonts.com/svg/img_325769.png' alt = 'log in icon' style={{ width: '40px', paddingLeft: '1em', marginBottom: '100px', marginRight:'1em' }} onClick={() => props.history.push('/login')} />

        }
       
    </div>
   <div style={{display: 'flex'}}>
    <div style={{width:'94%'}}>
      <h1 style={{ width: '20%' }} onClick={() => props.history.push('/')}>E-Commerce</h1>
      </div>
      <div style={{width:'6%'}}> 
         <img src='https://image.flaticon.com/icons/png/512/126/126083.png' alt='cart icon' onClick={() => props.history.push('/cart')}
          style={{ width: '30px', marginLeft:'8px'}} />
      </div>
      </div>
    
  </header>

}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2em 2em'
}

export default withRouter(Header)

