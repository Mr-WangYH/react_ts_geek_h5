/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-19 07:27:52
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-23 18:22:29
 */
import { ApiResponse, loginFromValue, Token } from '@/types/data'
import instance from '@/utils/request'

export const loginApi = (data: loginFromValue) => {
  return instance.post<ApiResponse<Token>>('/authorizations', data)
}

export const getCodeApi = (data: string) => {
  return instance.get('/sms/codes/' + data)
}
