/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-14 07:54:50
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 16:57:07
 */
import React from 'react'
import {  TabBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { Route, useHistory, useLocation } from 'react-router-dom'
import Home from '../Home'
import Profile from '../Profile'
import Question from '../Question'
import Video from '../Video'

const tabs = [
  { path: '/home', icon: 'iconbtn_home', text: '首页' },
  { path: '/home/question', icon: 'iconbtn_qa', text: '问答' },
  { path: '/home/video', icon: 'iconbtn_video', text: '视频' },
  { path: '/home/profile', icon: 'iconbtn_mine', text: '我的' },
]


const Layout = () => {
  const history = useHistory()
  const loaction = useLocation()
  
  const onTabBarChange = (key:string) => {
    history.push(key)
  }

  return (
    <div className={styles.root}>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/home/profile' component={Profile}></Route>
      <Route exact path='/home/question' component={Question}></Route>
      <Route exact path='/home/video' component={Video}></Route>
      
      <TabBar className='tab-bar' onChange={onTabBarChange} activeKey={loaction.pathname}>
          {tabs.map(item => (
            <TabBar.Item key={item.path} icon={(active) => (<Icon type={active ? item.icon + '_sel' : item.icon}/>)} title={item.text} />
          ))}
        </TabBar>
    </div>
  )
}

export default Layout
