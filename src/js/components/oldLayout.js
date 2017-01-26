import React from "react";
import Header from "./Header";
import SidebarLeft from './SidebarLeft';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <SidebarLeft />
        <div class="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}
