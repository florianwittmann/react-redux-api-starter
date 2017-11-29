import React from "react";
import { shallow, render } from "enzyme";
import TextAreaField from "./TextAreaField";

test("should wrap redux-form field correctly", () => {
  const wrapper = shallow(<TextAreaField name="test" title="Area Title" />);
  const field = wrapper.prop("component");
  expect(field).toBeInstanceOf(Function);
  expect(wrapper).toMatchSnapshot();
});
