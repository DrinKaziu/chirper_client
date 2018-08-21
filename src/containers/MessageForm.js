import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Message, Button, Segment, TextArea, Grid } from 'semantic-ui-react';
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleNewMessage = e => {
    e.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({message: ""});
    this.props.history.push("/");
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return(
      <Grid centered>
        <Grid.Column width={6}>
          <Segment>
            <Form onSubmit={this.handleNewMessage}>
              {this.props.errors.message && (
                <Message negative><p>{this.props.errors.message}</p></Message>
              )}
              <p>Compose new Chirp:</p>
              <TextArea

                placeholder="What's chirpin.."
                value={this.state.message}
                onChange={this.handleChange}
              />
              <Button
                color="teal"
                basic
                style={{marginTop: "5px"}}
                type="submit">Post
              </Button>
              <Link to="/">
                <Button basic negative >Cancel</Button>
              </Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, {postNewMessage})(MessageForm);
