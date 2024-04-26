import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import NavBar from './components/navBar/NavBar'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Transaction from './pages/Transaction'
import Add from './pages/AddIncome'
import SetupAccount from './pages/SetupAccount'
import AddIncome from './pages/AddIncome'
import AddExpenses from './pages/AddExpenses'


function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/Reports' element={<Reports/>} />
        <Route path='/Transaction' element={<Transaction />} />
        <Route path='/AddIncome' element={<AddIncome />} />
        <Route path='AddExpenses' element={<AddExpenses />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/setup-account' element={<SetupAccount/>}/>
      </Routes>
        <NavBar />
    </>
  )
}

export default App
