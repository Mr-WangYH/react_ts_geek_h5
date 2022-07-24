/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-23 16:40:41
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-23 16:50:56
 */
import { Token } from '@/types/data'
const tokenKey = 'geek-h5-token'

// 获取本地token
export const getToken = () => {
  return JSON.parse(localStorage.getItem(tokenKey) || '{}')
}

// 存储本地token
export const setToken = (value: Token) => {
  localStorage.setItem(tokenKey, JSON.stringify(value))
}

// 删除本地token
export const removeToken = () => {
  localStorage.removeItem(tokenKey)
}

// 判断本地是否有token
export const hasToken = () => {
  return !!getToken().token
}
