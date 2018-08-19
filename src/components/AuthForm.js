import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  render() {
    const {email, username, password, profileImageUrl} = this.state;
    const {heading, buttonText} = this.props;

    return(
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name="earlybirds"/>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  onChange={this.handleChange}
                />

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to Chirper? <Link to="signup">Sign Up </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
