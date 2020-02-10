import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


const ModalBasic = (props) => {
  return  <Modal style={{border:'1px solid white', margin: '10% 25%', marginTop:'10%', width:'50%', height:'200px' }}
                centered={true}
                open={props.open} 
                basic size='small'>
    <Header icon='shopping cart' />
    <Modal.Content>
      <h3>
        Do you want to check your cart? 
      </h3>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={()=>props.handleClose()} basic color='red' inverted>
        <Icon name='remove' /> No 
      </Button>
      <Button onClick={()=>props.history.push('/cart')}   color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>

}
 
export default ModalBasic