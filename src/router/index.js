import { Children, Component } from "react"
import { createBrowserRouter,Navigate } from "react-router-dom"
import Main from "../Pages/main"
import Home from "../Pages/home"
import Mall from '../Pages/mall'
import User from '../Pages/user'
import pageOne from '../Pages/other/pageOne'
import pageTwo from '../Pages/other/pageTwo'
import Login from '../Pages/login'
const routes= [
    {
        path: '/',
        Component: Main,
        children: [
            {
                path: '/',
                element: <Navigate to='home' replace/>
            },
            {
                path: 'home',
                Component: Home
            },
            {
                path: 'mall',
                Component: Mall
            },
            {
                path: 'user',
                Component: User
            },
            {
                path: 'other',
                children:[
                    {
                        path: 'pageOne',
                        Component: pageOne  
                    },
                    {
                        path: 'pageTwo',
                        Component: pageTwo  
                    }
                ]
            }
        ]

    },
    {
        path: '/login',
        Component: Login
    }

]

export default createBrowserRouter(routes)