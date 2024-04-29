import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LogoIncome from "@/components/logo/LogoIncome";

const AddIncome = () => {
    return ( 
        <>
        <LogoIncome/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
            <h3>hallo ich bin income</h3>
        </section>
        <NavBar/>
        </>
     );
}
 
export default AddIncome;