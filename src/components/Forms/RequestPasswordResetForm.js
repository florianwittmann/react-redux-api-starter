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
import { requestPasswordReset } from "../../data/user/actions";
import { withRouter } from "react-router-dom";

export const RequestPasswordResetForm = props => {
  const onSubmit = ({ email }) => {
    props.requestPasswordReset({ email }, () => {
      props.history.push("/reset/success");
    });
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <InputField type="email" name="email" title="Email" icon="envelope" />
      <Alert errorMessage={props.errorMessage} />
      <SubmitButton inProgress={props.inProgress}>Continue</SubmitButton>
    </form>
  );
};

function validate(values) {
  return checkValidation(values, {
    email: [isRequired, isEmail]
  });
}

function mapStateToProps(state) {
  return { errorMessage: state.user.error, inProgress: state.user.inProgress };
}

const reduxFormRequestPasswordReset = reduxForm({
  validate,
  form: "RequestPasswordResetForm"
})(RequestPasswordResetForm);
export default withRouter(
  connect(mapStateToProps, { requestPasswordReset })(
    reduxFormRequestPasswordReset
  )
);
