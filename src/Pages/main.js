import React from "react"
import { Outlet } from "react-router-dom"
import { Button, Layout, Menu, theme } from 'antd';
import CommonAside from "../components/commonAside";
import CommonHeader from "../components/commonHeader";
import { useSelector } from "react-redux";
import CommonTag from "../components/commonTag";
import { RouterAuth } from "../router/routerAuth";

const { Header, Sider, Content } = Layout;
const Main = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    //获取展开收起的状态
    const collapsed= useSelector(state => state.tab.isCollapse)
    return (
        <RouterAuth>
        <Layout className="main-container">
            <CommonAside collapsed={collapsed}/>
            <Layout>
                <CommonHeader collapsed={collapsed}/>
                <CommonTag></CommonTag>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
        </RouterAuth>
    );
};

export default Main