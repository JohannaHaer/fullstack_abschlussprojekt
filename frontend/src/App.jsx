import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NavBar from '@/components/NavBar'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Transaction from './pages/Transaction'
import SetupAccount from './pages/SetupAccount'
import AddIncome from './pages/AddIncome'
import AddExpenses from './pages/AddExpenses'
import Pitch from './pages/Pitch'
import Startpage from './pages/Startpage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/start' element={<Startpage/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/pitch' element={<Pitch/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/setup-account' element={<SetupAccount/>}/>
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/addIncome' element={<AddIncome />} />
        <Route path='/addExpenses' element={<AddExpenses />} />
        <Route path='/reports' element={<Reports/>} />
      </Routes>
        
    </>
  )
}

export default App
