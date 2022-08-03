/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:42:06
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 16:40:50
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

type User = {
  id: string
  name: string
  photo: string
  art_count: number
  follow_count: number
  fans_count: number
  like_count: number
}

export type UserProfile = {
  id: string
  photo: string
  name: string
  mobile: string
  gender: number
  birthday: string
  intro: string
}

type ApiResponse<T> = AxiosResponse<T>

export { loginFromValue, Token, ApiResponse, User, UserProfile }
