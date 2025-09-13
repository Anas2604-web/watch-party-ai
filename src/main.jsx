import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body'
import Login from './components/Login'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",   //  default child route for "/"
        element: <Body />,
      },
      {
        path: "login",  //  child route for "/login"
        element: <Login />,
      },

      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
