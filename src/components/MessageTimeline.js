import React from "react";
import { Container, Grid } from 'semantic-ui-react';
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";



const MessageTimeline = props => {
  return(
    <Container className="timeline">
      <Grid columns='equal' divided >

        <Grid.Column>
          <UserAside
            profileImageUrl={props.profileImageUrl}
            username={props.username}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <MessageList />
        </Grid.Column>

        <Grid.Column>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MessageTimeline;
