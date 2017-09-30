import { BURGERMENU_CLOSE, BURGERMENU_TOGGLE } from "./types";

export default function(state = { burgerMenuActive: false }, action) {
  switch (action.type) {
    case BURGERMENU_CLOSE:
      return { ...state, burgerMenuActive: false };
    case BURGERMENU_TOGGLE:
      return { ...state, burgerMenuActive: !state.burgerMenuActive };
    default:
      return state;
  }
}
