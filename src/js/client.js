/*import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <h1>Work</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
*/
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import ReactDOM from "react-dom";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}

const app = document.getElementById('app');

ReactDOM.render(<MenuExampleInvertedSecondary />, app);
