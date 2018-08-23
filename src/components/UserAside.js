import React from "react";
import Moment from "react-moment";
import { Card, Image, Icon } from 'semantic-ui-react';
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({date, profileImageUrl, username}) => {
  let numOfFriends = Math.floor((Math.random() * 1000) + 1); 
  return(
    <Card>
      <Image src={profileImageUrl || DefaultProfileImage} />
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>
          <p>Joined in <Moment format="YYYY">{date}</Moment></p>
        </Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {numOfFriends}
        </a>
      </Card.Content>
    </Card>
  )
}


export default UserAside;
