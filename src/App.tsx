
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './pages/Navbar';

function App() {


  return (
    <div>
      <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App
