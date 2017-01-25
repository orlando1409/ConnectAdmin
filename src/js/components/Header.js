import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Route } from 'react-router';

export default class Header extends Component {
  state = { activeItem: 'dashboard' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  stateopen = { isOpen : 'visible'}


  render() {
    const { activeItem } = this.state
    const { isOpen } = this.stateopen

    console.log(isOpen)

    return (
      <div>
        <Segment color="orange" inverted>
          <Menu color="orange" secondary inverted>
            <Menu.Item name='' icon="content" onClick={this.toggleSide} />
            <Menu.Item href="#/" name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
            <Menu.Item href="#/ranking" name='ranking' active={activeItem === 'ranking'} onClick={this.handleItemClick} />
            <Menu.Item href="#/notification" name='notification' active={activeItem === 'notification'} onClick={this.handleItemClick} />
          </Menu>
        </Segment>
        <div className={isOpen} class="ui left demo vertical inverted labeled icon sidebar menu uncover">
          <a class="item">
            <i class="home icon"></i>
            Home
          </a>
          <a class="item">
            <i class="block layout icon"></i>
            Topics
          </a>
          <a class="item">
            <i class="smile icon"></i>
            Friends
          </a>
        </div>
      </div>
    )
  }
}
