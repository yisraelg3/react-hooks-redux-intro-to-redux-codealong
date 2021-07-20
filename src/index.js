import React from "react";
import ReactDOM from "react-dom";
import { createStore }from 'redux'
import { Provider } from'react-redux'
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>,
    document.getElementById("root")
 )

