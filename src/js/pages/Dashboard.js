import React from "react";
import CardList from '../components/CardList'

export default class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Dahsboard</h1>
        <div class="ui three column very relaxed grid">
          <div class="column">
            <CardList />
          </div>
          <div class="column">
            Hola
          </div>
          <div class="column">
            Hola
          </div>
        </div>
      </div>
    )
  }
}
