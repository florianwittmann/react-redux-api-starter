import React from "react";
import DefaultLayout from "../../../layouts/default";
import SignupForm from "../../../components/Forms/SignupForm";

export default () => {
  return (
    <DefaultLayout title="Signup" subtitle="Welcome to our WebApp!">
      <SignupForm />
    </DefaultLayout>
  );
};
