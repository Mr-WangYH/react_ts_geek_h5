/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-14 07:03:04
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-24 16:19:38
 */
import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Edit from '@/pages/Edit'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home'></Redirect>}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Layout}></Route>
          <Route path='/profile/edit' component={Edit}></Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
