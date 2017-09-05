import React from 'react'
import SupporterList from './SupporterList'
import SupporterForm from './SupporterForm'
import CallButton from './CallButton'
import Auth from '../adapters/AuthAdapter'
import CircleSelect from './CircleSelect'
import { Divider, Grid } from 'semantic-ui-react'

const baseUrl = 'http://localhost:3000/api/v1'

class CircleContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      user: {},
      fellowships: [],
      circles: [],
    }
  }
  componentWillMount() {
    console.log('Mounting')
    if (!localStorage.getItem('jwt')){
      console.log('Redirecting to Sign-in')
      this.props.history.push('/signin')}
  }

  componentDidMount(){
    Auth.me()
      .then((json)=>{this.setState({
        user: json.user,
        circles: json.circles,
        fellowships: json.fellowships
      }, ()=>{console.log(this.state)})
      })
      .catch(error => {console.log(error)})
    }


  componentWillUpdate() {
    console.log('Updating', 'supporters', this.props.supporters)
    if (!localStorage.getItem('jwt')){
      console.log('Redirecting to Sign-in')
      this.props.history.push('/signin')}
  }
  render(){
    return (
      <div className="js-circle-container">
        <br/>
        <br/>
        <CallButton handleClick={this.props.handleClick}/>
        <br/>
        <br/>
        <CircleSelect handleChangeOnCircleSelect={this.props.handleChangeOnCircleSelect} circles={this.state.circles} />
        <Divider hidden section />
        <Grid container centered columns={2} >
          <Grid.Column width={4}>
            <SupporterForm
              supporterFirstNameValue={this.props.supporterFirstNameValue}
              supporterLastInitialValue={this.props.supporterLastInitialValue}
              supporterPhone={this.props.supporterPhone}
              handleChange={this.props.handleChange}
              handleChangeOnFirstNameSupporterForm={this.props.handleChangeOnFirstNameSupporterForm}
              handleChangeLastInitialOnSupporterForm={this.props.handleChangeLastInitialOnSupporterForm}
              handleChangePhoneOnSupporterForm={this.props.handleChangePhoneOnSupporterForm}
              handleSubmitOnSupporterForm={this.props.handleSubmitOnSupporterForm}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <h3>Supporters</h3>
            <SupporterList supporters={this.props.supporters} circle={this.props.selectedCircle} getSupporters={this.props.getSupporters} />
          </Grid.Column>
        </Grid>
      </div>
    )
  } // end render

}; // end CircleContainer

export default CircleContainer
