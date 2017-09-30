import React, { Component } from "react";
import { connect } from "react-redux";
import DefaultLayout from "../../../layouts/default";
import { logoutUser } from "../../../data/user/actions";
import { Link } from "react-router-dom";

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <DefaultLayout
        title="You've been logged out successfully"
        subtitle="We hope to see you again soon."
      >
        <Link to="/">Back to home</Link>
      </DefaultLayout>
    );
  }
}

export default connect(null, { logoutUser })(Logout);
