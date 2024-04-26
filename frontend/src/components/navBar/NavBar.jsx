
import { useNavigate, useLocation } from "react-router-dom";
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
import { useState, useEffect } from "react";
  
  
const NavBar = () => {

    const [showText, setShowText] = useState(false);
    const [showTransactionText, setShowTransactionText] = useState(false);
    const [showReports, setShowReports] = useState(false)
    const location = useLocation()

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

    useEffect(() => {
        if (location.pathname === "/") {
            setShowText(true);
        } else {
            setShowText(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === "/transaction") {
            setShowTransactionText(true);
        } else {
            setShowTransactionText(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === "/reports") {
            setShowReports(true);
        } else {
            setShowReports(false);
        }
    }, [location.pathname]);

    return ( 
        <>
        <NavigationMenu >
                <NavigationMenuItem className="flex justify-around w-full  list-none shadow-inner border-t-2 bottom-0 fixed bg-white  h-12 ">
                {showText ? (
                    <Button variant="ghost" onClick={goToHome} className="text-black underline">Home</Button>
                ) : (
                    <Button variant="ghost" onClick={goToHome}><img src="../src/assets/img/home.png" className="w-6 h-6"/></Button>
                )}
                 {showTransactionText ? (
                    <Button variant="ghost" onClick={goToTransaction} className="underline text-black">Transaction</Button>
                ) : (
                    <Button variant="ghost" onClick={goToTransaction}><img src="../src/assets/img/credit-card.png" className="w-6 h-6"/></Button>
                )}
                <DropdownMenu>
                    <DropdownMenuTrigger><Button variant="ghost"><img src="../src/assets/img/add.png" className="w-6 h-6"/></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuItem><button onClick={goToAddIncome}>Income</button></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><button onClick={goToAddExpenses}>Expenses</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {showReports ? (
                    <Button variant="ghost" onClick={goToReports} className="underline text-black">Reports</Button>
                ) : (
                    <Button variant="ghost" onClick={goToReports}><img src="../src/assets/img/circular-diagram.png" className="w-6 h-6"/></Button>
                )}
                </NavigationMenuItem>
        </NavigationMenu>

        </>
     );
}
 
export default NavBar;
