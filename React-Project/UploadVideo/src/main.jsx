import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
// import  AuthLayout from './components/index.js'
import { AuthLayout, Signup } from './components/index.js'
import AddPost from './Pages/AddPost.jsx'
// import Signup from './components/index.js'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import  AllPosts  from './Pages/Allpost.jsx'

import Login from './components/Login.jsx'


const router = createBrowserRouter([
    {
        path :'/',
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost/>
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },

        ]
    }
])
createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
)