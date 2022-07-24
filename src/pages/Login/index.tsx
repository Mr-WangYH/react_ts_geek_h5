/*
 * @Descripttion: 
 * @version: 
 * @Author: 阿鸿
 * @Date: 2022-07-14 07:54:17
 * @LastEditors: 阿鸿
 * @LastEditTime: 2022-07-23 21:53:43
 */
import React, { useRef,useState,useEffect } from 'react'
import { Button, NavBar,Form,Input,Toast } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import style from './index.module.scss'
import { loginFromValue } from '@/types/data'
import { useDispatch } from 'react-redux'
import { getCode, login } from '@/store/actions/login'
import { InputRef } from 'antd-mobile/es/components/input'


const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const inputRef = useRef<InputRef>(null)
  const [countDown,setCountDown]  = useState(0)
  const timerRef = useRef(0)

  useEffect(() => {
    if(countDown === 0){
      clearInterval(timerRef.current)
    }
  }, [countDown])

  useEffect(()=> {
    return () => {
      clearInterval(timerRef.current)
    }
  },[])

  const onFinish = async(values:loginFromValue) => {
    await dispatch(login(values))
      Toast.show({
        content:'登录成功',
        afterClose:() => {
          history.push('/home')
      }
    })
  }

  // 点击获取验证码
  const onGetCode = async() => {
    try {
      const value = await form.validateFields(['mobile'])
      await dispatch(getCode(value.mobile))
      setCountDown(60)
      timerRef.current = window.setInterval(() => {
       setCountDown((countDown) => countDown - 1)
      },1000)
    } catch (error) {
      inputRef.current?.focus()
    }
  }
  return (
    <div className={style.login}>
      <NavBar onBack={() => history.goBack()}></NavBar>
      <div className="login-form">
        <h2 className="title">账号登录</h2>
        <Form form={form} onFinish={onFinish}  validateTrigger={['onChange', 'onBlur']}>
          <Form.Item
            className="login-item"
            name="mobile"
            rules={[
              {
                required: true,
                message: '手机号不能为空'
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误'
              }
            ]}
          >
            <Input ref={inputRef} placeholder="请输入手机号" autoComplete="off"></Input>
          </Form.Item>
          <Form.Item
            className="login-item"
            name="code"
            extra={<span onClick={countDown === 0 ? onGetCode : undefined}>{countDown === 0 ? '发送验证码' : `${countDown}s后重新获取`}</span>}
            rules={[
              {
                required: true,
                message: '验证码不能为空'
              },
              {
                pattern: /^\d{6}$/,
                message: '验证码格式错误'
              }
            ]}
          >
            <Input placeholder="请输入验证码" autoComplete="off"></Input>
          </Form.Item>
          <Form.Item>
            <Button type='submit' block color='primary' className='login-submit'>提交</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    
  )
}

export default Login
