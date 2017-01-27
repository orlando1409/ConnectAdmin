import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class Layout extends Component {
  state = { visible: false,
            menuItem: 'Dashboard'
          }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  setMenuItem = (e, props) => this.setState({menuItem: props.name});

  render() {
    const { visible, menuItem } = this.state
    return (
      <div>
        <Segment color="orange" inverted>
            <Menu color="orange" secondary inverted>
              <Menu.Item name='' icon="content" onClick={this.toggleVisibility} />
              <div class="item">
                <h3>{this.state.menuItem}</h3>
              </div>
            </Menu>

        </Segment>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item href="#/" name='Dashboard' onClick={this.setMenuItem}>
              <Icon name='dashboard' />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#/ranking" name='Ranking' onClick={this.setMenuItem}>
              <Icon name='ordered list' />
              Ranking
            </Menu.Item>
            <Menu.Item href="#/notification" name='Notification' onClick={this.setMenuItem}>
              <Icon name='alarm outline' />
              Notification
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <div class="main-container">
              { this.props.children }
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Layout
