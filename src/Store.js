import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import combineReducers from "./redux/reducers";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {} }) => {
  const middleware = applyMiddleware(thunk, reduxPromise);
  const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools(middleware)
  );

  return <Provider store={store}>{children}</Provider>;
};
