/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:23:29
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-23 16:53:43
 */

import { LoginAction } from '@/types/store'
import { getToken } from '@/utils/storage'

const initialState = getToken()

const login = (state = initialState, action: LoginAction) => {
  if (action.type === 'login/login') {
    return action.payload
  }
  return state
}

export default login
