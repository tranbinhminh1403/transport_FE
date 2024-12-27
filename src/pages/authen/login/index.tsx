import React from 'react'
import { Button, Form, Input } from 'antd'
import { useLoginProvider } from "../../../api/useAuth"
import { UserLoginRequest } from '../../../api/types'

export const LoginPage = () => {
  const { mutate: login, isPending } = useLoginProvider();

  const onFinish = (values: UserLoginRequest) => {
    login(values);
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <Form onFinish={onFinish}>
        <Form.Item 
          label="Username" 
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Password" 
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
