import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './index.css'




function App() {
  return (
     <>
    <Header />
    <Outlet />
    </>
  )
  
}

export default App
