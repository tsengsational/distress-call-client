import React from 'react'
import { Button } from 'semantic-ui-react'

const CallButton = (props) => {
  return (<Button size='massive' color ='red' onClick={props.handleClick} >
    Send DistressCall
  </Button>
  )
}

export default CallButton
