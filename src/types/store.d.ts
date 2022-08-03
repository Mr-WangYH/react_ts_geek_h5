/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-18 07:44:21
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 16:42:38
 */
import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import { Token, User, UserProfile } from './data'

type LoginAction = {
  type: 'login/login'
  payload: Token
}
type ProfileAction =
  | {
      type: 'profile/getUser'
      payload: User
    }
  | {
      type: 'profile/getUserProfile'
      payload: UserProfile
    }
type RootAction = LoginAction | ProfileAction

type RootState = ReturnType<typeof store.getState>
type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export { RootState, RootThunkAction, LoginAction, ProfileAction }
