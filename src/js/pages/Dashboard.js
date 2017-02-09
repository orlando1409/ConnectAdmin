import React from "react";
import CardList from "../components/CardList";
import { Button, Icon, Grid, Divider, Segment } from "semantic-ui-react";
import PopupBtn from "../components/PopupBtn";


/*import axios from "axios";


store.dispatch({
  type: "FETCH_USER",
  payload: axios.post("https://bxconnect.herokuapp.com:443/api/employee/authenticate/", {
    username: "ecastaneda",
    password: "allstars"
  })
});*/

/*store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USER"})

//async
  dispatch({type: "BAR"})
});*/


export default class Dashboard extends React.Component {

  render () {

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
