/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:42:06
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-22 07:54:16
 */
import { AxiosResponse } from 'axios'

type loginFromValue = {
  mobile: String
  code: String
}

type Token = {
  token: string
  refresh_token: string
}

type ApiResponse<T> = AxiosResponse<T>

export { loginFromValue, Token, ApiResponse }
