import React from "react";
import { shallow } from "enzyme";
import { LoginForm } from "./LoginForm";

test("should render the LoginForm", () => {
  const wrapper = shallow(<LoginForm handleSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
