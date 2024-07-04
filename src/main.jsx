import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import Services from './Page/Services.jsx'
import Contact from './Page/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/test",
        element: <p>hello world</p>
      }
    ]
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/contact",
    element: <Contact />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter basename='/vica-trippy/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
