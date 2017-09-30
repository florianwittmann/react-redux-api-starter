import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import InputField from "./components/InputField";
import Alert from "./components/Alert";
import SubmitButton from "./components/SubmitButton";
import {
  isRequired,
  isEmail,
  validate as checkValidation
} from "./components/Validations";
import { loginUser } from "../../data/user/actions";
import { withRouter, Link } from "react-router-dom";

const LoginForm = props => {
  const onSubmit = ({ email, password }) => {
    props.loginUser({ email, password }, () => {
      props.history.push("/dashboard");
    });
  };
  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <InputField type="email" name="email" title="Email" icon="envelope" />
      <InputField
        name="password"
        title="Password"
        type="password"
        icon="lock"
      />
      <Alert errorMessage={props.errorMessage} />
      <SubmitButton inProgress={props.inProgress}>Login</SubmitButton>
      <Link to="/reset">Forgot your password?</Link>
      <hr />
      New customer? <Link to="/signup">Create new account</Link>

    </form>
  );
};

function validate(values) {
  return checkValidation(values, {
    email: [isRequired, isEmail],
    password: [isRequired]
  });
}

function mapStateToProps(state) {
  return { errorMessage: state.user.error, inProgress: state.user.inProgress };
}

const reduxFormLogin = reduxForm({ validate, form: "LoginForm" })(LoginForm);
export default withRouter(
  connect(mapStateToProps, { loginUser })(reduxFormLogin)
);
