import React, { Component } from "react";
import { Container, Grid, Search } from 'semantic-ui-react';
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";



class MessageTimeline extends Component {
  render() {
    return(
      <Container className="timeline">
        <Grid columns='equal' divided >
          <Grid.Column>
            <UserAside
              profileImageUrl={this.props.profileImageUrl}
              username={this.props.username}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MessageList />
          </Grid.Column>
          <Grid.Column>
            <Search size="large" placeholder="Search Chirper.." style={{marginLeft: "20px"}}/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
};

export default MessageTimeline;
