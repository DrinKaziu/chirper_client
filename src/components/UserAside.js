import React from "react";
import { Card, Image, Icon } from 'semantic-ui-react';
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, username}) => {

  return(
    <Card>
      <Image src={profileImageUrl || DefaultProfileImage} />
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}


export default UserAside;
