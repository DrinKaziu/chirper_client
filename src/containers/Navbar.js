import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import DefaultProfileImage from "../images/default-profile-image.jpg";
import { Menu, Container, Button, Icon, Image } from "semantic-ui-react";

class Navbar extends Component {

  logout = e => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <Menu pointing secondary size='large' className="navbar" >
        <Container className="navbar-container" fluid>
          <Menu.Item>
            <Link to="/">
              <Icon name="home" size="big" color="teal"/>
              <Button style={{marginLeft: "10px"}} active color="teal" basic>Home</Button>
            </Link>
          </Menu.Item>
          <Menu.Item style={{marginLeft: "auto"}}>
            <Link to="/">
              <Icon name="earlybirds" size="big" color="teal"/>
            </Link>
          </Menu.Item>
          {this.props.currentUser.isAuthenticated ? (
            <Menu.Item position='right'>
              <Image
                className="nav-image"
                src={this.props.currentUser.user.profileImageUrl || DefaultProfileImage}
              />
              <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
                <Button color="teal">Chirp</Button>
              </Link>
              <Button color="teal" basic onClick={this.logout}>Logout</Button>
            </Menu.Item>
          ) : (
            <Menu.Item position='right'>
              <Link to="/signin">
                <Button basic color="teal">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button basic color="teal" style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Link>
            </Menu.Item>
          )}
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
