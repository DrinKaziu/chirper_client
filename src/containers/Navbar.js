import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Segment, Menu, Container, Button } from "semantic-ui-react";

class Navbar extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    
    const { fixed } = this.state

    return(
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'
        >
          <Container>
            <Link to="/">
              <Menu.Item active>
                Home
              </Menu.Item>
            </Link>
            <Menu.Item position='right'>
              <Link to="/signin">
                <Button inverted={!fixed}>
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Link>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, null)(Navbar);
