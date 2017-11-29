import axios from "axios";
import { loginUser } from "./actions";
import { LOGIN_INPROGRESS, LOGIN_SUCCESS } from "./types";
import configureMockStore from "redux-mock-store";
import AxiosMockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test("should setup default user values", done => {
  const store = mockStore({});
  var axiosMock = new AxiosMockAdapter(axios);
  const data = {
    token: "a_token_value"
  };

  const ROOT_URL = process.env.REACT_APP_API_SERVER;
  axiosMock.onPost(`${ROOT_URL}/user/login`).reply(200, data);

  store
    .dispatch(
      loginUser({ email: "test@test.de", password: "123456" }, () => {})
    )
    .then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions.length).toBe(2);
      expect(expectedActions).toContainEqual({
        type: LOGIN_INPROGRESS
      });
      expect(expectedActions).toContainEqual({
        type: LOGIN_SUCCESS
      });
      done();
    });
});
