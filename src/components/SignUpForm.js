import React from 'react'

const SignUpForm = props => {
  return (
    <div className="js-sign-up-form">
      <h3>Sign Up</h3>
      <form onSubmit={props.handleSubmitOnSignUpForm}>
        <label>
          Username:
          <input type="text" name="signUpUsername" value={props.signUpUsername} onChange={props.handleChange} />
        </label>
        <label>
          First Name:
          <input type="text" name="signUpFirstNameValue" value={props.signUpFirstNameValue} onChange={props.handleChange} />
        </label>
        <label>
          Last Initial:
          <input type="text" name="signUpLastInitialValue" value={props.signUpLastInitialValue} onChange={props.handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="signUpPhone" value={props.signUpPhone} onChange={props.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" name="signUpPassword" value={props.signUpPassword} onChange={props.handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="text" name="signUpPasswordConfirm" value={props.signUpPasswordConfirm} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignUpForm
