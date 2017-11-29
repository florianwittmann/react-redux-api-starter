import React from "react";
import { shallow } from "enzyme";
import DefaultLayout from "./default";
test("should test the layout comp without titles", () => {
  const wrapper = shallow(<DefaultLayout />);
  expect(wrapper).toMatchSnapshot();
});

test("should test the layout comp with title and subtitle", () => {
  const wrapper = shallow(
    <DefaultLayout title="Layout title" subtitle="Layout subtitle" />
  );
  expect(wrapper).toMatchSnapshot();
});
