import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './components/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createElement } from 'react'
import User from './components/User/User.jsx'
import Github, { gitHUbinfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       { 
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]

//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element ={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader ={gitHUbinfoLoader}
      path='github' element={<Github/>} />
    </Route>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Layout/> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
