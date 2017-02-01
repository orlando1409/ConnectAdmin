import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Route } from 'react-router';


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
  }

  state = { activeItem: 'dashboard' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  /*toggleCollapse () {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed})
  }
*/
  render() {
    const { activeItem } = this.state
  //  const { collapsed } = this.state

    //const navClass = collapsed ? "visible" : "";

    return (
      <div>
        
      </div>
    )
  }
}
