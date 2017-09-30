import { BURGERMENU_CLOSE, BURGERMENU_TOGGLE } from "./types";

export function toggleBurgerMenu() {
  return {
    type: BURGERMENU_TOGGLE
  };
}

export function closeBurgerMenu() {
  return {
    type: BURGERMENU_CLOSE
  };
}
