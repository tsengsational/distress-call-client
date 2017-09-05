import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <NavLink to="/"><Menu.Item>
          <img src='/DistressCall_logo_square.svg' alt="logo" />
        </Menu.Item></NavLink>
        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
        >
          <NavLink to='/signin'>Sign-in</NavLink>
        </Menu.Item>
        <Menu.Item
          name='sign-up'
          active={activeItem === 'sign-up'}
        >
          <NavLink to='/signup'>Sign-up</NavLink>
        </Menu.Item>
        <Menu.Item name='logout' onClick={this.props.logout}>
          Log-out
        </Menu.Item>
      </Menu>
    )
  }
}
