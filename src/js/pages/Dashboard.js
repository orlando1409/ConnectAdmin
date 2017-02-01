import React from "react";
import CardList from '../components/CardList';
import { Button, Icon, Grid, Divider, Segment } from 'semantic-ui-react';
import PopupBtn from '../components/PopupBtn';
import TopCurrentScore from '../stores/TopCurrentScore';
import LastMonthScore from '../stores/LastMonthScore';
import TotalScore from '../stores/TotalScore';

export default class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      topCurrentScore: TopCurrentScore.getAll(),
      lastMonthScore: LastMonthScore.getAll(),
      totalScore: TotalScore.getAll()
    }
  }

  componentWillMount() {
    TotalScore.on("change", () => {
      this.setState({
        total: TotalScore.getAll()
      });
    })
  }

  handleItemClick = () => TotalScore.createItem({
    "first_name": "Estefano",
    "last_name": "Castañeda",
  })

  render () {

    const { topCurrentScore, lastMonthScore, totalScore } = this.state;

    return (
      <div class="child-container">

        <h2>Quick Actions</h2>

        <Segment>
          <Grid stackable columns={3}>
              <PopupBtn icon="send" content="Send notifications" />
              <PopupBtn icon="bookmark" content="Give badges" />
              <PopupBtn icon="group" content="Recommend groups" />

              <PopupBtn icon="calendar plus" content="Create events" />
              <PopupBtn icon="plus circle" content="Create badges" />
              <PopupBtn icon="tags" content="Create tags" />

          </Grid>
        </Segment>

        <h2>Recent Activity</h2>

        <Button onClick={this.handleItemClick}>
          Create
        </Button>

        <Grid stackable columns={3}>
          <Grid.Column>
            <CardList data={topCurrentScore} header="Top current month" />
          </Grid.Column>
          <Grid.Column>
            <CardList data={lastMonthScore} header="Top last month" />
          </Grid.Column>
          <Grid.Column>
            <CardList data={totalScore} header="Top all time" />
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}
