import { logout } from "@/functions/fetches/logout";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom'
import Toggle from "./Toggle";
import imageSettings from "@/assets/img/settings.png"
import imageQuestion from "@/assets/img/question.png"
import imageLogout from "@/assets/img/logout.png"
import imageNext from "@/assets/img/next.png"

const SettingsForm = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    logout()
    navigate('/')
  }
  return ( 
    <>
      <div className=" ml-4 mr-4 mt-12 rounded-lg h-6 flex flex-col ">
      <Button className='text-lg border h-12' >My wallet<img src={imageNext} className="w-6 h-6"></img> </Button>
      
      <div className="mt-8  flex flex-col ">
      <Button type="submit" className='text-lg border h-12 justify-around' >  darkmode <Toggle /></Button>
      
      </div>
      <div className=" flex flex-col">
      <Button  className='text-lg border h-12 ' ><img src={imageSettings} className="w-6 h-6 mr-2"></img>  settings<img src={imageNext} className="w-6 h-6"></img>  </Button>
      </div>
      <div className="mb-8  flex flex-col">
      <Button  className='text-lg border h-12' ><img src={imageQuestion} className="w-6 h-6 mr-2"></img> FAQ<img src={imageNext} className="w-6 h-6"></img> </Button>
      </div>
      <Button onClick={handleLogout} className='text-lg' id='transactionButton'>Logout</Button>
      </div>

    </>
    );
}

export default SettingsForm;