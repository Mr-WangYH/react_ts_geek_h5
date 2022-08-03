/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-25 07:52:41
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-27 07:11:54
 */
import { RootState } from '@/types/store'
import { Input, NavBar,TextArea } from 'antd-mobile'
import { InputRef } from 'antd-mobile/es/components/input'
import { TextAreaRef } from 'antd-mobile/es/components/text-area'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './index.module.scss'
type Prop = {
  onClose:() => void,
  type:'' | 'name' | 'intro'
  onUpdataUserProfile:(type:'' | 'name' | 'intro',value:string) => void
}

const EditInput = ({onClose,type,onUpdataUserProfile}:Prop) => {
  const isName = type === 'name'
  const name = isName ? '昵称' : '简介';
  const {userProfile} = useSelector((state:RootState) => state.profile)
  const [value,setValue] = useState(isName ? userProfile.name : userProfile.intro)
  const inputRef = useRef<InputRef>(null)
  const textAreaRef = useRef<TextAreaRef>(null)

  useEffect(() => {
    if(isName){
      inputRef.current?.focus()
    }else{
      textAreaRef.current?.focus()
      document.querySelector('textarea')?.setSelectionRange(-1,-1)  //可以让文本域选中
    }
  },[])
  return (
    <div className={styles.root}>
      <NavBar
        className="navbar"
        right={<span className="commit-btn" onClick={() => onUpdataUserProfile(type,value)}>提交</span>}
        onBack={onClose}
      >
        编辑{name}
      </NavBar>

      <div className="edit-input-content">
        <h3>{name}</h3>

        {
          type === 'name' ? (<div className="input-wrap">
          <Input placeholder="请输入" value={value} ref={inputRef} onChange={(e) => setValue(e)}/>
        </div>) : <TextArea
          placeholder='请输入内容'
          rows={5}
          value={value}
          ref={textAreaRef}
          onChange={(e) => setValue(e)}
        />
        }
        
      </div>
    </div>
  )
}

export default EditInput
