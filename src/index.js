import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/reset.css'
import { HashRouter } from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

