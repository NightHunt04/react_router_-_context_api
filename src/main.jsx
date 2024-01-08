import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
import Service from './components/service/Service.jsx'
import Contact from './components/contact/Contact.jsx'
import SignIn from './components/signin/SignIn.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'about',
        element : <About />
      },
      {
        path : 'service',
        element : <Service />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : 'sign-up',
        element : <SignIn />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
