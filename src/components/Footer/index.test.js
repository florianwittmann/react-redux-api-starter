import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

test("should render the footer", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
