import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const RemoveModal = (props) => {
  console.log(props)
  return <Modal  open={props.open} closeIcon style={{height:'200px'}}>
    <Header icon='archive' content='' />
    <Modal.Content>
      <p>
        Do you want to delete this product? 
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'onClick={()=>props.handleClose()}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' onClick={() => {props.handleRemove(props._id);
                                           props.handleClose()}}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal> 
}
 
export default RemoveModal