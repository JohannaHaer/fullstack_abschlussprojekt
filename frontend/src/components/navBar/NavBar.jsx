import { NavLink, useNavigate } from "react-router-dom";
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

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  
  

const NavBar = () => {



const navigate = useNavigate()

const goToHome = () => {
    navigate("/")
}


const goToReports = () => {
    navigate("/reports")
}

const goToTransaction = () => {
    navigate("/transaction")
}

const goToAddIncome = () => {
    navigate("/addIncome")
}

const goToAddExpenses = () => {
    navigate("/addExpenses")
}

    return ( 
        <>
        <NavigationMenu >
                <NavigationMenuItem className="flex justify-around w-full  list-none shadow-inner border-t-2 bottom-0 fixed bg-white  h-12 ">
                <Button variant="ghost" onClick={goToHome}><img src="../src/assets/img/home.png" className="w-6 h-6"/></Button>
                <Button variant="ghost" onClick={goToTransaction}><img src="../src/assets/img/credit-card.png" className="w-6 h-6"/></Button>
               
                <DropdownMenu>
                    <DropdownMenuTrigger><Button variant="ghost"><img src="../src/assets/img/add.png" className="w-6 h-6"/></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuItem><button onClick={goToAddIncome}>Income</button></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><button onClick={goToAddExpenses}>Expenses</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" onClick={goToReports}><img src="../src/assets/img/circular-diagram.png" className="w-6 h-6"/></Button>
                </NavigationMenuItem>
        </NavigationMenu>

        </>
     );
}
 
export default NavBar;