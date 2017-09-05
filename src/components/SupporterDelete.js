import React from 'react'
import { Button } from 'semantic-ui-react'
import SupportersAdapter from '../adapters/SupportersAdapter'
import CirclesAdapter from '../adapters/CirclesAdapter'

export default class SupporterDelete extends React.Component {

  handleClick = (event) => {
    const id = this.props.supporter.id
    const circleID = this.props.circle
    const formData = {supporterID: id, circleID: circleID}
    debugger
    SupportersAdapter.remove(formData)
      .then(json => {
        this.props.getSupporters(json.circle.id)
      })
      .catch(console.log("Failed to delete"))
  }

  getSupporters = (id) => {

  }

  render(){
    return (
      <Button onClick={this.handleClick}>Delete</Button>
    )
  }
}
