import AddTransactionForm from "@/components/AddTransactionForm";
import NavBar from "@/components/NavBar";
import HeaderAddIncome from "@/components/header/HeaderAddIncome";

const AddIncome = () => {
    return ( 
        <>
        <HeaderAddIncome/>
        <section className='py-5 px-4 h-dvh'>
            <AddTransactionForm type={'income'}/>
        </section>
        <NavBar/>
        </>
    );
}

export default AddIncome;