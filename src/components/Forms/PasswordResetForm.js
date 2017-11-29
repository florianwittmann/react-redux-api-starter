import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import InputField from "./components/InputField";
import Alert from "./components/Alert";
import SubmitButton from "./components/SubmitButton";
import {
  isRequired,
  minLength,
  matches,
  validate as checkValidation
} from "./components/Validations";
import { resetPassword } from "../../data/user/actions";
import { withRouter } from "react-router-dom";

export const PasswordResetForm = props => {
  const onSubmit = ({ email, password }) => {
    props.resetPassword(props.match.params.token, { password }, () => {
      props.history.push("/dashboard");
    });
  };
  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
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
      <SubmitButton inProgress={props.inProgress}>Reset password</SubmitButton>
    </form>
  );
};

function validate(values) {
  return checkValidation(values, {
    password: [isRequired, minLength(6)],
    passwordrepeat: [matches("password")]
  });
}

function mapStateToProps(state) {
  return { errorMessage: state.user.error, inProgress: state.user.inProgress };
}

const reduxFormPasswordReset = reduxForm({
  validate,
  form: "PasswordResetForm"
})(PasswordResetForm);
export default withRouter(
  connect(mapStateToProps, { resetPassword })(reduxFormPasswordReset)
);
