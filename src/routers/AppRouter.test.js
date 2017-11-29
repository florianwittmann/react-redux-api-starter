import React from "react";
import { shallow } from "enzyme";
import AppRouter from "./AppRouter";
test("should render the AppRouter", () => {
  const wrapper = shallow(<AppRouter />);
  expect(wrapper).toMatchSnapshot();
});
