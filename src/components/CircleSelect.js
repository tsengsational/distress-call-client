import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleSelection = (props) => {
  const circleOptions = props.circles.map((circle) =>{
    return({
      text: circle.name,
      value: circle.id
    })
  })
  return (  <Dropdown onChange={props.handleChangeOnCircleSelect} placeholder='Select Circle' selection options={circleOptions} /> )
}

export default DropdownExampleSelection
