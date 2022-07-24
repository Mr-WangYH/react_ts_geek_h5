/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-14 07:03:04
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-18 07:37:12
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <Provider store={store}>
    <App />
  </Provider>
);

