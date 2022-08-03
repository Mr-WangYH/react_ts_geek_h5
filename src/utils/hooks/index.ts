/*
 * @Descripttion:
 * @version:
 * @Author: 阿鸿
 * @Date: 2022-07-24 18:24:00
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 18:26:43
 */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '@/types/store'
export const useInitState = (stateName: string, actionName: any) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state[stateName])

  useEffect(() => {
    dispatch(actionName())
  }, [])
  return state
}
