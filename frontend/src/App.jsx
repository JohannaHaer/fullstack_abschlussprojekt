import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Transaction from './pages/Transaction'
import SetupAccount from './pages/SetupAccount'
import AddIncome from './pages/AddIncome'
import AddExpenses from './pages/AddExpenses'
import Pitch from './pages/Pitch'
import Landingpage from './pages/Landingpage'
import Settings from './components/Settings'
import ForgotPassword from './pages/ForgotPassword'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/pitch' element={<Pitch/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/setup-account' element={<SetupAccount/>}/>
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/addIncome' element={<AddIncome />} />
        <Route path='/addExpenses' element={<AddExpenses />} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
        
    </>
  )
}

export default App
