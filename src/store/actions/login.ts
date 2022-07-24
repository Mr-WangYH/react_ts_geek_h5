/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:54:01
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-23 21:10:10
 */

import { getCodeApi, loginApi } from '@/api/user'
import { loginFromValue } from '@/types/data'
import { RootThunkAction } from '@/types/store'
import { setToken } from '@/utils/storage'

export const login = (value: loginFromValue): RootThunkAction => {
  return async (dispatch) => {
    const res = await loginApi(value)
    dispatch({
      type: 'login/login',
      payload: res.data.data,
    })
    setToken(res.data.data)
  }
}

export const getCode = (mobile: string) => {
  return async () => {
    await getCodeApi(mobile)
  }
}
