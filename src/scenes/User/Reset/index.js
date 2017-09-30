import React from "react";
import DefaultLayout from "../../../layouts/default";
import RequestPasswordResetForm
  from "../../../components/Forms/RequestPasswordResetForm";

export default () => {
  return (
    <DefaultLayout title="Reset password">
      <RequestPasswordResetForm />
    </DefaultLayout>
  );
};
