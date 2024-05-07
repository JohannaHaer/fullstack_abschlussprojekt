import { logout } from "@/functions/fetches/logout";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import Toggle from "./Toggle";
import imageSettings from "@/assets/img/settings.png";
import imageQuestion from "@/assets/img/question.png";
import imageLogout from "@/assets/img/logout.png";
import imageNext from "@/assets/img/next.png";
import imageNightMode from "@/assets/img/night-mode.png";
import { useContext } from "react";
import { mainContext } from "@/context/mainProvider";

const SettingsForm = () => {
  const {user, setUser, setSaldo} = useContext(mainContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToEditUser = () => {
    navigate("/edit-profile");
  };

  const goToFaq = () => {
    navigate("/faq");
  };

  const goToTermsAndServices = () => {
    setUser(undefined)
    setSaldo(undefined)
    navigate("/terms-and-services");
  };

  return (
    <section className="py-5 px-4 h-dvh">
      <h1 className="text-2xl text-center font-bold pt-5 text-[#0097B2] dark:text-[#FFDE59]">Settings</h1>
      {/* <Card className='flex flex-col gap-4 px-2 w-full pb-20'>
        <CardContent className='bg-accent rounded-lg p-4 flex flex-col gap-7 w-full'>
            <div className='w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-b from-[#FFDE59] to-[#FF9900]'>
                <img src={user.pictureUrl}/>
            </div>
            <div className='flex flex-col gap-3'>
                <h3>Income</h3>
                <p className='text-xl'>+ $ {allIncome}</p>
            </div>
        </CardContent>
      </Card> */}
      <div className=" ml-6 mr-6 mt-12 rounded-lg h-6 flex flex-col">
        <div className="mb-6 flex flex-col bg-card rounded-lg ">
          <div className="text-lg border h-12 items-center rounded-md flex justify-between bg-accent text-primary-foreground hover:bg-primary/90">
            <div className="flex items-center mx-4">
              <img
                src={imageNightMode}
                className="w-6 h-6 mr-2"
                alt="Night Mode"
              />
              <p className="text-foreground">Darkmode</p>
            </div>
            <div className="mr-2">
              <Toggle />
            </div>
          </div>
        </div>

        <div className=" flex flex-col">
          <Button
            onClick={goToEditUser}
            className="text-lg border h-12 justify-between"
            variant='likeCard'
          >
            <div className="flex items-center">
              <img src={imageSettings} className="w-6 h-6 mr-2"/>
              Edit Profile
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>

        <div className=" flex flex-col">
          <Button onClick={goToFaq} className="text-lg border h-12 justify-between" variant='likeCard'>
            <div className="flex items-center">
              <img src={imageQuestion} className="w-6 h-6 mr-2"/>
              <p>FAQ</p> 
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>

        <div className="mb-8  flex flex-col">
          <Button onClick={goToTermsAndServices} className="text-lg border h-12 justify-between" variant='likeCard'>
            <div className="flex items-center">
              <img src={imageQuestion} className="w-6 h-6 mr-2"/> 
              <p>Terms and Services</p>
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>

        <div className="mb-8  flex flex-col">
          <Button
            onClick={handleLogout}
            className="text-lg border h-12 justify-between"
            variant='likeCard'
          >
            <div className="flex items-center">
              <img src={imageLogout} className="w-6 h-6 mr-2"/> 
              <p>Logout</p>
            </div>
            <img src={imageNext} className="w-6 h-6"/>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SettingsForm;

