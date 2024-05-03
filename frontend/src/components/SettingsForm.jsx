import { logout } from "@/functions/fetches/logout";
import Header from "./Header";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom'


const SettingsForm = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    logout()
    navigate('/')
  }
  return ( 
    <>
      <div className="flex flex-col">
      <Button type="submit" className='text-lg' id='transactionButton'>My wallet</Button>
      <div className="mt-4 mb-4 flex flex-col">
      <Button type="submit" className='text-lg' id='transactionButton'>darkmode</Button>
      <Button type="submit" className='text-lg' id='transactionButton'>settings</Button>
      <Button type="submit" className='text-lg' id='transactionButton'>FAQ</Button>
      </div>
      <Button onClick={handleLogout} className='text-lg' id='transactionButton'>Logout</Button>
      </div>

    </>
    );
}

export default SettingsForm;