import React from "react";
import { shallow, render } from "enzyme";
import InputField from "./InputField";

test("should wrap redux-form field correctly", () => {
  const wrapper = shallow(<InputField name="test" type="text" />);
  const field = wrapper.prop("component");
  expect(field).toBeInstanceOf(Function);
  expect(wrapper).toMatchSnapshot();
});
