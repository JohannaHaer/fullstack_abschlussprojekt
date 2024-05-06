import { logout } from "@/functions/fetches/logout";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom'
import Toggle from "./Toggle";
import imageSettings from "@/assets/img/settings.png"
import imageQuestion from "@/assets/img/question.png"
import imageLogout from "@/assets/img/logout.png"
import imageNext from "@/assets/img/next.png"
import imageNightMode from "@/assets/img/night-mode.png"

const SettingsForm = () => {

  const navigate = useNavigate()


  const handleLogout = () =>{
    logout()
    navigate('/')
  }

  const goToEditUser = () => {
    navigate("/editUser")
  }

  return ( 
    <>

<h1 className="text-4xl mt-10 text-center">Settings</h1>    
  <section className=" ml-6 mr-6 mt-12 rounded-lg h-6 flex flex-col ">
      
  <div className="mb-6 flex flex-col bg-accent rounded-lg ">
  <p className='text-lg border h-12 items-center rounded-md flex  justify-between bg-primary text-primary-foreground hover:bg-primary/90'>
    <span className="flex items-center mx-4">
      <img src={imageNightMode} className="w-6 h-6 mr-2" alt="Night Mode"></img>
      Darkmode
    </span>
    <Toggle className="w-6 h-6 mr-2" />
  </p>
</div>   

      <div className=" flex flex-col">
      <Button onClick={goToEditUser} className='text-lg border h-12 justify-between' >
        <span className="flex">
        <img src={imageSettings} className="w-6 h-6 mr-2">
          </img>  
          Edit Profile
          </span>
          <img src={imageNext} className="w-6 h-6"></img>
            </Button>
      </div>

      <div className=" flex flex-col">
      <Button  className='text-lg border h-12 justify-between' >
        <span className="flex">
        <img src={imageQuestion} className="w-6 h-6 mr-2"></img> FAQ
        </span>
        <img src={imageNext} className="w-6 h-6"></img> </Button>
      </div>
     
      <div className="mb-8  flex flex-col">
      <Button  className='text-lg border h-12 justify-between' >
        <span className="flex">
        <img src={imageQuestion} className="w-6 h-6 mr-2"></img> Terms and Services
        </span>
        <img src={imageNext} className="w-6 h-6"></img> </Button>
      </div>

      <div className="mb-8  flex flex-col">
      <Button onClick={handleLogout} className='text-lg border h-12 justify-between' >
        <span className="flex">
        <img src={imageLogout} className="w-6 h-6 mr-2"></img> Logout
        </span>
        <img src={imageNext} className="w-6 h-6"></img> </Button>
      </div>     
       </section>

    </>
    );
}

export default SettingsForm;

// import { logout } from "@/functions/fetches/logout";
// import { Button } from "./ui/button";
// import { useNavigate } from 'react-router-dom'
// import Toggle from "./Toggle";
// import imageSettings from "@/assets/img/settings.png"
// import imageQuestion from "@/assets/img/question.png"
// import imageLogout from "@/assets/img/logout.png"
// import imageNext from "@/assets/img/next.png"
// import imageNightMode from "@/assets/img/night-mode.png"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// const SettingsForm = () => {

//   const navigate = useNavigate()


//   const handleLogout = () =>{
//     logout()
//     navigate('/')
//   }

//   const goToEditUser = () => {
//     navigate("/editUser")
//   }

//   return ( 
//     <>
//   <h1 className="text-4xl mt-10 text-center">Settings</h1>    
//   <Card className="mx-10 mt-8">
//   <CardHeader>
//     <CardTitle className=''>Darkmode <Toggle /></CardTitle>
   
//   </CardHeader>
//   <CardContent>
//     <p>Darkmode</p>
//   </CardContent>
//   <CardFooter>
//     <p>Card Footer</p>
//   </CardFooter>
// </Card>

// {/* className=" bg-accent rounded-lg h-3/6 " */}
//     </>
//    );
// }
 
// export default SettingsForm;

// <p  className='text-lg border h-12 justify-between' >
//      <span className="flex">
//  <img src={imageNightMode} className="w-6 h-6 mr-2"></img>
//     </span>
//     <Toggle /> </p>