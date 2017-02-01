import React from 'react';
import { Card, Feed, Icon, Image, Item  } from 'semantic-ui-react';

export default class CardList extends React.Component {
  render() {

    const ListItems = this.props.data.map((item) => {
      return (<Item key={item.pk}>
                <Item.Image size='mini' src={item.avatar} />
                <Item.Content>
                  <Item.Header as='a'>{item.first_name + ' ' + item.last_name}</Item.Header>
                  <Item.Extra>
                    <Icon color='green' name='check' /> {item.current_month_score} Points
                  </Item.Extra>
                </Item.Content>
              </Item>)
    });

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {this.props.header}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Item.Group>
            {ListItems}
          </Item.Group>
        </Card.Content>
      </Card>
    )
  }
}
