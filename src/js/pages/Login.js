import React from 'react'
import { Grid, Image, Button, Checkbox, Form } from 'semantic-ui-react'

import { fetchUser } from "../actions/userActions"

import { connect } from "react-redux";

@connect((store) => {
  return {
    user: store.user.user
  }
})

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleName(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword() {
    this.setState({
      password: event.target.value
    });
  }

  handleClick(user) {
    this.props.dispatch(fetchUser(user))
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render () {
    return (
      <Grid divided='vertically'>

        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>

            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>User Name</label>
                <input placeholder='User Name'
                  name="username"
                  value={this.state.username}
                  onChange={this.handleName}
                  type="text" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password'
                  name="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  type="password" />
              </Form.Field>
              <Button type='submit'>Login</Button>
            </Form>

          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
