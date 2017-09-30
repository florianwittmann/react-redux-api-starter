import React from "react";
import DefaultLayout from "../../../layouts/default";
import LoginForm from "../../../components/Forms/LoginForm";

export default () => {
  return (
    <DefaultLayout title="Login" subtitle="Welcome to our WebApp!">
      <LoginForm />
    </DefaultLayout>
  );
};
