/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-24 11:38:05
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-08-04 07:47:56
 */
import { getUserApi, getUserProfileApi, updataUserPhotoApi, updataUserProfileApi } from '@/api/user'
import { RootThunkAction } from '@/types/store'

// 获取用户信息
export const getUser = (): RootThunkAction => {
  return async (dispatch) => {
    const res = await getUserApi()
    dispatch({
      type: 'profile/getUser',
      payload: res.data.data,
    })
  }
}

// 获取用户资料
export const getUserProfile = (): RootThunkAction => {
  return async (dispatch) => {
    const res = await getUserProfileApi()
    dispatch({
      type: 'profile/getUserProfile',
      payload: res.data.data,
    })
  }
}

// 修改用户资料
export const updataUserProfile = (type: string, value: string): RootThunkAction => {
  return async (dispatch) => {
    await updataUserProfileApi(type, value)
    dispatch(getUserProfile())
  }
}

// 修改用户资料
export const updataUserPhoto = (data: FormData): RootThunkAction => {
  return async (dispatch) => {
    await updataUserPhotoApi(data)
    dispatch(getUserProfile())
  }
}
