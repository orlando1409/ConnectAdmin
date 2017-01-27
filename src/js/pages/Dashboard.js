import React from "react";
import CardList from '../components/CardList'
import { Button, Icon, Grid, Divider, Segment } from 'semantic-ui-react'

export default class Dashboard extends React.Component {
  render () {
    return (
      <div>

        <h2>Quick Actions</h2>

        <Segment>
          <Grid stackable columns={3}>

              <Grid.Column>
                <Button fluid positive>
                  <Icon name='twitter' />
                  Send a notification
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid positive>
                  <Icon name='twitter' />
                  Give badges
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid positive>
                  <Icon name='twitter' />
                  Give recommendations to groups
                </Button>
              </Grid.Column>

          </Grid>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Button fluid primary>
                <Icon name='twitter' />
                Create an event
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid primary>
                <Icon name='twitter' />
                Create badges
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid primary>
                <Icon name='twitter' />
                Create tags
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>

        <h2>Recent Activity</h2>

        <Grid stackable columns={3}>
          <Grid.Column>
            <CardList header="Top current month" />
          </Grid.Column>
          <Grid.Column>
            <CardList header="Top last month" />
          </Grid.Column>
          <Grid.Column>
            <CardList header="Top all time" />
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}
