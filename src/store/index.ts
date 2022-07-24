/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:22:18
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-18 07:29:32
 */
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers/index'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
