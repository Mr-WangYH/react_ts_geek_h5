/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:22:51
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 15:35:54
 */
import { combineReducers } from 'redux'

import login from './login'
import profile from './profile'

const rootReducer = combineReducers({
  login,
  profile,
})

export default rootReducer
