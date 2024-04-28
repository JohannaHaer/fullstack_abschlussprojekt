import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LogoExpenses from "@/components/logo/LogoExpenses";

const AddExpenses = () => {
    return ( 
        <>
        <LogoExpenses/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
            <h2>hallo ich bin expenses</h2>
        </section>
        <NavBar/>
        </>
     );
}
 
export default AddExpenses;