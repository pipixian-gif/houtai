import React from "react";
import {Tag, Space} from 'antd'
import "./index.css"
import { useSelector,useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import { closeTab,setCurrentMenu } from "../../store/reducers/tab";

const CommonTag = () => {
    const tabsList =useSelector(state => state.tab.tabList)
    const currentMenu =useSelector(state => state.tab.currentMenu)
    const dispatch = useDispatch()
    const action =useLocation()
    const navigate = useNavigate()
    const handleClose = (tag,index) => {
        let length =tabsList.length - 1
        dispatch(closeTab(tag))
        //关闭的不是当前的tag
        if(tag.path !==action.pathname){
            return
        }
        if(index ===length){
            //设置当前数据
            const curData = tabsList[index -1]
            dispatch(setCurrentMenu(curData) )
            navigate(curData.path)
        }else{
            //tag存在一个数据，选择后一个tag
            if(tabsList.length>1){
                //下一个tag
                const nextData = tabsList[index +1]
                dispatch(setCurrentMenu(nextData))
                navigate(nextData.path)
            }
        }
    }
    //点击tag
    const handleChange = (tag) => {
        dispatch(setCurrentMenu(tag))
        navigate(tag.path)
}
    //tag的显示逻辑
    const setTag = (flag,item,index) => {
        return (
            flag ? 
            <Tag color="#55acee" key={item.name} closeIcon onClose={() => handleClose(item,index)}>{item.label}</Tag>
            :
            <Tag onClick={() => handleChange(item)} key={item.name}>{item.label}</Tag>
        )
    }
    return (
        <Space className="common-tag" size={[0,8]} wrap>
            {/* <Tag>首页</Tag>
            <Tag color="#55acee" closeIcon onClose={handleClose}>用户列表</Tag> */}
            {
                currentMenu.name && tabsList.map((item,index) => (setTag(item.path === currentMenu.path,item,index)))
            }
        </Space>
    )
} 

export default CommonTag