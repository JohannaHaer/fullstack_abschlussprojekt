import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NavBar from './components/navBar/NavBar'
import Reports from './pages/Reports'
import Transaction from './pages/Transaction'
import Add from './pages/Add'
import SetupAccount from './pages/SetupAccount'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/Reports' element={<Reports/>} />
        <Route path='/Transaction' element={<Transaction />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/setup-account' element={<SetupAccount/>}/>
      </Routes>
        <NavBar />
    </>
  )
}

export default App
