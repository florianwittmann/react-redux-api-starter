import React from "react";
import { shallow } from "enzyme";
import { RequestPasswordResetForm } from "./RequestPasswordResetForm";

test("should render the RequestPasswordResetForm", () => {
  const wrapper = shallow(<RequestPasswordResetForm handleSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
