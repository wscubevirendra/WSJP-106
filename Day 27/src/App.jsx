import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact'
import MainLayout from './pages/MainLayout'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
      ]
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
