import React from "react";
import { shallow } from "enzyme";
import SubmitButton from "./SubmitButton";

test("should render SubmitButton", () => {
  const wrapper = shallow(<SubmitButton>Some Button</SubmitButton>);
  expect(wrapper).toMatchSnapshot();
});

test("should render SubmitButton inProgress", () => {
  const wrapper = shallow(
    <SubmitButton inProgress={true}>Some Button</SubmitButton>
  );
  expect(wrapper).toMatchSnapshot();
});
