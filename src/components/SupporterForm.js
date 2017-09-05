import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const SupporterForm = props => {
  return (
    <div className="js-supporter-form">
        <Form onSubmit={props.handleSubmitOnSupporterForm}>
        <h3>Add Supporter</h3>
            <Form.Field>
              <label>First Name:</label>
              <input type="text" name="supporterFirstNameValue" value={props.supporterFirstNameValue} onChange={props.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Last Initial:</label>
              <input type="text" name="supporterLastInitialValue" value={props.supporterLastInitialValue} onChange={props.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Phone:</label>
              <input type="text" name="supporterPhone" value={props.supporterPhone} onChange={props.handleChange} />
            </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default SupporterForm
