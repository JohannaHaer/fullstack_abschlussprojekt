import AddTransactionForm from "@/components/AddTransactionForm";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LogoIncome from "@/components/logo/LogoIncome";
import AddCategory from "@/components/AddCategory";

const AddIncome = () => {
    return ( 
        <>
        <LogoIncome/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
            <AddTransactionForm type={'income'}/>
            <AddCategory/>
        </section>
        
        <NavBar/>
        </>
    );
}

export default AddIncome;