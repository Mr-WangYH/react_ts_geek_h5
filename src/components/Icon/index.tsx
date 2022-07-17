/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-17 19:27:23
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-17 19:42:57
 */
import React from 'react'
import classNames from 'classnames'

type Props = {
  className ?: string,
  type :string,
  onClick ?: () => void
}

const Icon = ({className,type,onClick}:Props) => {
  return (
    <svg className={classNames('icon',className)} aria-hidden="true" onClick={onClick}>
        <use xlinkHref={`#${type}`}></use>
      </svg>
  )
}

export default Icon
