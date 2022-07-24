/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:44:21
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-22 07:04:43
 */
import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import { Token } from './data'

type LoginAction = {
  type: 'login/login'
  payload: Token
}
type RootAction = LoginAction

type RootState = ReturnType<typeof store.getState>
type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export { RootState, RootThunkAction, LoginAction }
