import headerReducer from "./reducer";
import { BURGERMENU_TOGGLE, BURGERMENU_CLOSE } from "./types";

test("should setup default header values", () => {
  const state = headerReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ burgerMenuActive: false });
});

test("should toggle burger menu in initial state", () => {
  const state = headerReducer(undefined, { type: BURGERMENU_TOGGLE });
  expect(state).toEqual({ burgerMenuActive: true });
});

test("should toggle burger menu in closed state", () => {
  const state = headerReducer(
    { burgerMenuActive: false },
    { type: BURGERMENU_TOGGLE }
  );
  expect(state).toEqual({ burgerMenuActive: true });
});

test("should toggle burger menu in opened state", () => {
  const state = headerReducer(
    { burgerMenuActive: true },
    { type: BURGERMENU_TOGGLE }
  );
  expect(state).toEqual({ burgerMenuActive: false });
});

test("should close burger menu in initial state", () => {
  const state = headerReducer(undefined, { type: BURGERMENU_CLOSE });
  expect(state).toEqual({ burgerMenuActive: false });
});

test("should close burger menu in already closed state", () => {
  const state = headerReducer(
    { burgerMenuActive: false },
    { type: BURGERMENU_CLOSE }
  );
  expect(state).toEqual({ burgerMenuActive: false });
});

test("should close burger menu in opened state", () => {
  const state = headerReducer(
    { burgerMenuActive: true },
    { type: BURGERMENU_CLOSE }
  );
  expect(state).toEqual({ burgerMenuActive: false });
});
