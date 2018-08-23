import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/users";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props.users);
    return(
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);
