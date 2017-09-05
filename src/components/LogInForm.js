import React from 'react'

const LogInForm = props => {
  return (
    <div className="js-LogI-form">
      <h3>Log In</h3>
      <form onSubmit={props.handleSubmitOnLogInForm}>
        <label>
          Username:
          <input type="text" name="logInUsername" value={props.LogInUsernameValue} onChange={props.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="logInPassword" value={props.LogInPasswordValue} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default LogInForm
