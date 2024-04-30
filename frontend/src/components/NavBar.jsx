
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    const [showReports, setShowReports] = useState(false);
    const [showAddText, setShowAddText] = useState(false);
    const [showAddExpensesText, setShowAddExpensesText] = useState(false);   
    
    const location = useLocation()
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/home")
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
        setShowText(location.pathname === "/home");
        setShowTransactionText(location.pathname === "/transaction");
        setShowReports(location.pathname === "/reports");
        setShowAddText(location.pathname === "/addIncome");
        setShowAddExpensesText(location.pathname === "/addExpenses");
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
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-black underline">
                            {showAddText || showAddExpensesText ? "Add" : <img src="../src/assets/img/add.png" className="w-6 h-6"/>}
                        </Button>                            
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><span onClick={goToAddIncome}>Income</span></DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><span onClick={goToAddExpenses}>Expenses</span></DropdownMenuItem>
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
