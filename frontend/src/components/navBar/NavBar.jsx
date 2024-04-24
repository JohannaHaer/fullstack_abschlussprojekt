import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
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
    return ( 
        <>
        <div className="navBar">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavLink to="/"><Button variant="ghost">Home</Button></NavLink>
                <NavLink to="/"><Button variant="ghost">Add</Button></NavLink>
                <NavLink to="/"><Button variant="ghost">Reports</Button></NavLink>
                <NavLink to="/"><Button variant="ghost">Transactions</Button></NavLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        </div>


       
        </>
     );
}
 
export default NavBar;