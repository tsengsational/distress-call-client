import React from 'react'
import Supporter from './Supporter'
import { Table } from 'semantic-ui-react'

const SupporterList = (props) => {
  if (props.supporters.length > 0){
  const supporters = props.supporters.map(supporter => {
  return  (
              <Supporter key={supporter.id} supporter={supporter} circle={props.circle} getSupporters={props.getSupporters} />
          )
  }) // end supporters
  return (
    <div className="js-supporter-list">
        <Table celled>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {supporters}
          </Table.Body>
        </Table>
    </div>
  )
} else { return (<div></div>)} // end if statement
} // end SupporterList

export default SupporterList
