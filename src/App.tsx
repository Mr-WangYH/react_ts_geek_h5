/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-14 07:03:04
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-17 11:09:33
 */
import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home'></Redirect>}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Layout}></Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
