import React from "react";
import { shallow } from "enzyme";
import { Header } from "./index";
test("should render the header as anonymous user with closed menu", () => {
  const wrapper = shallow(
    <Header authenticated={false} burgerMenuActive={false} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render the header as logged in user  with closed menu", () => {
  const wrapper = shallow(
    <Header authenticated={true} burgerMenuActive={false} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render the header as anonymous user with opened menu", () => {
  const wrapper = shallow(
    <Header authenticated={false} burgerMenuActive={true} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render the header as logged in user  with opened menu", () => {
  const wrapper = shallow(
    <Header authenticated={true} burgerMenuActive={true} />
  );
  expect(wrapper).toMatchSnapshot();
});
