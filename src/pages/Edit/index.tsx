/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-24 16:17:24
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-08-04 07:49:12
 */
import { getUserProfile, updataUserPhoto, updataUserProfile } from '@/store/actions/profile'
import { useInitState } from '@/utils/hooks'
import { Button, List, DatePicker, NavBar,Popup,Toast, Input } from 'antd-mobile'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import EditInput from './components/EditInput'
import EditList from './components/EditList'

import styles from './index.module.scss'

const Item = List.Item

type showInput = {
  type:'' | 'name' | 'intro',
  visible:boolean
}

type userListType = {
  type:'' | 'gender' | 'photo',
  visible:boolean
}

const ProfileEdit = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showInput,setShowInput] = useState<showInput>({
    type:"",
    visible:false
  })

  const [userList,setUserList] = useState<userListType>({
    type:"",
    visible:false
  })
  
  const {userProfile} = useInitState('profile',getUserProfile)
  
  const onCloseInput = () => {
    setShowInput({
      type:"",
      visible:false
    })
  }

  const onUpdataUserProfile = async(type:string,value:string) => {
    if(type === 'photo'){
      fileInputRef.current?.click()
      return
    }
    await dispatch(updataUserProfile(type,value))
    Toast.show('更新成功')
    onCloseInput()
    onCloseUserList()
  }

  const onCloseUserList = () => {
    setUserList({
      type:"",
      visible:false
    })
  }

  // 选择图片
  const onFileChange = async(e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0]);
    const formData = new FormData();
    formData.append('photo',e.target.files![0])
    await dispatch(updataUserPhoto(formData))
    Toast.show('更新成功')
    onCloseUserList()
    
  }

  return (
    <div className={styles.root}>
      <div className="content">
        {/* 标题 */}
        <NavBar
          style={{
            '--border-bottom': '1px solid #F0F0F0'
          }}
          onBack={() => history.goBack()}
        >
          个人信息
        </NavBar>

        <div className="wrapper">
          {/* 列表 */}
          <List className="profile-list">
            {/* 列表项 */}
            <input onChange={(e) => onFileChange(e)} type='file' hidden ref={fileInputRef}></input>
            <Item
              extra={
                <span className="avatar-wrapper">
                  <img
                    width={24}
                    height={24}
                    src={userProfile.photo || 'http://toutiao.itheima.net/images/user_head.jpg'}
                    alt=""
                  />
                </span>
              }
              arrow
              onClick={() => setUserList({type:'photo',visible:true})}
            >
              头像
            </Item>
            <Item arrow extra={userProfile.name} onClick={() => setShowInput({type:'name',visible:true})}>
              昵称
            </Item>
            <Item
              arrow
              extra={
                <span className={classNames('intro', 'normal')}>
                  {userProfile.intro || '未填写'}
                </span>
              }
              onClick={() => setShowInput({type:'intro',visible:true})}
            >
              简介
            </Item>
          </List>

          <List className="profile-list">
            <Item arrow extra={userProfile.gender === 1 ? '女' : '男'} onClick={() => setUserList({type:'gender',visible:true})}>
              性别
            </Item>
            <Item arrow extra={userProfile.birthday}>
              生日
            </Item>
          </List>

          <DatePicker
            visible={false}
            value={new Date()}
            title="选择年月日"
            min={new Date(1900, 0, 1, 0, 0, 0)}
            max={new Date()}
          />
        </div>

        <div className="logout">
          <Button className="btn">退出登录</Button>
        </div>
      </div>

      {/* 弹出层 */}
      <Popup
        visible={showInput.visible}
        bodyStyle={{ height: '100vh' }}
        position='right'
        destroyOnClose
      >
        <EditInput onClose={onCloseInput} type={showInput.type} onUpdataUserProfile={onUpdataUserProfile}></EditInput>
      </Popup>

      {/* 性别头像弹出层 */}
       <Popup
        visible={userList.visible}
        destroyOnClose
        onMaskClick={onCloseUserList}
      >
        <EditList onClose={onCloseUserList} type={userList.type} onUpData={onUpdataUserProfile}></EditList>
      </Popup>
    </div>
  )
}

export default ProfileEdit
