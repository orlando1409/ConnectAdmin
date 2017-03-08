import React from 'react'
import { Image, List } from 'semantic-ui-react'

export default class ColumnList extends React.Component {

  render() {

    console.log('props',this.props)

    if(this.props.data instanceof Array){

      const ListItems = this.props.data.map((item) => {
        return (<List.Item key={item.pk}>
                  <Image avatar src={item.avatar} />
                  <List.Content>
                    <List.Header>{item.first_name + ' ' + item.last_name}</List.Header>
                  </List.Content>
                </List.Item>)
      });

      return (
        <List animated verticalAlign='middle'>
          {ListItems}
        </List>
      )

    }else{
      return (
        <List animated verticalAlign='middle'>
          No hay elementos
        </List>
      )
    }

  }
}
