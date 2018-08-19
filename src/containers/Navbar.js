import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { Menu, Container, Button, Icon } from "semantic-ui-react";

class Navbar extends Component {

  render() {

    const logout = e => {
      e.preventDefault();
      this.props.logout();
    }

    return(
      <Menu pointing secondary size='large' className="navbar">
        <Container>
          <Link to="/">
            <Menu.Item>
              <Icon name="earlybirds" size="big"/>
            </Menu.Item>
          </Link>
          {this.props.currentUser.isAuthenticated ? (
            <Menu.Item position='right'>
              <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
                <Button>New Message</Button>
              </Link>
              <Button onClick={this.logout}>Log Out</Button>
            </Menu.Item>
          ) :
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
          }
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

export default connect(mapStateToProps, {logout})(Navbar);
