import React from "react";
import Header from "./Header";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="content">
          { this.props.children }
        </div>        
      </div>
    )
  }
}
