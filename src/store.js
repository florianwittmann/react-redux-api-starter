import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import userReducer from "./data/user/reducer";
import headerReducer from "./components/Header/data/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
