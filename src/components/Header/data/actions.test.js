import { toggleBurgerMenu, closeBurgerMenu } from "./actions";
import { BURGERMENU_TOGGLE, BURGERMENU_CLOSE } from "./types";

test("should setup toggle burger menu action object", () => {
  const action = toggleBurgerMenu();
  expect(action).toEqual({
    type: BURGERMENU_TOGGLE
  });
});

test("should setup close burger menu action object", () => {
  const action = closeBurgerMenu();
  expect(action).toEqual({
    type: BURGERMENU_CLOSE
  });
});
