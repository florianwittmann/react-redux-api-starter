import React from "react";
import { shallow } from "enzyme";
import Alert from "./Alert";

test("should render empty alert without errorMessage", () => {
  const wrapper = shallow(<Alert />);
  expect(wrapper).toMatchSnapshot();
});

test("should render alert with correct errorMessage", () => {
  const wrapper = shallow(<Alert errorMessage="Some example error message." />);
  expect(wrapper).toMatchSnapshot();
});
