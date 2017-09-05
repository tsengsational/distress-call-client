import React, { Component } from 'react';
import './App.css';
import CircleContainer from './components/CircleContainer'
import SignUpForm from './components/SignUpForm'
import Navbar from './components/Navbar'
import { Image } from 'semantic-ui-react'
import Auth from './adapters/AuthAdapter'
import CirclesAdapter from './adapters/CirclesAdapter'
import UsersAdapter from './adapters/UsersAdapter'
import SupportersAdapter from './adapters/SupportersAdapter'
import CallsAdapter from './adapters/CallsAdapter'
import LogInForm from './components/LogInForm'
import { Route } from 'react-router-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const URL = 'http://localhost:3000/api/v1'

class App extends Component {
  constructor(){
    super()

    this.state = {
      selectedCircle: 0,
      supporters: [],
      callMessage: '',
      selectedSupporters: [],
      supporterFirstNameValue: '',
      supporterLastInitialValue: '',
      supporterPhone: '',
      signUpUsername: '',
      signUpFirstNameValue: '',
      signUpLastInitialValue: '',
      signUpPhone: '',
      signUpPassword: '',
      signUpPasswordConfirm: '',
      logInUsername: '',
      logInPassword: '',
      auth: {
        isloggedIn: false,
        user: {
          jwt: '',
          user: {},
          circles: [],
          fellowships: []
        }
      }
    }

    this.handleChangeOnCircleSelect.bind(this)
  } // end constructor

  handleChange = (event) => {
    return (
      this.setState({
      [event.target.name]: event.target.value
    }, ()=>{console.log(this.state)})
    )
  }
  // HANDLERS
  handleClick = () => {
    const callParams = {
      call: {
        circle_id: this.state.selectedCircle
      }
    }
    CallsAdapter.post(callParams)
      .then(json => console.log(json))
  }

  handleSubmitOnSignUpForm = (event) => {
    event.preventDefault()
    const userParams = {
        username: this.state.signUpUsername,
        first_name: this.state.signUpFirstNameValue,
        last_initial: this.state.signUpLastInitialValue,
        phone: this.state.signUpPhone,
        password: this.state.signUpPassword,
        password_confirmation: this.state.signUpPasswordConfirm
    } // end userParams
    console.log(userParams)
    UsersAdapter.post(userParams)
      .then(json => console.log(json))
  }

  handleSubmitOnSupporterForm = (event) => {
    event.preventDefault()
    const supporterParams = {
      supporter: {
        first_name: this.state.supporterFirstNameValue,
        last_initial: this.state.supporterLastInitialValue,
        phone: this.state.supporterPhone
      },
      circle_id: this.state.selectedCircle
    }
    console.log(supporterParams)
    SupportersAdapter.post(supporterParams)
      .then(json => {
        console.log("Refetching supporters after adding:", json)
        const id = json.circle.id
        this.getSupporters(id)
        }
      )
      .catch(error => console.log(error))
  }

  getSupporters = (id) => {
    CirclesAdapter.show(id)
      .then(json => this.setState({
        selectedSupporters: json.supporters
      }, console.log("Reget Selected Supporters: ", this.state.selectedSupporters)))
  }

  handleSubmitOnLogInForm = (event) => {
    event.preventDefault()
    const username = this.state.logInUsername
    const password = this.state.logInPassword
    const loginParams = {
      username: username,
      password: password
    }
    this.logIn(loginParams)
  }

  handleChangeOnCircleSelect = (event, data) => {
    this.setState({
      selectedCircle: data.value
    }, ()=>{
      console.log('selectedCircle: ', this.state.selectedCircle)
      CirclesAdapter.show(this.state.selectedCircle)
        .then(json => this.setState({
          selectedSupporters: json.supporters
        }, console.log('selected supporters:', this.state.selectedSupporters)))
        // .catch(console.log('failed to fetch supporters'))
    })
  }

// AUTHORIZATION
  logIn = (loginParams) => {
    Auth.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            auth: { isLoggedIn: true, user: user}
          })
          localStorage.setItem('jwt', user.jwt )
          this.props.history.push('/')
        }
      }).then(()=>{console.log(this.state.auth)})
  } //end logIn

  logout = () => {
      localStorage.removeItem('jwt')
      this.setState({ auth: { isLoggedIn: false, user:{}}}, ()=>{this.props.history.push('/')})
    }

componentWillMount(){
      if (localStorage.getItem('jwt')) {
       Auth.currentUser()
         .then(response => {
           if (!response.error) {
             console.log("fetch user");
             this.setState({
               auth: {
                 isLoggedIn: true,
                 user: response.user,
                 jwt: response.jwt,
                 circles: response.circles,
                 fellowships: response.fellowships
               }
             }) // end this.setState
           } // end if statement
         })
         .catch((resp)=>{console.log(resp)})// end then
     } else {
       console.log('not logged in')
     } // end if statement

   }



// RENDERS
  render() {
    return (
        <div className="App">
            <Navbar logout={this.logout} />
            <br/>
            <div className="ui two column centered grid">
              <div className="column">
                <Image className="centered" src='/DistressCall_logo.svg' size="large" />
              </div>
            </div>
            <br/>
            <br/>
            <Route exact path="/signin" render={()=>{return(<LogInForm
              handleSubmitOnLogInForm={this.handleSubmitOnLogInForm}
              handleChange={this.handleChange}
            />)}} />
            <Route exact path="/" render={(props)=>{
                  return (<CircleContainer
                  match={props.match}
                  history={props.history}
                  auth={this.state.auth}
                  selectedCircle={this.state.selectedCircle}
                  handleClick={this.handleClick}
                  supporters={this.state.selectedSupporters}
                  handleChangeOnCircleSelect={this.handleChangeOnCircleSelect}
                  supporterFirstNameValue={this.state.supporterFirstNameValue}
                  supporterLastInitialValue={this.state.supporterLastInitialValue}
                  supporterPhone={this.state.supporterPhone}
                  handleSubmitOnSupporterForm={this.handleSubmitOnSupporterForm}
                  handleChange={this.handleChange}
                  getSupporters={this.getSupporters}
                  />)
              } // end return
            } // end render
            />
            <br/>
            <br/>
              <br/>
            <Route exact path="/signup" render={()=>{
              return(
                <SignUpForm
                  signUpUsername={this.state.signUpUsername}
                  signUpFirstNameValue={this.state.signUpFirstNameValue}
                  signUpLastInitialValue={this.state.signUpLastInitialValue}
                  signUpPhone={this.state.signUpPhone}
                  signUpPassword={this.state.signUpPassword}
                  signUpPasswordConfirm={this.state.signUpPasswordConfirm}
                  handleChange={this.handleChange}
                  handleSubmitOnSignUpForm={this.handleSubmitOnSignUpForm}
                  />
              )} // end return
            }  //end render
          />
        </div>
    );
  }
} // end App class

function headers () {
  return {
    "content-type": "application/json",
    "accept": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("jwt")
  }
}

export default App;
