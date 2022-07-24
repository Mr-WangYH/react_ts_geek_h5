/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:22:51
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-18 07:29:36
 */
import { combineReducers } from 'redux'

import login from './login'

const rootReducer = combineReducers({
  login,
})

export default rootReducer
