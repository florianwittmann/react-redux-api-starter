import React from "react";
import { shallow } from "enzyme";
import { PasswordResetForm } from "./PasswordResetForm";

test("should render the PasswordResetForm", () => {
  const wrapper = shallow(<PasswordResetForm handleSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
