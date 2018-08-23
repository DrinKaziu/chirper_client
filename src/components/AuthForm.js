import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';

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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state)
    .then(() => {
      this.props.history.push("/");
    }).catch(() => {
      return;
    });
  }

  render() {
    const {email, username, profileImageUrl} = this.state;
    const {heading, buttonText, signUp, signIn, errors, history, removeError} = this.props;

    history.listen(() => {
      removeError();
    })

    return(
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name="earlybirds"/>
              {heading}
            </Header>
            {errors.message && (
              <Message negative><p>{errors.message}</p></Message>
            )}
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name="email"
                  id="email"
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
                  id="password"
                  onChange={this.handleChange}
                />
                {signUp && (
                  <div style={{marginBottom: "15px"}}>
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='Username'
                      name="username"
                      id="username"
                      onChange={this.handleChange}
                      value={username}
                    />
                    <Form.Input
                      fluid
                      icon='user circle'
                      iconPosition='left'
                      placeholder='Image URL'
                      name="profileImageUrl"
                      id="image-url"
                      onChange={this.handleChange}
                      value={profileImageUrl}
                    />
                  </div>
                )}
                <Button color='teal' fluid size='large'>
                  {buttonText}
                </Button>
              </Segment>
            </Form>
            {signIn && (
              <Message>
                New to Chirper? <Link to="signup">Sign Up </Link>
              </Message>
            )}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
