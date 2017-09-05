import React from 'react'
import { Table } from 'semantic-ui-react'
import SupporterDelete from './SupporterDelete'

const Supporter = (props) => {
  const name = props.supporter.last_initial ? props.supporter.first_name + " " + props.supporter.last_initial + "." : props.supporter.first_name
  const phone = props.supporter.phone
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{phone}</Table.Cell>
      <Table.Cell><SupporterDelete supporter={props.supporter} circle={props.circle} getSupporters={props.getSupporters} /></Table.Cell>
    </Table.Row>
  )
}

export default Supporter
