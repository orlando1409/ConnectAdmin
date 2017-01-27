import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const PopupBtn = (props) => (
  <Popup inverted trigger={<Button basic circular size="big" icon={props.icon} />}
    content={props.content}
  />
)

export default PopupBtn
