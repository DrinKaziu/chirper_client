import React from "react";
import Moment from "react-moment";
import { Button, Card, Image } from "semantic-ui-react";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const MessageItem = ({date, username, text, profileImageUrl, removeMessage, isCorrectUser}) => {
  return(
    <div>
      <Card fluid>
        <Card.Content>
          <Image floated='left' size='tiny' src={profileImageUrl || DefaultProfileImage} />
          <Card.Header as="a">{username}</Card.Header>
          <Card.Meta as="a">@{username}</Card.Meta>
          <Card.Description>
            {text}
          </Card.Description>
          <Card.Meta>
            <Moment format="MM.DD.YYYY">{date}</Moment>
          </Card.Meta>
        </Card.Content>

        {isCorrectUser && (
          <Card.Content extra>
            <Button basic size="mini" negative onClick={removeMessage}>X</Button>
          </Card.Content>
        )}
      </Card>
    </div>
  )
}

export default MessageItem;
