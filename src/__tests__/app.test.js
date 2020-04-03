import React from "react";
import App from "../Components/App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

import { shallow, mount } from "enzyme";
let store;
beforeEach(() => {
  store = mockStore({
    myState: "sample text"
  });
});

describe("testing app component", () => {
  it("should render without errors", () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should match snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
