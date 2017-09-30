import React from "react";
import DefaultLayout from "../../../../layouts/default";
import PasswordResetForm from "../../../../components/Forms/PasswordResetForm";

export default () => {
  return (
    <DefaultLayout title="Reset password">
      <PasswordResetForm />
    </DefaultLayout>
  );
};
