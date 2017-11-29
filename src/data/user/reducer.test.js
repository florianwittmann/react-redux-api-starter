import userReducer from "./reducer";
import { LOGIN_INPROGRESS, LOGIN_SUCCESS } from "./types";

test("should setup default user values", () => {
  const state = userReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("should set login in progress", () => {
  const state = userReducer(undefined, { type: LOGIN_INPROGRESS });
  expect(state).toEqual({ inProgress: true, error: "" });
});
