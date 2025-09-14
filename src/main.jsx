import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body'
import Login from './components/Login'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import Browse from './components/Browse.jsx'

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
      {
        path: "browse",  //  child route for "/browse"
        element: <Browse />,
      },


      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={appStore} >
    <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
