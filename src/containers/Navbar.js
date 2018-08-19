import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Container, Button, Icon } from "semantic-ui-react";

class Navbar extends Component {

  render() {

    return(
      <Menu pointing secondary size='large' className="navbar">
        <Container>
          <Link to="/">
            <Menu.Item>
              <Icon name="earlybirds" size="big"/>
            </Menu.Item>
          </Link>
          <Menu.Item position='right'>
            <Link to="/signin">
              <Button >
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null)(Navbar);
