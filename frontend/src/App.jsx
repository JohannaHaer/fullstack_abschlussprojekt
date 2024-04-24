import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import NavBar from './components/navBar/NavBar'
import { Home } from 'lucide-react'
import Reports from './pages/Reports'
import Transaction from './pages/Transaction'
import Add from './pages/Add'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/Add' element={<Add />} />
        <Route path='/Reports' element={<Reports/>} />
        <Route path='/Transaction' element={<Transaction />} />
      </Routes>
        <NavBar />
    </>
  )
}

export default App
