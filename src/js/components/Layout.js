import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class Layout extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Segment color="orange" inverted>
            <Menu color="orange" secondary inverted>
              <Menu.Item name='' icon="content" onClick={this.toggleVisibility} />
            </Menu>
        </Segment>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item href="#/" name='Dashboard'>
              <Icon name='home' />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#/ranking" name='Ranking'>
              <Icon name='gamepad' />
              Ranking
            </Menu.Item>
            <Menu.Item href="#/notification" name='Notification'>
              <Icon name='camera' />
              Notification
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <div class="content">
                { this.props.children }
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Layout
