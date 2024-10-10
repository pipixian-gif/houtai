import React from "react"
import { Button, Layout, Avatar,Dropdown, Collapse } from 'antd';
import './index.css'
import {MenuFoldOutlined } from '@ant-design/icons'
import { Color } from "antd/es/color-picker";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../../store/reducers/tab";
import { useNavigate } from "react-router-dom";


const { Header, Sider, Content } = Layout;

const CommonHeader = ( {collapsed} ) => {
    const navigate =useNavigate()
    //登出
    const logout = () => {
      localStorage.removeItem('token')
      navigate("/login")
    }
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" >
              个人中心
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={() => logout()} target="_blank" rel="noopener noreferrer" >
              退出
            </a>
          )
        }
      ];
    //创建dispath
    const dispatch = useDispatch()
    //点击展开收起按钮
    const setCollapsed = () => {
      console.log(collapsed)
      dispatch(collapseMenu())
    }
    return (
        <Header className="header-container">  
            <Button
                icon={<MenuFoldOutlined/>}
                type="text"
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff'
                }}
                onClick={() => {setCollapsed()}}
                
            />
            <Dropdown menu={{items}}>
                <Avatar size={36} src={<img src ={require("../../asserts/images/user.png")}/>}/>
            </Dropdown>
            
        </Header>
    )



}

export default CommonHeader