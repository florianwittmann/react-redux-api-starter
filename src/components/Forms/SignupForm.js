import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import InputField from "./components/InputField";
import Alert from "./components/Alert";
import SubmitButton from "./components/SubmitButton";
import {
  isRequired,
  isEmail,
  minLength,
  matches,
  validate as checkValidation
} from "./components/Validations";
import { signupUser } from "../../data/user/actions";
import { withRouter, Link } from "react-router-dom";

const SignupForm = props => {
  const onSubmit = ({ email, password }) => {
    props.signupUser({ email, password }, () => {
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
      <InputField
        name="passwordrepeat"
        title="Re-enter password"
        type="password"
        icon="lock"
      />
      <Alert errorMessage={props.errorMessage} />
      <SubmitButton inProgress={props.inProgress}>Signup</SubmitButton>
      <hr />
      Already have an account? <Link to="/login">Login</Link>
    </form>
  );
};

function validate(values) {
  return checkValidation(values, {
    email: [isRequired, isEmail],
    password: [isRequired, minLength(6)],
    passwordrepeat: [matches("password")]
  });
}

function mapStateToProps(state) {
  return { errorMessage: state.user.error, inProgress: state.user.inProgress };
}

const reduxFormSignup = reduxForm({ validate, form: "SignupForm" })(SignupForm);
export default withRouter(
  connect(mapStateToProps, { signupUser })(reduxFormSignup)
);
