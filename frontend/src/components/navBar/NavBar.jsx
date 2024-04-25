import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import "./NavBar.css"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
  

const NavBar = () => {

const navigate = useNavigate()

const goToHome = () => {
    navigate("/")
}

const goToAdd = () => {
    navigate("/Add")
}

const goToReports = () => {
    navigate("/Reports")
}

const goToTransaction= () => {
    navigate("/Transaction")
}


    return ( 
        <>
        <div className="">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <Button variant="ghost" onClick={goToHome}><img src="../src/assets/img/home.png"/></Button>
                <Button variant="ghost" onClick={goToAdd}><img src="../src/assets/img/add.png"/></Button>
                <Button variant="ghost" onClick={goToReports}><img src="../src/assets/img/credit-card.png"/></Button>
                <Button variant="ghost" onClick={goToTransaction}><img src="../src/assets/img/circular-diagram.png"/></Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        </div>


       
        </>
     );
}
 
export default NavBar;