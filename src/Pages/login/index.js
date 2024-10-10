import React from "react";
import './login.css'
import { Form ,Input,Button,message} from "antd";
import { getMenu } from "../../api";
import { useNavigate,Navigate } from "react-router-dom";

const Login = () => {
    const Navigate = useNavigate()
    //在登陆状态下跳转到home页面
    if(localStorage.getItem('token')){
        return <Navigate to="/home" replace></Navigate>
    }
    const handleSubmit = (val) => {
        if(!val.password || !val.username){ return message.open({type: 'warning',content: '请输入用户名和密码'})}
        getMenu(val).then(({data}) => {
            localStorage.setItem('token',data.data.token)
            Navigate('/home')
        })
    }
    return(
        <Form className="login-container" onFinish={handleSubmit}>
            <div className="login_title">系统登录</div>
            <Form.Item
                label= "账号"
                name = "username"
            >
                <Input placeholder="请输入账号"></Input>
            </Form.Item>
            <Form.Item
                label= "密码"
                name = "password"
            >
                <Input.Password placeholder="请输入密码"></Input.Password>
            </Form.Item>
            <Form.Item className="login-button">
                <Button type="primary" htmlType="submit">登陆</Button>
            </Form.Item>
        </Form>
    )
}

export default Login