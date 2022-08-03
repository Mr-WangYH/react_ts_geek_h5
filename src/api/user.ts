/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-19 07:27:52
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-08-04 07:51:50
 */
import { ApiResponse, loginFromValue, Token, User, UserProfile } from '@/types/data'
import instance from '@/utils/request'

//登录
export const loginApi = (data: loginFromValue) => {
  return instance.post<ApiResponse<Token>>('/authorizations', data)
}

// 获取验证码
export const getCodeApi = (data: string) => {
  return instance.get('/sms/codes/' + data)
}

// 获取用户信息
export const getUserApi = () => {
  return instance.get<ApiResponse<User>>('/user')
}

// 获取用户资料
export const getUserProfileApi = () => {
  return instance.get<ApiResponse<UserProfile>>('/user/profile')
}

// 修改用户资料
export const updataUserProfileApi = (key: string, value: string) => {
  return instance.patch('/user/profile', { [key]: value })
}

// 修改用户头像
export const updataUserPhotoApi = (data: FormData) => {
  return instance.patch('/user/photo', data)
}
