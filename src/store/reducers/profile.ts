/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-24 15:26:45
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 16:50:49
 */
import { User, UserProfile } from '@/types/data'
import { ProfileAction } from '@/types/store'

const initState = {
  user: {} as User,
  userProfile: {} as UserProfile,
}
const profile = (state = initState, actions: ProfileAction) => {
  if (actions.type === 'profile/getUser') {
    return {
      ...state,
      user: actions.payload,
    }
  }
  if (actions.type === 'profile/getUserProfile') {
    return {
      ...state,
      userProfile: actions.payload,
    }
  }
  return state
}
export default profile
